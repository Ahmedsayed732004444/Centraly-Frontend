import * as z from "zod";

// Matches the backend's LoginRequest record: { UserName, Password }
export const loginSchema = z.object({
  userName: z.string().min(1, "اسم المستخدم مطلوب"),
  password: z.string().min(1, "كلمة المرور مطلوبة"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
