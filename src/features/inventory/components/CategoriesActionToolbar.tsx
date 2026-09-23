import { Layers, Tag } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';

interface CategoriesActionToolbarProps {
  onAddDepartment: () => void;
  onAddCategory: () => void;
}

export function CategoriesActionToolbar({ onAddDepartment, onAddCategory }: CategoriesActionToolbarProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex flex-col sm:flex-row justify-end gap-3 w-full">
        <button 
          onClick={onAddCategory}
          className={`${tokens.btn.secondary} flex items-center justify-center gap-2 w-full sm:w-auto`}
        >
          <Tag size={18} />
          <span>قسم فرعي جديد</span>
        </button>
        <button 
          onClick={onAddDepartment}
          className={`${tokens.btn.primary} flex items-center justify-center gap-2 w-full sm:w-auto`}
        >
          <Layers size={18} />
          <span>قسم رئيسي جديد</span>
        </button>
      </div>
    </div>
  );
}
