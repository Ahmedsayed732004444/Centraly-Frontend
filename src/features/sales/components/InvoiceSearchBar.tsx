import { Search } from 'lucide-react';
interface InvoiceSearchBarProps {
  invoiceId: string;
  onInvoiceIdChange: (value: string) => void;
  onSearch: () => void;
}
export function InvoiceSearchBar({ invoiceId, onInvoiceIdChange, onSearch }: InvoiceSearchBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <div className="flex-1 relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="أدخل رقم الفاتورة للبحث..."
          value={invoiceId}
          onChange={(e) => onInvoiceIdChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <button
        onClick={onSearch}
        className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shrink-0"
      >
        بحث
      </button>
    </div>
  );
}