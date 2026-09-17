import { Edit, Shield } from 'lucide-react';
import { RowActions } from '@/shared/components/ui/RowActions';
import { Avatar } from '@/shared/components/ui/Avatar';
import { Badge } from '@/shared/components/ui/Badge';
import { EmptyState } from '@/shared/components/ui/EmptyState';
interface User {
  id: string;
  username: string;
  roles: string[];
}
interface UsersTableProps {
  users: User[] | undefined;
  isLoading: boolean;
  onEdit: (id: string) => void;
}
export function UsersTable({ users, isLoading, onEdit }: UsersTableProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      {isLoading ? (
        <div className="p-16 flex flex-col items-center justify-center space-y-4">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium">جاري التحميل...</p>
        </div>
      ) : users?.length === 0 ? (
        <EmptyState entity="مستخدمين" />
      ) : (
        <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
          <table className="w-full min-w-[560px] text-right border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="p-4 sm:p-5 px-5 sm:px-8 font-semibold text-slate-500 text-xs">تفاصيل المستخدم</th>
                <th className="p-4 sm:p-5 font-semibold text-slate-500 text-xs">الأدوار الممنوحة</th>
                <th className="p-4 sm:p-5 px-5 sm:px-8 font-semibold text-slate-500 text-xs w-20 sm:w-32 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users?.map(user => (
                <tr
                  key={user.id}
                  onClick={() => onEdit(user.id)}
                  className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                >
                  <td className="p-4 sm:p-5 px-5 sm:px-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Avatar name={user.username} />
                      <div className="min-w-0">
                        <p className="font-medium text-slate-900 text-sm truncate">{user.username}</p>
                        <p className="text-[13px] text-slate-400 mt-0.5 font-medium font-mono">ID: {user.id.slice(0, 8)}...</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5">
                    <div className="flex flex-wrap gap-2">
                      {user.roles.length === 0 && <Badge variant="neutral">بدون دور</Badge>}
                      {user.roles.map(role => (
                        <span key={role} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 text-[13px] font-medium rounded-lg border border-blue-100/60 shadow-sm whitespace-nowrap">
                          <Shield size={14} className="text-blue-500 shrink-0" />
                          {role}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 px-5 sm:px-8 text-center">
                    <RowActions actions={[{ icon: Edit, label: 'تعديل', onClick: () => onEdit(user.id) }]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
