import { useEffect, useState } from 'react';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useFinancePolicies, useUpdateFinancePolicy } from '../hooks/useFinancePolicies';
import { GlobalTransactionCategory, PaymentSourcePolicy } from '../schemas/financeSchemas';
import { tokens } from '@/shared/styles/tokens';
import { ShieldAlert, Loader2, Info } from 'lucide-react';
export function FinancePoliciesPage() {
  const { setTitle, setBackButton } = useHeaderStore();
  const { data: policies, isLoading } = useFinancePolicies();
  const { mutate: updatePolicy, isPending } = useUpdateFinancePolicy();
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [activeDescription, setActiveDescription] = useState<string | null>(null);
  useEffect(() => {
    setTitle("السياسات المالية للمدير");
    setBackButton(false);
  }, [setTitle, setBackButton]);
  const categoryLabels: Record<string, string> = {
    CashSale: 'المبيعات النقدية (نقطة البيع - POS)',
    SalesReturn: 'مرتجعات المبيعات نقدي (إضافة مرتجع مبيعات)',
    CashPurchase: 'المشتريات النقدية (فاتورة مشتريات جديدة)',
    PurchaseReturn: 'مرتجعات المشتريات نقدي',
    SupplierPayment: 'سداد دفعة لمورد (سجل الموردين > سداد)',
    SupplierReceipt: 'استلام دفعة من مورد (سجل الموردين > استلام)',
    CustomerPayment: 'تحصيل دفعة من عميل (سجل العملاء > تحصيل)',
    CustomerRefund: 'رد أموال لعميل',
    Expense: 'المصروفات العامة (المالية > المصروفات)',
    OwnerDeposit: 'إيداع رأس مال المالك',
    OwnerWithdrawal: 'مسحوبات الأرباح للمالك',
    ManualIncome: 'إيراد يدوي عام (الدرج / الخزينة > إضافة إيراد)',
    ManualExpense: 'مصروف يدوي عام (الدرج / الخزينة > إضافة مصروف)',
  };
  const categoryDescriptions: Record<string, string> = {
    CashSale: 'عمليات البيع المباشر للزبائن كاش. مثال: عميل يشتري بضاعة بـ 100 ج.م ويدفع نقداً في نقطة البيع.',
    SalesReturn: 'عندما يُرجع العميل بضاعة وتُعيد له أمواله كاش. مثال: عميل أعاد منتجاً وأخذ 50 ج.م من الدرج.',
    CashPurchase: 'دفع المال للمورد نقداً وقت شراء البضاعة. مثال: شراء بضاعة بـ 500 ج.م ودفعها فوراً من الدرج.',
    PurchaseReturn: 'عند إرجاع بضاعة للمورد واستلام ثمنها كاش. مثال: أرجعت بضاعة تالفة للمورد وأعطاك 200 ج.م نقدًا أدخلتها الدرج.',
    SupplierPayment: 'تسديد دفعة من مديونية سابقة لمورد. مثال: مورد له حساب مفتوح، قمت بإعطائه 1000 ج.م من الدرج لتقليل حسابه.',
    SupplierReceipt: 'نادر الحدوث: استلام كاش من مورد لأي سبب وتنزيله من رصيده (لتقليل حسابه الدائن).',
    CustomerPayment: 'تحصيل دفعة كاش من عميل عليه ديون. مثال: عميل اشترى آجل، والآن أحضر 300 ج.م لسداد جزء من حسابه.',
    CustomerRefund: 'إعطاء كاش لعميل دون ربطه بفاتورة مرتجع معينة. مثال: عميل دفع بزيادة سابقاً وجاء اليوم ليسترد 100 ج.م نقداً من الدرج.',
    Expense: 'أي مصروف يومي أو شهري للمكان. مثال: دفع 50 ج.م إكرامية أو فاتورة كهرباء من الدرج.',
    OwnerDeposit: 'قيام صاحب العمل بوضع أموال من جيبه الخاص لدعم الكاش. مثال: المالك يضع 5000 ج.م في الخزينة.',
    OwnerWithdrawal: 'قيام صاحب العمل بسحب أموال لصالحه. مثال: المالك يسحب 1000 ج.م من الخزينة كمصروف شخصي.',
    ManualIncome: 'إضافة إيراد ندي ليس له تصنيف في النظام. مثال: تسجيل إيراد استثنائي من الدرج.',
    ManualExpense: 'سحب مصروف سريع ليس له تصنيف في فئات المصروفات المحددة.',
  };
  const categoryEnumMap: Record<string, GlobalTransactionCategory> = {
    CashSale: 1,
    SalesReturn: 2,
    CashPurchase: 3,
    PurchaseReturn: 4,
    SupplierPayment: 5,
    SupplierReceipt: 6,
    CustomerPayment: 7,
    CustomerRefund: 8,
    Expense: 9,
    OwnerDeposit: 10,
    OwnerWithdrawal: 11,
    ManualIncome: 12,
    ManualExpense: 13,
  };
  const handlePolicyChange = (categoryString: string, newPolicyString: string) => {
    const enumValue = categoryEnumMap[categoryString];
    let policyValue: PaymentSourcePolicy = 3;
    if (newPolicyString === 'DrawerOnly') policyValue = 1;
    if (newPolicyString === 'SafeOnly') policyValue = 2;
    setUpdatingId(categoryString);
    updatePolicy(
      { category: enumValue, data: { allowedSource: policyValue } },
      {
        onSettled: () => setUpdatingId(null)
      }
    );
  };
  if (isLoading) {
    return <div className="p-10 flex justify-center"><Loader2 className="animate-spin text-gray-400 w-8 h-8" /></div>;
  }
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 flex gap-4">
        <ShieldAlert className="text-amber-600 flex-shrink-0" size={28} />
        <div>
          <h3 className="font-bold text-amber-800 text-lg mb-1">لوحة تحكم المدير: سياسات مصادر الأموال</h3>
          <p className="text-amber-700 leading-relaxed">
            من هنا يمكنك التحكم في المصدر المالي الإجباري لكل حركة في النظام.
            <strong> الدرج فقط (Drawer Only): </strong>يُجبر النظام على سحب/إيداع الأموال من درج الكاشير للوردية الحالية.
            <strong> الخزينة فقط (Safe Only): </strong>يُجبر النظام على التعامل مع الخزينة الرئيسية.
            <strong> اختياري (Either): </strong>يطلب من المستخدم اختيار المصدر أثناء تنفيذ العملية.
            <em>أي تعديل هنا يتم تطبيقه فوراً على كل شاشات النظام.</em>
          </p>
        </div>
      </div>
      <div className={`${tokens.card} overflow-hidden`}>
        <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
          <table className="w-full min-w-[640px] text-right">
            <thead className="border-b border-gray-100">
              <tr>
                <th className="px-4 sm:px-6 py-3 font-semibold text-gray-500 text-xs">نوع العملية المالية</th>
                <th className="px-4 sm:px-6 py-3 font-semibold text-gray-500 text-xs w-56 sm:w-72">السياسة المطبقة (مصدر الأموال)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {policies?.map((policy) => (
                <tr key={policy.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 sm:px-6 py-4">
                      <div className="font-semibold text-gray-900 flex items-center gap-2">
                        {categoryLabels[policy.category] || policy.category}
                        <button
                          type="button"
                          onClick={() => setActiveDescription(activeDescription === policy.category ? null : policy.category)}
                          className="text-gray-400 hover:text-blue-600 transition-colors focus:outline-none shrink-0"
                        >
                          <Info size={16} />
                        </button>
                      </div>
                      <div className="text-xs text-gray-500 font-mono mt-1 opacity-70">{policy.category}</div>
                      {activeDescription === policy.category && (
                        <div className="mt-2 p-3 bg-blue-50 text-blue-800 text-sm leading-relaxed rounded-lg border border-blue-100 shadow-sm whitespace-pre-wrap animate-in fade-in slide-in-from-top-1 max-w-md">
                          {categoryDescriptions[policy.category]}
                        </div>
                      )}
                    </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="relative">
                      <select
                        value={policy.allowedSource}
                        onChange={(e) => handlePolicyChange(policy.category, e.target.value)}
                        disabled={isPending && updatingId === policy.category}
                        className={`${tokens.input} bg-white font-semibold cursor-pointer appearance-none ${
                          policy.allowedSource === 'DrawerOnly' ? 'text-blue-700 border-blue-200 bg-blue-50' :
                          policy.allowedSource === 'SafeOnly' ? 'text-emerald-700 border-emerald-200 bg-emerald-50' :
                          'text-purple-700 border-purple-200 bg-purple-50'
                        }`}
                      >
                        <option value="DrawerOnly">الدرج فقط (Drawer Only)</option>
                        <option value="SafeOnly">الخزينة فقط (Safe Only)</option>
                        <option value="Either">الدرج أو الخزينة (Either)</option>
                      </select>
                      {isPending && updatingId === policy.category && (
                        <Loader2 className="absolute left-3 top-2.5 w-5 h-5 text-gray-400 animate-spin" />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}