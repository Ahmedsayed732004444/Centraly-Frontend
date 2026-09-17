import { Layers, Tag } from 'lucide-react';
import { tokens } from '@/shared/styles/tokens';

interface CategoriesActionToolbarProps {
  onAddDepartment: () => void;
  onAddCategory: () => void;
}

export function CategoriesActionToolbar({ onAddDepartment, onAddCategory }: CategoriesActionToolbarProps) {
  return (
    <div className="flex justify-end items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex gap-3">
        <button 
          onClick={onAddCategory}
          className={tokens.btn.secondary + " flex items-center gap-2"}
        >
          <Tag size={18} />
          قسم فرعي جديد
        </button>
        <button 
          onClick={onAddDepartment}
          className={tokens.btn.primary + " flex items-center gap-2"}
        >
          <Layers size={18} />
          قسم رئيسي جديد
        </button>
      </div>
    </div>
  );
}
