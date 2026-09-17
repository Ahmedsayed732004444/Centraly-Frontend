import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';
import { backupApi } from '../api/BackupApi';

// With responseType: 'blob', axios parses EVERY response body (including error ones)
// as a Blob instead of JSON - getApiErrorMessage expects response.data to already be
// the parsed {errors: [code, description]} object, so a 403/500 here would otherwise
// show as an unreadable [object Blob]. Reading the blob back as text first restores
// the normal error shape before falling back to a generic message.
async function getBackupErrorMessage(error: unknown): Promise<string> {
  const fallback = 'حدث خطأ أثناء تنزيل النسخة الاحتياطية';
  if (axios.isAxiosError(error) && error.response?.data instanceof Blob) {
    try {
      const text = await error.response.data.text();
      const parsed = JSON.parse(text) as { errors?: [string, string] };
      return parsed.errors?.[1] || fallback;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

export function useDownloadBackup() {
  return useMutation({
    mutationFn: () => backupApi.downloadBackup(),
    onSuccess: (blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      link.href = url;
      link.download = `centraly-backup-${timestamp}.db`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      toast.success('تم تنزيل النسخة الاحتياطية بنجاح');
    },
    onError: async (error) => {
      toast.error(await getBackupErrorMessage(error));
    },
  });
}
