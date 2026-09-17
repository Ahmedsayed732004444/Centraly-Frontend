import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { tokens } from "../../styles/tokens";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // TODO: Send to monitoring service (e.g., Sentry)
    // Sentry.captureException(error, { extra: errorInfo });
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-page-bg)] p-4">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 max-w-md w-full text-center shadow-sm">
            <div className="mx-auto bg-red-50 text-[var(--color-danger)] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-xl font-bold text-[var(--color-text-main)] mb-2">عذرًا، حدث خطأ غير متوقع</h1>
            <p className="text-[var(--color-text-muted)] text-sm mb-6">
              واجه النظام مشكلة أثناء معالجة طلبك. لقد تم تسجيل الخطأ.
            </p>
            <button
              onClick={this.handleReload}
              className={tokens.btn.primary + " w-full"}
            >
              إعادة تحميل الصفحة
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
