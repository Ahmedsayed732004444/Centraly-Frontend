import { LoginForm } from "@/features/auth/components/LoginForm";

/**
 * Login Page — full-screen centered layout matching design spec.
 * Background: #f8fafc (slate-50), card: white rounded-xl shadow-sm.
 */
export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <div className="w-full max-w-md">

        {/* Logo / Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-lg mb-4">
            <span className="text-white text-2xl font-bold">س</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">سنترالي</h1>
          <p className="text-gray-500 text-sm mt-1">
            نظام إدارة الأعمال الذكية
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">مرحباً بك</h2>
            <p className="text-sm text-gray-500 mt-1">
              قم بتسجيل الدخول للوصول إلى لوحة التحكم
            </p>
          </div>

          <LoginForm />
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} سنترالي — جميع الحقوق محفوظة
        </p>
      </div>
    </div>
  );
}
