import { Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
  allowedRoles?: string[];
}

export function ProtectedRoute({ children, requiredPermissions, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, hasPermission, hasAnyRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && allowedRoles.length > 0) {
    if (!hasAnyRole(allowedRoles)) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  if (requiredPermissions && requiredPermissions.length > 0) {
    const hasAnyRequired = requiredPermissions.some(perm => hasPermission(perm));
    if (!hasAnyRequired) {
      // User is logged in but doesn't have the required permission
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <>{children}</>;
}
