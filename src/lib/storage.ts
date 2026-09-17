export const storage = {
  getToken: () => localStorage.getItem('token'),
  setToken: (token: string) => localStorage.setItem('token', token),
  clearToken: () => localStorage.removeItem('token'),
  
  getRefreshToken: () => localStorage.getItem('refreshToken'),
  setRefreshToken: (token: string) => localStorage.setItem('refreshToken', token),
  clearRefreshToken: () => localStorage.removeItem('refreshToken'),
  
  getPermissions: (): string[] => {
    const perms = localStorage.getItem('permissions');
    return perms ? JSON.parse(perms) : [];
  },
  setPermissions: (permissions: string[]) => localStorage.setItem('permissions', JSON.stringify(permissions)),
  clearPermissions: () => localStorage.removeItem('permissions'),

  getRoles: (): string[] => {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : [];
  },
  setRoles: (roles: string[]) => localStorage.setItem('roles', JSON.stringify(roles)),
  clearRoles: () => localStorage.removeItem('roles'),
};
