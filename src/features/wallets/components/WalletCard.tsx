import { Wallet, Coins, ArrowUpFromLine, ArrowDownToLine, Smartphone } from 'lucide-react';
import { WalletResponse, WalletOperationType } from '../schemas/walletSchemas';
import { resolveImageUrl } from '@/shared/utils/resolveImageUrl';
import { formatNumber } from '@/shared/utils/currency';

interface WalletCardProps {
  wallet: WalletResponse;
  onCashIn: (wallet: WalletResponse) => void;
  onCashOut: (wallet: WalletResponse) => void;
  onRecharge: (wallet: WalletResponse) => void;
}

export function WalletCard({ wallet, onCashIn, onCashOut, onRecharge }: WalletCardProps) {
  const allowedOps = wallet.allowedOperations && wallet.allowedOperations.length > 0
    ? wallet.allowedOperations
    : [WalletOperationType.CashIn, WalletOperationType.CashOut];

  const hasCashIn = allowedOps.includes(WalletOperationType.CashIn);
  const hasCashOut = allowedOps.includes(WalletOperationType.CashOut);
  const hasRecharge = allowedOps.includes(WalletOperationType.Recharge);

  return (
    <div 
      className="bg-white rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden flex flex-col p-4 sm:p-5 relative"
    >
      <div className="h-28 sm:h-36 flex items-center justify-center mb-3 mt-2">
        {wallet.imageUrl ? (
          <img src={resolveImageUrl(wallet.imageUrl)} alt={wallet.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
        ) : (
          <Wallet size={56} className="text-gray-200" />
        )}
      </div>
      
      <div className="flex flex-col flex-1 items-center text-center">
        <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 line-clamp-1 leading-snug">
          {wallet.name}
        </h3>
        <div className="bg-gray-50/80 px-4 py-2 rounded-xl mb-5 border border-gray-100 shadow-sm">
          <p className="text-[20px] sm:text-[22px] font-black text-[#0f8e4c] tracking-[0.15em]" dir="ltr">
            {wallet.phoneNumber}
          </p>
        </div>
        
        <div className="mt-auto mb-5 font-bold text-[16px] sm:text-[20px] text-[#0f8e4c] bg-[#e6f4ed] px-5 py-2 rounded-xl border border-[#0f8e4c]/20 flex items-center justify-center gap-2">
          <Coins size={22} className="text-[#0f8e4c]" />
          الرصيد: {formatNumber(wallet.balance)}
        </div>

        <div className="w-full flex gap-2">
          {hasCashOut && (
            <button 
              onClick={() => onCashOut(wallet)}
              className="flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 hover:border-red-300 shadow-sm"
              title="عملية سحب"
            >
              <ArrowUpFromLine size={16} />
              سحب
            </button>
          )}
          {hasCashIn && (
            <button 
              onClick={() => onCashIn(wallet)}
              className="flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all bg-[#0f8e4c] hover:bg-[#0c7a40] text-white shadow-sm"
              title="عملية بيع"
            >
              <ArrowDownToLine size={16} />
              بيع
            </button>
          )}
          {hasRecharge && (
            <button 
              onClick={() => onRecharge(wallet)}
              className="flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 hover:border-blue-300 shadow-sm"
              title="شحن رصيد"
            >
              <Smartphone size={16} />
              رصيد
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
