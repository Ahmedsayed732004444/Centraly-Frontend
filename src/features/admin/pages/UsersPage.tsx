import { useState } from 'react';
import { useUsers } from '../hooks/useUsers';
import { UserFormModal } from '../components/UserFormModal';
import { UsersPageHeader } from '../components/UsersPageHeader';
import { UsersTable } from '../components/UsersTable';

export function UsersPage() {
  const { data: users, isLoading } = useUsers();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  const handleAdd = () => {
    setEditingUserId(null);
    setIsModalOpen(true);
  };

  const handleEdit = (id: string) => {
    setEditingUserId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <UsersPageHeader onAddUser={handleAdd} />

      <UsersTable
        users={users}
        isLoading={isLoading}
        onEdit={handleEdit}
      />

      <UserFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        userId={editingUserId} 
      />
    </div>
  );
}

