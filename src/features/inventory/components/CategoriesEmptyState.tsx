import { Layers, Plus } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';

interface CategoriesEmptyStateProps {
  onAddDepartment: () => void;
}

export function CategoriesEmptyState({ onAddDepartment }: CategoriesEmptyStateProps) {
  return (
    <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="inline-flex w-16 h-16 rounded-full bg-blue-50 items-center justify-center text-blue-500 mb-4">
        <Layers size={32} />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1">لا يوجد أي أقسام رئيسية</h3>
      <p className="text-gray-500 mb-4">ابدأ بإضافة قسم رئيسي لتتمكن من تنظيم منتجاتك</p>
      <button 
        onClick={onAddDepartment}
        className={tokens.btn.primary + " inline-flex items-center gap-2"}
      >
        <Plus size={18} />
        إضافة قسم رئيسي
      </button>
    </div>
  );
}
