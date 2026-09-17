import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useHeaderStore } from "../../hooks/useHeaderStore";
import { useSidebarStore } from "../../hooks/useSidebarStore";
import { BackButton } from "../ui/BackButton";
import { useEffect } from "react";
import { Menu } from "lucide-react";
import { NotificationBell } from "@/features/notifications/components/NotificationBell";
import { useNotificationSocket } from "@/features/notifications/hooks/useNotifications";

// Map routes to default page titles
const defaultPageTitles: Record<string, string> = {
  "/": "لوحة القيادة",
  "/sales/pos": "نقطة البيع (POS)",
  "/sales/history": "سجل المبيعات",
  "/sales/returns": "مرتجعات المبيعات",
  "/purchases/new": "فاتورة مشتريات جديدة",
  "/purchases/history": "سجل المشتريات",
  "/purchases/returns": "مرتجعات الموردين",
  "/purchases/returns/new": "مرتجع مورد جديد",
  "/inventory/products": "المنتجات",
  "/inventory/categories": "الأقسام",
  "/contacts/customers": "العملاء",
  "/contacts/suppliers": "الموردين",
  "/finance/drawer": "الدرج والوردية",
  "/finance/drawer/history": "سجل الورديات",
  "/finance/safe": "الخزينة",
  "/finance/expenses": "المصروفات",
  "/finance/owner-transactions": "معاملات المالك",
  "/operations/wallets": "عمليات المحافظ",
  "/maintenance": "الصيانة",
  "/analytics": "لوحة التحليلات",
  "/admin/users": "إدارة المستخدمين",
  "/admin/roles": "الأدوار والصلاحيات",
  "/settings": "الإعدادات",
  "/settings/finance-policies": "سياسات النظام",
  "/settings/wallets": "إدارة المحافظ",
};

// Exact match first, then longest-prefix match so a sub-route that isn't listed
// explicitly (e.g. "/sales/returns/new") still inherits its section's title
// ("مرتجعات المبيعات") instead of leaving the previous page's title on screen.
function resolveDefaultTitle(pathname: string): string | undefined {
  if (defaultPageTitles[pathname]) return defaultPageTitles[pathname];

  let best: string | undefined;
  let bestLength = 0;
  for (const path of Object.keys(defaultPageTitles)) {
    if (path === "/") continue;
    if ((pathname === path || pathname.startsWith(`${path}/`)) && path.length > bestLength) {
      best = defaultPageTitles[path];
      bestLength = path.length;
    }
  }
  return best;
}

export function AppLayout() {
  const location = useLocation();
  const { title, showBackButton, backPath, setTitle, setBackButton } = useHeaderStore();
  const { isOpen, toggle } = useSidebarStore();

  // Opens the shared SignalR connection for the lifetime of the authenticated shell -
  // every route rendered inside AppLayout is behind ProtectedRoute already.
  useNotificationSocket();

  // Set default title based on route if available, and reset back button
  useEffect(() => {
    const defaultTitle = resolveDefaultTitle(location.pathname);
    if (defaultTitle) {
      setTitle(defaultTitle);
      setBackButton(false);
    }
  }, [location.pathname, setTitle, setBackButton]);

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans overflow-hidden" dir="rtl">
      {/* Mobile Sidebar Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity" 
          onClick={toggle}
        />
      )}

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content – offset by sidebar width on desktop */}
      <div className={`flex-1 flex flex-col h-screen transition-all duration-300 ${isOpen ? 'md:mr-64' : 'md:mr-20'} w-full`}>

        {/* Page Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 flex-shrink-0 sticky top-0 z-10 transition-all duration-300">
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={toggle}
              title="طي / فتح القائمة الجانبية"
              aria-label="القائمة الجانبية"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
            >
              <Menu size={22} />
            </button>
            {showBackButton && <BackButton to={backPath} />}
            <h1 className="text-lg md:text-xl font-bold text-gray-800 truncate max-w-[150px] sm:max-w-xs md:max-w-md">{title}</h1>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <NotificationBell />

            <div className="hidden sm:block h-8 w-px bg-gray-200"></div>

            <div className="flex items-center gap-2 md:gap-3 cursor-pointer p-1 pr-2 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-gray-700">مدير النظام</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                م
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-3 md:p-6 pb-20 md:pb-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
