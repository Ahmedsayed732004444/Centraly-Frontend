import { useState } from 'react';
import { DepartmentResponse, CategoryResponse } from '@/features/inventory/schemas/inventorySchemas';
import { Layers, Tag, Package, Plus, Edit, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import { HasPermission } from '@/features/auth/components/HasPermission';
import { Permissions } from '@/features/auth/schemas/permissions';

interface DepartmentCardProps {
  department: DepartmentResponse;
  categories: CategoryResponse[];
  onAddCategory: (depId: string) => void;
  onEditDepartment: (id: string, name: string) => void;
  onDeleteDepartment: (id: string, name: string) => void;
  onEditCategory: (id: string, name: string, depId: string) => void;
  onDeleteCategory: (id: string, name: string) => void;
}

export function DepartmentCard({ 
  department, 
  categories, 
  onAddCategory, 
  onEditDepartment, 
  onDeleteDepartment, 
  onEditCategory, 
  onDeleteCategory 
}: DepartmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Department Header */}
      <div 
        className={`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors ${isExpanded ? 'border-b border-gray-100 bg-gray-50' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-blue-600 transition-colors">
            {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </button>
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{department.name}</h3>
            <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
              <span className="flex items-center gap-1"><Tag size={12}/> {department.categoriesCount} أقسام فرعية</span>
              <span className="flex items-center gap-1"><Package size={12}/> {department.productsCount} منتجات</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <HasPermission permission={Permissions.InventoryWrite}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onAddCategory(department.departmentId);
              }}
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1.5 rounded-lg flex items-center gap-1 mr-2"
            >
              <Plus size={16} /> إضافة قسم فرعي
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onEditDepartment(department.departmentId, department.name);
              }}
              className="text-gray-400 hover:text-blue-500 transition-colors p-2"
              title="تعديل القسم"
              aria-label="تعديل القسم"
            >
              <Edit size={18} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteDepartment(department.departmentId, department.name);
              }}
              className="text-gray-400 hover:text-red-500 transition-colors p-2"
              title="حذف القسم"
              aria-label="حذف القسم"
            >
              <Trash2 size={18} />
            </button>
          </HasPermission>
        </div>
      </div>

      {/* Categories List (Expanded) */}
      {isExpanded && (
        <div className="p-4 bg-gray-50/50">
          {categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.map(cat => (
                <div key={cat.categoryId} className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      <Tag size={14} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{cat.name}</p>
                      <p className="text-xs text-gray-500">{cat.productsCount} منتج</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <HasPermission permission={Permissions.InventoryWrite}>
                      <button
                        type="button"
                        onClick={() => onEditCategory(cat.categoryId, cat.name, cat.department.departmentId)}
                        className="text-gray-300 hover:text-blue-500 transition-colors p-1"
                        title="تعديل"
                        aria-label="تعديل القسم الفرعي"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => onDeleteCategory(cat.categoryId, cat.name)}
                        className="text-gray-300 hover:text-red-500 transition-colors p-1"
                        title="حذف"
                        aria-label="حذف القسم الفرعي"
                      >
                        <Trash2 size={16} />
                      </button>
                    </HasPermission>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex w-12 h-12 rounded-full bg-gray-100 items-center justify-center text-gray-400 mb-3">
                <Tag size={20} />
              </div>
              <p className="text-gray-500 font-medium">لا يوجد أقسام فرعية بعد</p>
              <HasPermission permission={Permissions.InventoryWrite}>
                <button
                  type="button"
                  onClick={() => onAddCategory(department.departmentId)}
                  className="text-blue-600 text-sm mt-2 font-semibold hover:underline"
                >
                  إضافة قسم فرعي جديد
                </button>
              </HasPermission>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
