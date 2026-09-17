import { apiClient } from '@/lib/axios';

export const backupApi = {
  downloadBackup: async (): Promise<Blob> => {
    const { data } = await apiClient.get('/backup/download', { responseType: 'blob' });
    return data;
  },
};
