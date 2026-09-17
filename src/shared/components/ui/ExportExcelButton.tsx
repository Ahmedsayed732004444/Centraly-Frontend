import { useState } from 'react';
import { FileSpreadsheet, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface ExportExcelButtonProps {
  /** Gathers the rows (walking every page under the current filters) and writes the file. Throw to signal failure. */
  onExport: () => Promise<void>;
  label?: string;
  className?: string;
}

/**
 * "تصدير Excel" button shared by every list page's export - handles the loading state
 * and error toast once instead of each page re-implementing it.
 */
export function ExportExcelButton({ onExport, label = 'تصدير Excel', className = '' }: ExportExcelButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleClick = async () => {
    if (isExporting) return;
    setIsExporting(true);
    try {
      await onExport();
    } catch {
      toast.error('حدث خطأ أثناء تصدير الملف');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isExporting}
      className={`flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {isExporting ? <Loader2 size={16} className="animate-spin" /> : <FileSpreadsheet size={16} />}
      {isExporting ? 'جاري التصدير...' : label}
    </button>
  );
}
