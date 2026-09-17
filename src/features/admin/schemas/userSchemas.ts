import { z } from 'zod';

export interface UserResponse {
  id: string;
  username: string;
  roles: string[];
}

export const userFormSchema = z.object({
  username: z.string().min(3, "اسم المستخدم يجب أن يكون 3 أحرف على الأقل").max(100),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل").optional(),
  roles: z.array(z.string()).min(1, "يجب اختيار دور واحد على الأقل"),
});

export type UserFormData = z.infer<typeof userFormSchema>;

export interface CreateUserRequest {
  username: string;
  password?: string;
  roles: string[];
}

export interface UpdateUserRequest {
  username: string;
  roles: string[];
}
