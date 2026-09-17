import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateMaintenanceRequest, createMaintenanceSchema } from '../schemas/maintenanceSchemas';
import { useCreateMaintenance } from '../api/queries';
import { useCustomers } from '@/features/contacts/hooks/useContacts';
import { RightDrawer as Drawer } from '@/shared/components/ui/RightDrawer';
import { Input } from '@/shared/components/ui/Input';
import { tokens } from '@/shared/styles/tokens';
import {
  User,
  Smartphone,
  Clock,
  Coins,
  Save,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { MaintenanceResponse } from '../schemas/maintenanceSchemas';
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreated?: (ticket: MaintenanceResponse) => void;
}
const TIME_PRESETS = [
  { label: '30 دقيقة', minutes: 30 },
  { label: 'ساعة', minutes: 60 },
  { label: 'ساعتين', minutes: 120 },
  { label: '3 ساعات', minutes: 180 },
  { label: 'غداً', minutes: 1440 },
];
const COMMON_PROBLEMS = [
  'تغيير شاشة', 'تغيير بطارية', 'سوكيت شحن', 'باغة',
  'صيانة بوردة', 'سوفت وير', 'سماعة / مايك', 'فحص وكشف'
];
const ADVANCE_PRESETS = [0, 50, 100, 200];
function toLocalDatetimeString(date: Date) {
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
function formatArabicDelivery(isoString?: string) {
  if (!isoString) return null;
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return null;
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const isTomorrow = date.toDateString() === tomorrow.toDateString();
  const timePart = date.toLocaleTimeString('ar-EG-u-nu-latn', { hour: '2-digit', minute: '2-digit', hour12: true });
  if (isToday) return `اليوم، ${timePart}`;
  if (isTomorrow) return `غداً، ${timePart}`;
  return date.toLocaleDateString('ar-EG-u-nu-latn', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: true });
}
export function MaintenanceQuickCreateDrawer({ isOpen, onClose, onCreated }: Props) {
  const { mutate: createMaintenance, isPending } = useCreateMaintenance();
  const [activeTimePreset, setActiveTimePreset] = useState<number | 'custom' | null>(null);
  const [customerSearch, setCustomerSearch] = useState('');
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const { data: customersData } = useCustomers({
    searchValue: customerSearch.length >= 2 ? customerSearch : undefined,
    pageSize: 5,
  });
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<CreateMaintenanceRequest>({
    resolver: zodResolver(createMaintenanceSchema) as any,
    mode: 'onBlur',
    defaultValues: {
      customerName: '', customerPhone: '', customerId: '',
      deviceDescription: '', problem: '', paidAmount: 0, deliveryDate: '',
    },
  });
  const currentDeliveryDate = watch('deliveryDate');
  const currentProblem = watch('problem') || '';
  const currentPaid = watch('paidAmount');
  useEffect(() => {
    if (isOpen) {
      const defaultDate = new Date(Date.now() + 60 * 60 * 1000);
      reset({
        customerName: '', customerPhone: '', customerId: '',
        deviceDescription: '', problem: '', paidAmount: 0, deliveryDate: toLocalDatetimeString(defaultDate),
      });
      setActiveTimePreset(60);
      setCustomerSearch('');
      setShowCustomerDropdown(false);
    }
  }, [isOpen, reset]);
  const handleSelectPresetTime = (minutes: number) => {
    setActiveTimePreset(minutes);
    setValue('deliveryDate', toLocalDatetimeString(new Date(Date.now() + minutes * 60 * 1000)), { shouldValidate: true });
  };
  const handleAddProblemChip = (chip: string) => {
    if (!currentProblem.trim()) setValue('problem', chip, { shouldValidate: true });
    else if (!currentProblem.includes(chip)) setValue('problem', `${currentProblem} + ${chip}`, { shouldValidate: true });
  };
  const handleSelectCustomer = (customer: { customerId: string; name: string; phone?: string }) => {
    setValue('customerName', customer.name, { shouldValidate: true });
    setValue('customerPhone', customer.phone || '', { shouldValidate: true });
    setValue('customerId', customer.customerId, { shouldValidate: true });
    setShowCustomerDropdown(false);
  };
  const onSubmit = (data: CreateMaintenanceRequest) => {
    const payload = { ...data };
    if (!payload.deliveryDate) delete payload.deliveryDate;
    createMaintenance(payload, {
      onSuccess: (created) => {
        onClose();
        if (onCreated && created) {
          onCreated(created);
        }
      },
    });
  };
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="إضافة تذكرة صيانة" width="w-[500px] max-w-full">
      <form onSubmit={handleSubmit(onSubmit as any)} className="h-full flex flex-col">
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 sm:py-6 space-y-8 bg-white">
          {}
          <section className="space-y-4">
            <h3 className="flex items-center gap-2 text-[15px] font-bold text-slate-800">
              <User className="w-4 h-4 text-blue-600" /> معلومات العميل
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">اسم العميل <span className="text-red-500">*</span></label>
                <Input
                  {...register('customerName')}
                  placeholder="مثال: محمد علي"
                  autoComplete="off"
                  autoFocus
                  onChange={(e) => {
                    register('customerName').onChange(e);
                    setCustomerSearch(e.target.value);
                    setShowCustomerDropdown(true);
                  }}
                  onFocus={() => setShowCustomerDropdown(true)}
                  className="bg-slate-50/50 border-slate-200 focus:bg-white transition-colors h-11"
                />
                {errors.customerName && <p className="text-red-500 text-[11px] mt-1">{errors.customerName.message}</p>}
                {}
                {showCustomerDropdown && customersData?.items && customersData.items.length > 0 && customerSearch.length >= 2 && (
                  <div className="absolute z-20 top-full mt-1 w-full bg-white rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                    <div className="max-h-48 overflow-y-auto">
                      {customersData.items.map((cust) => (
                        <button
                          type="button"
                          key={cust.customerId}
                          onClick={() => handleSelectCustomer(cust)}
                          className="w-full text-right px-4 py-3 hover:bg-slate-50 flex flex-col gap-1 transition-colors border-b border-slate-50 last:border-0"
                        >
                          <span className="font-semibold text-sm text-slate-800">{cust.name}</span>
                          {cust.phone && <span className="text-xs text-slate-400 dir-ltr text-right">{cust.phone}</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">رقم الهاتف</label>
                <Input
                  {...register('customerPhone')}
                  placeholder="01xxxxxxxxx"
                  type="tel"
                  dir="ltr"
                  className="text-left bg-slate-50/50 border-slate-200 focus:bg-white h-11"
                />
                {errors.customerPhone && <p className="text-red-500 text-[11px] mt-1">{errors.customerPhone.message}</p>}
              </div>
            </div>
          </section>
          <hr className="border-slate-100" />
          {}
          <section className="space-y-4">
            <h3 className="flex items-center gap-2 text-[15px] font-bold text-slate-800">
              <Smartphone className="w-4 h-4 text-blue-600" /> الجهاز والمشكلة
            </h3>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">اسم الجهاز / الموديل</label>
              <Input
                {...register('deviceDescription')}
                placeholder="مثال: iPhone 14 Pro"
                className="bg-slate-50/50 border-slate-200 focus:bg-white h-11"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-slate-500">تفاصيل العطل</label>
                <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
                  <Sparkles className="w-3 h-3" /> أضف سريعاً
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {COMMON_PROBLEMS.map((chip) => (
                  <button
                    type="button"
                    key={chip}
                    onClick={() => handleAddProblemChip(chip)}
                    className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                  >
                    + {chip}
                  </button>
                ))}
              </div>
              <textarea
                {...register('problem')}
                placeholder="ملاحظات العميل أو تفاصيل الفحص السريع..."
                className={cn(tokens.input, "min-h-[80px] bg-slate-50/50 border-slate-200 focus:bg-white resize-y py-3")}
              />
            </div>
          </section>
          <hr className="border-slate-100" />
          {}
          <section className="space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-[15px] font-bold text-slate-800 mb-4">
                <Clock className="w-4 h-4 text-blue-600" /> موعد التسليم المتوقع
              </h3>
              <div className="bg-slate-100/70 p-1.5 rounded-xl flex items-center gap-1 mb-3 overflow-x-auto">
                {TIME_PRESETS.map((preset) => (
                  <button
                    type="button"
                    key={preset.minutes}
                    onClick={() => handleSelectPresetTime(preset.minutes)}
                    className={cn(
                      "flex-1 min-w-[62px] shrink-0 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap",
                      activeTimePreset === preset.minutes
                        ? "bg-white text-blue-700 shadow-sm"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                    )}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Input
                  type="datetime-local"
                  {...register('deliveryDate')}
                  onChange={(e) => { register('deliveryDate').onChange(e); setActiveTimePreset('custom'); }}
                  className="flex-1 bg-slate-50/50 border-slate-200 h-11 text-sm text-slate-600"
                />
                {currentDeliveryDate && (
                  <div className="flex-1 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100 h-11 rounded-lg flex items-center justify-center px-3">
                    {formatArabicDelivery(currentDeliveryDate)}
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-[15px] font-bold text-slate-800 mb-3">
                <Coins className="w-4 h-4 text-emerald-600" /> الدفعة المقدمة (عربون)
              </h3>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <Input
                  type="number"
                  min="0"
                  step="1"
                  {...register('paidAmount', { valueAsNumber: true })} onFocus={(e) => e.target.select()}
                  className="w-full sm:w-32 h-11 font-bold text-lg text-emerald-700 text-center bg-emerald-50/30 border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <div className="flex-1 bg-slate-100/70 p-1 rounded-xl flex items-center gap-1 overflow-x-auto">
                  {ADVANCE_PRESETS.map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => setValue('paidAmount', amt, { shouldValidate: true })}
                      className={cn(
                        "flex-1 min-w-[54px] shrink-0 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap",
                        Number(currentPaid) === amt
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "text-slate-500 hover:bg-slate-200/50"
                      )}
                    >
                      {amt === 0 ? 'بدون' : `+${amt}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        {}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-100 flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 sm:px-6 py-3 rounded-xl font-semibold text-slate-500 hover:bg-slate-100 transition-colors shrink-0"
          >
            إلغاء
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <Save className="w-5 h-5" />
            {isPending ? 'جاري الإنشاء...' : 'إنشاء التذكرة'}
          </button>
        </div>
      </form>
    </Drawer>
  );
}