import { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle } from "lucide-react";

interface Props {
  children: ReactNode;
  featureName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class FeatureErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Feature Error (${this.props.featureName || 'Unknown'}):`, error, errorInfo);
    // TODO: Send to monitoring service (e.g., Sentry)
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-4 w-full flex flex-col items-center text-center">
          <AlertCircle className="text-red-500 mb-3" size={28} />
          <h3 className="text-red-800 font-semibold mb-1">
            فشل تحميل {this.props.featureName ? `قسم ${this.props.featureName}` : 'هذا القسم'}
          </h3>
          <p className="text-red-600 text-sm mb-4">حدث خطأ داخلي. يرجى المحاولة مرة أخرى.</p>
          <button
            onClick={this.handleRetry}
            className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md text-sm font-medium transition-colors"
          >
            إعادة المحاولة
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
