import { z } from 'zod';

export interface RoleResponse {
  id: string;
  name: string;
  isDeleted: boolean;
}

export interface RoleDetailResponse {
  id: string;
  name: string;
  isDeleted: boolean;
  permissions: string[];
}

export const roleFormSchema = z.object({
  name: z.string().min(3, "اسم الدور يجب أن يكون 3 أحرف على الأقل").max(200),
  permissions: z.array(z.string()).min(1, "يجب اختيار صلاحية واحدة على الأقل"),
});

export type RoleFormData = z.infer<typeof roleFormSchema>;

export interface RoleRequest {
  name: string;
  permissions: string[];
}
