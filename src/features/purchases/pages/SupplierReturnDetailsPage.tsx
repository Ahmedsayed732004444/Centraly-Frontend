import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useSupplierReturn } from '../hooks/useSupplierReturns';
import { AlertCircle, Building2, ChevronLeft, Clock } from 'lucide-react';
import { EntityImage } from '@/shared/components/ui/EntityImage';
import { formatDateTime } from '@/shared/utils/date';
import { tokens } from '@/shared/styles/tokens';
import { formatCurrency } from '@/shared/utils/currency';
import { Spinner } from '@/shared/components/ui/Spinner';
import { RETURN_REASON_LABELS, RETURN_REASON_COLORS } from '../schemas/supplierReturnSchemas';
export function SupplierReturnDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setTitle, setBackButton } = useHeaderStore();
  const { data: returnData, isLoading, error } = useSupplierReturn(id!);
  useEffect(() => {
    if (returnData) {
      setTitle(`مرتجع #${returnData.supplierReturnId.substring(0, 8)}`);
    } else {
      setTitle('تفاصيل المرتجع');
    }
    setBackButton(true, '/purchases/returns');
    return () => setBackButton(false);
  }, [returnData, setTitle, setBackButton]);
  if (isLoading) {
    return (
      <div className="p-6 h-screen bg-gray-50">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Spinner size={40} className="mx-auto mb-3" />
            <p className="text-gray-500">جاري تحميل تفاصيل المرتجع...</p>
          </div>
        </div>
      </div>
    );
  }
  if (error || !returnData) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <AlertCircle size={48} className="text-red-400" />
        <p className="text-gray-500">المرتجع غير موجود أو حدث خطأ أثناء التحميل.</p>
        <button className={tokens.btn.primary} onClick={() => navigate('/purchases/returns')}>
          العودة لسجل المرتجعات
        </button>
      </div>
    );
  }
  return (
    <div className="space-y-5 w-full">
      {}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-gray-500 text-sm flex items-center gap-1.5">
            <Clock size={16} />
            {formatDateTime(returnData.returnDate)}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${RETURN_REASON_COLORS[returnData.reason] || RETURN_REASON_COLORS[3]}`}>
            {RETURN_REASON_LABELS[returnData.reason] || 'سبب غير معروف'}
          </span>
        </div>
      </div>
      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {}
        <div
          className={`${tokens.card} p-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all group`}
          onClick={() => returnData.supplier?.id && navigate(`/contacts/suppliers/${returnData.supplier.id}`)}
        >
          <p className="text-xs text-gray-500 mb-2">المورد</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
              <Building2 size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                {returnData.supplier?.name || '-'}
              </p>
              {returnData.supplier?.phone && (
                <p className="text-xs text-gray-400 mt-0.5">{returnData.supplier.phone}</p>
              )}
            </div>
            <ChevronLeft size={14} className="text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0" />
          </div>
        </div>
        {}
        <div className={`${tokens.card} p-4 flex flex-col justify-center`}>
          <p className="text-xs text-gray-500 mb-1">إجمالي المرتجع</p>
          <p className="text-xl font-bold text-gray-900">{formatCurrency(returnData.totalReturnedAmount)}</p>
        </div>
      </div>
      {}
      {returnData.notes && (
        <div className={`${tokens.card} p-4 border-r-4 border-blue-400 bg-blue-50`}>
          <p className="text-xs text-blue-600 font-semibold mb-1">ملاحظات المرتجع</p>
          <p className="text-gray-700 text-sm">{returnData.notes}</p>
        </div>
      )}
      {}
      <div className={tokens.card}>
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-800">
            الأصناف المرتجعة
            <span className="mr-2 text-sm font-normal text-gray-400">({returnData.items?.length || 0} صنف)</span>
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-right text-sm">
            <thead>
              <tr className="text-gray-500 text-xs border-b border-gray-100">
                <th className="px-5 py-3 font-semibold whitespace-nowrap">الصنف</th>
                <th className="px-5 py-3 font-semibold text-center whitespace-nowrap">الكمية</th>
                <th className="px-5 py-3 font-semibold text-center whitespace-nowrap">سعر الإرجاع (للوحدة)</th>
                <th className="px-5 py-3 font-semibold text-left whitespace-nowrap">الإجمالي</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {returnData.items?.map((item, index) => (
                <tr key={item.supplierReturnItemId ?? index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <EntityImage name={item.product?.name || '?'} imageUrl={item.product?.imageUrl} size="sm" />
                      <div>
                        <p className="font-semibold text-gray-800">{item.product?.name || '—'}</p>
                        {item.product?.barcode && (
                          <p className="text-xs text-gray-400 dir-ltr mt-0.5">{item.product.barcode}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <span className="inline-flex items-center bg-blue-50 text-blue-700 font-bold text-sm px-2.5 py-0.5 rounded-full">
                      {item.quantity}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center text-gray-700 font-medium">
                    {formatCurrency(item.unitCost)}
                  </td>
                  <td className="px-5 py-4 text-left font-bold text-gray-900">
                    {formatCurrency(item.lineTotal)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 border-t border-gray-200">
              <tr>
                <td colSpan={3} className="px-5 py-3 text-left text-sm font-semibold text-gray-600">
                  الإجمالي الكلي
                </td>
                <td className="px-5 py-3 text-left font-bold text-lg text-gray-900">
                  {formatCurrency(returnData.totalReturnedAmount)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}