import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "../schemas/loginSchema";
import { useLogin } from "../hooks/useAuth";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { tokens } from "@/shared/styles/tokens";

/**
 * Login form — userName + password with show/hide toggle.
 * Sends { userName, password } matching the backend's LoginRequest record.
 */
export function LoginForm() {
  const { mutate: login, isPending } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => login(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">

      {/* Username */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          اسم المستخدم
        </label>
        <input
          id="userName"
          type="text"
          {...register("userName")}
          placeholder="admin"
          autoComplete="username"
          className={tokens.input + " bg-gray-50 focus:bg-white transition-colors"}
          dir="ltr"
        />
        {errors.userName && (
          <p className="text-red-500 text-xs mt-1">{errors.userName.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className={tokens.font.label + " block mb-1.5"}>
          كلمة المرور
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="••••••••"
            autoComplete="current-password"
            className={tokens.input + " bg-gray-50 focus:bg-white transition-colors pl-10"}
            dir="ltr"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className={tokens.btn.primary + " w-full py-2.5 justify-center flex items-center gap-2 disabled:opacity-60 mt-2"}
      >
        {isPending ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            جاري تسجيل الدخول...
          </>
        ) : (
          "تسجيل الدخول"
        )}
      </button>
    </form>
  );
}
