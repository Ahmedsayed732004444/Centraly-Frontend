import React from 'react';
import { useAuth } from '../hooks/useAuth';

interface HasPermissionProps {
  permission: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function HasPermission({ permission, children, fallback = null }: HasPermissionProps) {
  const { hasPermission } = useAuth();

  if (hasPermission(permission)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}
