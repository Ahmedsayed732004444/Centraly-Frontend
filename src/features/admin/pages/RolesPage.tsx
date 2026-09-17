import { useState } from 'react';
import { useRoles, useToggleRoleStatus } from '../hooks/useRoles';
import { RoleFormModal } from '../components/RoleFormModal';
import { Button } from '@/shared/components/ui/Button';
import { Plus, Edit, ToggleLeft, ToggleRight, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';
import { Badge } from '@/shared/components/ui/Badge';
import { EmptyState } from '@/shared/components/ui/EmptyState';
export function RolesPage() {
  const [includeDisabled, setIncludeDisabled] = useState(false);
  const { data: roles, isLoading } = useRoles(includeDisabled);
  const toggleMutation = useToggleRoleStatus();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRoleId, setEditingRoleId] = useState<string | null>(null);
  const handleAdd = () => {
    setEditingRoleId(null);
    setIsModalOpen(true);
  };
  const handleEdit = (id: string) => {
    setEditingRoleId(id);
    setIsModalOpen(true);
  };
  return (
    <div className="space-y-8">
      {}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 sm:p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10"></div>
        <div className="flex items-start gap-4 min-w-0">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
            <ShieldAlert size={24} />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">إدارة الأدوار والصلاحيات</h1>
            <p className="text-slate-500 mt-1.5 text-sm font-medium">التحكم في مجموعات الصلاحيات المتاحة في النظام وتخصيص وصول المستخدمين.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center shrink-0">
          <label className="flex items-center justify-center gap-2 cursor-pointer bg-slate-50 hover:bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200 transition-colors">
            <input
              type="checkbox"
              checked={includeDisabled}
              onChange={(e) => setIncludeDisabled(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer shrink-0"
            />
            <span className="text-sm font-bold text-slate-600 whitespace-nowrap">إظهار المعطلة</span>
          </label>
          <Button onClick={handleAdd} className="gap-2 shadow-indigo-500/20 shadow-lg px-6 h-12 bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto">
            <Plus size={18} /> إضافة دور جديد
          </Button>
        </div>
      </div>
      {}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {isLoading ? (
          <div className="p-16 flex flex-col items-center justify-center space-y-4">
            <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium">جاري التحميل...</p>
          </div>
        ) : roles?.length === 0 ? (
          <EmptyState entity="أدوار" />
        ) : (
          <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
            <table className="w-full min-w-[560px] text-right border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="p-4 sm:p-5 px-5 sm:px-8 font-semibold text-slate-500 text-xs">اسم الدور</th>
                  <th className="p-4 sm:p-5 font-semibold text-slate-500 text-xs">الحالة</th>
                  <th className="p-4 sm:p-5 px-5 sm:px-8 font-semibold text-slate-500 text-xs w-24 sm:w-40 text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {roles?.map(role => (
                  <tr key={role.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-4 sm:p-5 px-5 sm:px-8">
                      <p className="font-bold text-slate-800 text-base">{role.name}</p>
                      <p className="text-[13px] text-slate-400 mt-0.5 font-medium font-mono">ID: {role.id.slice(0, 8)}...</p>
                    </td>
                    <td className="p-4 sm:p-5">
                      <Badge variant={role.isDeleted ? 'danger' : 'success'} icon={role.isDeleted ? <XCircle size={14} /> : <CheckCircle2 size={14} />}>
                        {role.isDeleted ? 'معطل' : 'نشط'}
                      </Badge>
                    </td>
                    <td className="p-4 sm:p-5 px-5 sm:px-8">
                      <div className="flex items-center justify-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(role.id)} title="تعديل الدور" className="bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-colors">
                          <Edit size={18} />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => toggleMutation.mutate(role.id)} title={role.isDeleted ? 'تفعيل الدور' : 'تعطيل الدور'} className="bg-white border border-slate-200 hover:bg-slate-100 transition-colors">
                          {role.isDeleted ? (
                            <ToggleLeft size={22} className="text-slate-400" />
                          ) : (
                            <ToggleRight size={22} className="text-emerald-500" />
                          )}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <RoleFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        roleId={editingRoleId}
      />
    </div>
  );
}