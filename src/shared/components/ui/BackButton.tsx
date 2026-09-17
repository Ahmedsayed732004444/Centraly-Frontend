import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  /** اختياري: مسار محدد للرجوع إليه. إذا لم يُحدد يرجع للصفحة السابقة في التاريخ. */
  to?: string;
  label?: string;
}

/**
 * زر رجوع موحد يُستخدم في جميع صفحات التفاصيل والنماذج.
 * الشكل: مربع بحواف دائرية، أيقونة سهم، اختياري نص.
 */
export function BackButton({ to, label }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
    else navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg transition-colors shadow-sm text-sm font-medium"
      title="رجوع"
    >
      <ArrowRight size={16} />
      {label && <span>{label}</span>}
    </button>
  );
}
