import { Plus, User } from 'lucide-react';
import { Button } from '@/shared/components/ui/Button';
interface UsersPageHeaderProps {
  onAddUser: () => void;
}
export function UsersPageHeader({ onAddUser }: UsersPageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 sm:p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
      <div className="flex items-start gap-4 min-w-0">
        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
          <User size={24} />
        </div>
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">إدارة المستخدمين</h1>
          <p className="text-slate-500 mt-1.5 text-sm font-medium">أضف مستخدمين جدد وقم بتعيين الصلاحيات والأدوار المناسبة لكل مستخدم لضمان أمان النظام.</p>
        </div>
      </div>
      <Button onClick={onAddUser} className="gap-2 shadow-blue-500/20 shadow-lg px-6 shrink-0 h-12 w-full sm:w-auto">
        <Plus size={18} /> إضافة مستخدم جديد
      </Button>
    </div>
  );
}