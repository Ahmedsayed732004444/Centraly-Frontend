import { useEffect } from 'react';
import { DatabaseBackup, Loader2, ShieldAlert } from 'lucide-react';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useDownloadBackup } from '../hooks/useBackup';
import { tokens } from '@/shared/styles/tokens';

export function BackupPage() {
  const { setTitle, setBackButton } = useHeaderStore();
  const downloadBackup = useDownloadBackup();

  useEffect(() => {
    setTitle('النسخ الاحتياطي');
    setBackButton(false);
  }, [setTitle, setBackButton]);

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 flex gap-4">
        <ShieldAlert className="text-amber-600 flex-shrink-0" size={28} />
        <div>
          <h3 className="font-bold text-amber-800 text-lg mb-1">نسخة احتياطية كاملة من قاعدة البيانات</h3>
          <p className="text-amber-700 leading-relaxed">
            الملف الناتج يحتوي على كل بيانات النظام (المنتجات، المبيعات، العملاء، المستخدمين وكل شيء آخر) في لحظة التنزيل.
            احتفظ به في مكان آمن، ولا تشاركه إلا مع من تثق به تمامًا.
          </p>
        </div>
      </div>

      <div className={`${tokens.card} p-6 sm:p-8 flex flex-col items-center text-center gap-4`}>
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <DatabaseBackup size={32} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">تنزيل نسخة احتياطية الآن</h2>
          <p className="text-gray-500 mt-1">هيتم إنشاء نسخة متسقة من قاعدة البيانات الحالية وتنزيلها مباشرة على جهازك.</p>
        </div>
        <button
          type="button"
          onClick={() => downloadBackup.mutate()}
          disabled={downloadBackup.isPending}
          className={`${tokens.btn.primary} flex items-center gap-2 px-6 py-3 disabled:opacity-60`}
        >
          {downloadBackup.isPending ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              جاري تجهيز النسخة...
            </>
          ) : (
            <>
              <DatabaseBackup size={18} />
              تنزيل نسخة احتياطية
            </>
          )}
        </button>
      </div>
    </div>
  );
}
