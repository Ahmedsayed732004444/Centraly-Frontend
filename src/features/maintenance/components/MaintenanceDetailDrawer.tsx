import { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateMaintenanceSchema, UpdateMaintenanceRequest, } from '../schemas/maintenanceSchemas';
import { useMaintenanceDetail, useUpdateMaintenance, useDeliverMaintenance, useReturnMaintenance} from '../api/queries';
import { RightDrawer as Drawer } from '@/shared/components/ui/RightDrawer';
import { Input } from '@/shared/components/ui/Input';
import { ConfirmModal } from '@/shared/components/ui/ConfirmModal';
import { tokens } from '@/shared/styles/tokens';
import { Save, CheckCircle, RotateCcw, Plus, Minus, Printer } from 'lucide-react';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { toast } from 'sonner';
import { MaintenanceProductPicker } from './MaintenanceProductPicker';
import { MaintenanceResponse } from '../schemas/maintenanceSchemas';
import { printMaintenanceIntakeReceipt, printMaintenanceDeliveryReceipt } from '../utils/maintenanceReceiptPrint';
import { statusConfig } from './MaintenanceListTable';
import { formatCurrency, formatNumber } from '@/shared/utils/currency';
import { formatDateOnly } from '@/shared/utils/date';
import { getMaintenancePrice } from '@/features/inventory/schemas/inventorySchemas';
interface Props {
  id: string | null;
  onClose: () => void;
  onDelivered?: (ticket: MaintenanceResponse) => void;
}
export function MaintenanceDetailDrawer({ id, onClose, onDelivered }: Props) {
  const { data: ticket, isLoading } = useMaintenanceDetail(id);
  const { mutate: updateTicket, isPending: isUpdating } = useUpdateMaintenance();
  const { mutate: deliverTicket, isPending: isDelivering } = useDeliverMaintenance();
  const { mutate: returnTicket, isPending: isReturning } = useReturnMaintenance();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isDeliverConfirmOpen, setIsDeliverConfirmOpen] = useState(false);
  const [isReturnConfirmOpen, setIsReturnConfirmOpen] = useState(false);
  // Part names come from the ticket itself (productsUsed already carries productName)
  // and from whatever the picker just added - no need to fetch every product in the
  // catalog (was pageSize:1000) just to resolve a handful of names.
  const [productNames, setProductNames] = useState<Record<string, string>>({});
  const { register, control, handleSubmit, reset, watch, formState: { isDirty, errors } } = useForm<UpdateMaintenanceRequest>({
    // z.coerce.number() makes the resolver's inferred input/output types diverge from
    // UpdateMaintenanceRequest in a way TS can't reconcile here - a known
    // zodResolver + z.coerce friction, not an oversight.
    resolver: zodResolver(updateMaintenanceSchema) as any,
    mode: 'onBlur',
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'productsUsed'
  });
  useEffect(() => {
    if (ticket) {
      setProductNames(prev => {
        const next = { ...prev };
        ticket.productsUsed.forEach(p => { next[p.productId] = p.productName; });
        return next;
      });
      reset({
        customerName: ticket.customerName,
        customerPhone: ticket.customerPhone || '',
        customerId: ticket.customerId || '',
        deviceDescription: ticket.deviceDescription || '',
        problem: ticket.problem || '',
        solution: ticket.solution || '',
        servicePrice: ticket.servicePrice,
        paidAmount: ticket.paidAmount,
        deliveryDate: ticket.deliveryDate ? ticket.deliveryDate.slice(0, 16) : '',
        productsUsed: ticket.productsUsed.map(p => ({
          productId: p.productId,
          quantity: p.quantity,
          maintenancePrice: p.maintenancePrice
        }))
      });
    }
  }, [ticket, reset]);
  const watchProductsUsed = watch('productsUsed') || [];
  const watchServicePrice = watch('servicePrice') || 0;
  const totalParts = watchProductsUsed.reduce((acc, curr) => acc + ((curr.maintenancePrice || 0) * (curr.quantity || 0)), 0);
  const currentTotal = Number(watchServicePrice) + totalParts;
  const currentPaid = watch('paidAmount') || 0;
  const remaining = currentTotal - currentPaid;
  // The deposit can exceed the current total while the final service price isn't set
  // yet (servicePrice still 0) - that's a customer credit, not a debt, and must never
  // render as a bare negative number.
  const hasCredit = remaining < 0;
  const onSubmit = (data: UpdateMaintenanceRequest) => {
    if (!id) return;
    if (!data.deliveryDate) delete data.deliveryDate;
    updateTicket({ id, data }, {
      onSuccess: () => toast.success('تم الحفظ بنجاح')
    });
  };
  const confirmDeliver = () => {
    if (!id || !ticket) return;
    deliverTicket(id, {
      onSuccess: (delivered) => {
        setIsDeliverConfirmOpen(false);
        onClose();
        if (onDelivered) {
          onDelivered(delivered || ticket);
        }
      },
    });
  };
  const confirmReturn = () => {
    if (!id) return;
    returnTicket(id, {
      onSuccess: () => {
        setIsReturnConfirmOpen(false);
        onClose();
      },
    });
  };
if (!id) return null;
  return (
    <Drawer
      isOpen={!!id}
      onClose={onClose}
      title={`تفاصيل الصيانة`}
      width="w-[700px] max-w-full"
    >
      {isLoading ? (
        <PageLoader />
      ) : !ticket ? (
        <div className="p-5 text-red-500">حدث خطأ في تحميل التذكرة</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit as any)} className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            {}
            <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${statusConfig[ticket.status]?.color ?? 'bg-slate-100 text-slate-800 border-slate-200'}`}>
              <div>
                <div className="font-bold text-lg">
                  الحالة: {statusConfig[ticket.status]?.label ?? ticket.status}
                </div>
                <div className="text-sm opacity-80 mt-0.5">
                  تاريخ الإنشاء: {formatDateOnly(ticket.createdAt)}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => printMaintenanceIntakeReceipt(ticket)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-lg text-xs font-bold transition-all shadow-2xs"
                  title="طباعة إيصال استلام الجهاز للعميل (Xprinter 80mm)"
                >
                  <Printer className="w-3.5 h-3.5 text-blue-600" />
                  <span>طباعة إيصال الاستلام</span>
                </button>
                {ticket.status === 'Delivered' && (
                  <button
                    type="button"
                    onClick={() => printMaintenanceDeliveryReceipt(ticket)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all shadow-2xs"
                    title="طباعة فاتورة تسليم الصيانة (بدون قطع الغيار)"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>طباعة فاتورة التسليم</span>
                  </button>
                )}
              </div>
            </div>
            {}
            <div className="bg-gray-50 p-4 sm:p-5 rounded-xl border border-gray-100 space-y-4">
              <h3 className="font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">بيانات العميل والجهاز</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">اسم العميل *</label>
                  <Input {...register('customerName')}  disabled={ticket.status !== 'Pending'} />
                  {errors.customerName && (
                    <p className="text-xs text-red-600 mt-1">{errors.customerName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                  <Input {...register('customerPhone')}  disabled={ticket.status !== 'Pending'} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">اسم الجهاز / الموديل</label>
                  <Input {...register('deviceDescription')}  disabled={ticket.status !== 'Pending'} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">موعد التسليم</label>
                  <Input type="datetime-local" {...register('deliveryDate')}  disabled={ticket.status !== 'Pending'} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">المشكلة (من العميل)</label>
                  <textarea {...register('problem')} className={tokens.input + " min-h-[80px] py-2 resize-y"} disabled={ticket.status !== 'Pending'} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الحل / التقرير الفني</label>
                  <textarea {...register('solution')} className={tokens.input + " min-h-[80px] py-2 resize-y"} disabled={ticket.status !== 'Pending'} />
                </div>
              </div>
            </div>
            {}
            <div className="bg-gray-50 p-4 sm:p-5 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2 gap-2">
                <h3 className="font-bold text-gray-800">قطع الغيار المستخدمة</h3>
                {ticket.status === 'Pending' && (
                  <button type="button" onClick={() => setIsPickerOpen(true)} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm font-medium bg-blue-50 px-3 py-1.5 rounded-lg shrink-0">
                    <Plus className="w-4 h-4" /> <span className="hidden xs:inline">إضافة قطعة</span>
                  </button>
                )}
              </div>
              <div className="space-y-3">
                {fields.length === 0 ? (
                  <p className="text-gray-400 text-sm text-center py-4">لم يتم إضافة قطع غيار</p>
                ) : (
                  fields.map((field, index) => {
                    const pId = watchProductsUsed[index]?.productId;
                    const prodName = (pId && productNames[pId]) || 'قطعة غيار';
                    return (
                      <div key={field.id} className="flex flex-wrap items-end gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                        <div className="flex-1 min-w-[140px]">
                          <label className="block text-xs font-medium text-gray-600 mb-1">المنتج</label>
                          <div className="font-bold text-sm text-gray-800 bg-gray-50/50 border border-gray-100 rounded-lg px-3 py-2 truncate">
                            {prodName}
                          </div>
                        </div>
                        <div className="w-20 sm:w-24">
                          <label className="block text-xs font-medium text-gray-600 mb-1">الكمية</label>
                          <Input
                            type="number"
                            min="1"
                            {...register(`productsUsed.${index}.quantity`)}
                            disabled={ticket.status !== 'Pending'}
                            onFocus={(e) => e.target.select()}
                          />
                          {errors.productsUsed?.[index]?.quantity && (
                            <p className="text-xs text-red-600 mt-1">{errors.productsUsed[index]?.quantity?.message}</p>
                          )}
                        </div>
                        <div className="w-24 sm:w-32 bg-gray-50/50 border border-gray-100 rounded-lg p-2 text-center">
                          <label className="block text-xs font-medium text-gray-500 mb-0.5">سعر الصيانة</label>
                          <div className="font-bold text-emerald-600 text-sm">
                            {formatNumber(watchProductsUsed[index]?.maintenancePrice || 0)} ج.م
                          </div>
                          <input type="hidden" {...register(`productsUsed.${index}.maintenancePrice`)} />
                        </div>
                        <div className="w-24 sm:w-32 bg-gray-50 border border-gray-200 rounded-lg p-2 text-center">
                          <label className="block text-xs font-medium text-gray-500 mb-0.5">الإجمالي</label>
                          <div className="font-bold text-gray-800 text-sm">
                            {formatNumber((watchProductsUsed[index]?.quantity || 0) * (watchProductsUsed[index]?.maintenancePrice || 0))}
                          </div>
                        </div>
                        {ticket.status === 'Pending' && (
                          <button type="button" onClick={() => remove(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100">
                            <Minus className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            {}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 sm:p-5 rounded-xl border border-gray-100 space-y-4">
                <h3 className="font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">الرسوم</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">أجرة الصيانة / الخدمة</label>
                    <Input
                      type="number"
                      step="1"
                      min="0"
                      {...register('servicePrice')}
                      disabled={ticket.status !== 'Pending'}
                      onFocus={(e) => e.target.select()}
                    />
                    {errors.servicePrice && (
                      <p className="text-xs text-red-600 mt-1">{errors.servicePrice.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">الدفعة المقدمة / المدفوع</label>
                    <Input
                      type="number"
                      step="1"
                      min="0"
                      {...register('paidAmount')}
                      disabled={ticket.status !== 'Pending'}
                      onFocus={(e) => e.target.select()}
                    />
                    {errors.paidAmount && (
                      <p className="text-xs text-red-600 mt-1">{errors.paidAmount.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className={`${tokens.darkSummaryPanel.root} p-5 sm:p-6 rounded-xl shadow-lg flex flex-col justify-center`}>
                <div className="space-y-3 mb-4">
                  <div className={`flex justify-between text-white font-bold ${tokens.darkSummaryPanel.divider} border-b pb-3`}>
                    <span>الإجمالي الكلي:</span>
                    <span className="text-xl">{formatNumber(currentTotal)} ج.م</span>
                  </div>
                  <div className={`flex justify-between ${tokens.darkSummaryPanel.accent} font-bold ${tokens.darkSummaryPanel.divider} border-b pb-3 pt-1`}>
                    <span>المدفوع (مقدم):</span>
                    <span className="text-lg">{formatNumber(Number(currentPaid))} ج.م</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm mt-auto">
                  {hasCredit ? (
                    <>
                      <div className="text-blue-200 text-sm mb-1">رصيد للعميل (المدفوع أكبر من الإجمالي الحالي)</div>
                      <div className="text-3xl font-black text-amber-300">
                        {formatNumber(Math.abs(remaining))} <span className="text-base font-normal opacity-80">ج.م</span>
                      </div>
                      <p className="text-blue-200/80 text-xs mt-2">لم يتم تحديد سعر الصيانة النهائي بعد - راجعه قبل التسليم</p>
                    </>
                  ) : (
                    <>
                      <div className="text-blue-200 text-sm mb-1">المبلغ المتبقي للتحصيل عند التسليم</div>
                      <div className={`text-3xl font-black ${remaining > 0 ? 'text-red-300' : 'text-green-300'}`}>
                        {formatNumber(remaining)} <span className="text-base font-normal opacity-80">ج.م</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-3">
              {ticket.status === 'Pending' && (
                <>
                  <button
                    type="submit"
                    disabled={isUpdating || !isDirty || isDelivering || isReturning}
                    className={tokens.btn.secondary + " flex items-center justify-center gap-2 w-full sm:w-auto"}
                  >
                    <Save className="w-5 h-5" /> حفظ التعديلات
                  </button>
                  {isDirty && (
                    <p className="text-xs text-amber-600 font-medium sm:self-center" role="status">
                      يجب حفظ التعديلات أولاً قبل التسليم أو الإرجاع
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsReturnConfirmOpen(true)}
                    disabled={isReturning || isDirty || isUpdating || isDelivering}
                    className={`${tokens.btn.warning} px-4 py-2 font-medium flex items-center justify-center gap-2 w-full sm:w-auto`}
                  >
                    <RotateCcw className="w-5 h-5" /> إرجاع بدون إصلاح
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsDeliverConfirmOpen(true)}
                    disabled={isDelivering || isDirty || isUpdating || isReturning}
                    className={`${tokens.btn.success} px-6 py-2 font-bold flex items-center justify-center gap-2 shadow-md w-full sm:w-auto sm:mr-auto`}
                  >
                    <CheckCircle className="w-5 h-5" /> تسليم للعميل وتحصيل
                  </button>
                </>
              )}
              {ticket.status !== 'Pending' && (
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {ticket.status === 'Delivered' && (
                    <button
                      type="button"
                      onClick={() => printMaintenanceDeliveryReceipt(ticket)}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-sm shadow-sm transition-colors w-full sm:w-auto"
                    >
                      <Printer className="w-4 h-4" />
                      <span>طباعة فاتورة التسليم (80mm)</span>
                    </button>
                  )}
                  <button type="button" onClick={onClose} className={tokens.btn.primary + " w-full sm:w-auto"}>
                    إغلاق
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      )}
      {isPickerOpen && (
        <MaintenanceProductPicker
          isOpen={isPickerOpen}
          onClose={() => setIsPickerOpen(false)}
          excludeProductIds={watchProductsUsed.map(p => p.productId).filter(Boolean) as string[]}
          onAdd={(products) => {
            setProductNames(prev => {
              const next = { ...prev };
              products.forEach(p => { next[p.productId] = p.name || 'قطعة غيار'; });
              return next;
            });
            for (const p of products) {
              append({
                productId: p.productId,
                quantity: 1,
                maintenancePrice: getMaintenancePrice(p)
              });
            }
          }}
        />
      )}
      <ConfirmModal
        isOpen={isDeliverConfirmOpen}
        onClose={() => setIsDeliverConfirmOpen(false)}
        onConfirm={confirmDeliver}
        isLoading={isDelivering}
        type="info"
        title="تأكيد تسليم الجهاز"
        message={hasCredit
          ? `تنبيه: المدفوع (${formatCurrency(currentPaid)}) أكبر من الإجمالي الحالي (${formatCurrency(currentTotal)}) - راجع سعر الصيانة النهائي قبل المتابعة. سيتم سحب قطع الغيار المستخدمة من المخزن. هل تريد المتابعة؟`
          : `سيتم سحب قطع الغيار المستخدمة من المخزن، وإضافة المبلغ المتبقي (${formatCurrency(remaining)}) إلى الدرج. هل تريد المتابعة؟`}
        confirmText="تسليم وتحصيل"
      />
      <ConfirmModal
        isOpen={isReturnConfirmOpen}
        onClose={() => setIsReturnConfirmOpen(false)}
        onConfirm={confirmReturn}
        isLoading={isReturning}
        type="warning"
        title="تأكيد إرجاع الجهاز"
        message="سيتم إرجاع الجهاز للعميل بدون إصلاح، ورد أي مقدم تم تحصيله. هل تريد المتابعة؟"
        confirmText="إرجاع بدون إصلاح"
      />
    </Drawer>
  );
}