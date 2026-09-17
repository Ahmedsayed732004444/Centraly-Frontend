import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { History, Wallet } from 'lucide-react';
import { openSessionSchema, OpenSessionRequest } from '../schemas/financeSchemas';
import { tokens } from '@/shared/styles/tokens';
import { useOpenDrawer } from '../hooks/useFinance';
export function OpenDrawerForm({ type = 1 }: { type?: number }) {
  const openDrawer = useOpenDrawer();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OpenSessionRequest>({
    resolver: zodResolver(openSessionSchema),
    mode: 'onBlur',
    defaultValues: { openingBalance: 0 }
  });
  const onSubmit = (data: OpenSessionRequest) => {
    openDrawer.mutate({ ...data, type });
  };
  return (
    <div className="max-w-md mx-auto mt-6 sm:mt-12 px-4 sm:px-0">
      <div className="flex justify-end mb-4">
        <Link
          to={type === 2 ? "/finance/drawer/history?type=2" : "/finance/drawer/history?type=1"}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-center"
        >
          <History className="w-4 h-4 shrink-0" />
          <span>تصفح سجل الورديات السابقة</span>
        </Link>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-blue-50/50 p-6 sm:p-8 text-center border-b border-blue-100/50">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-8 h-8 text-blue-600" />
          </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">فتح وردية جديدة</h2>
        <p className="text-gray-500 mt-2 text-sm">أدخل الرصيد الافتتاحي (الفكة أو العهدة) الموجودة في الدرج حالياً لبدء العمل.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-6">
        <div>
          <label className={tokens.font.label + " block mb-2"}>
            الرصيد الافتتاحي
          </label>
          <div className="relative">
            <input
              type="number"
              step="1"
              {...register('openingBalance', { valueAsNumber: true })}
              onFocus={(e) => e.target.value === '0' && (e.target.value = '')}
              className={tokens.input + " pl-12 text-lg font-semibold"}
              placeholder="0"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              ج.م
            </div>
          </div>
          {errors.openingBalance && (
            <p className="text-red-500 text-sm mt-1.5">{String(errors.openingBalance.message)}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={openDrawer.isPending}
          className={tokens.btn.primary + " w-full py-3 text-lg font-medium flex justify-center items-center gap-2"}
        >
          {openDrawer.isPending ? 'جاري الفتح...' : 'فتح الوردية'}
        </button>
      </form>
      </div>
    </div>
  );
}