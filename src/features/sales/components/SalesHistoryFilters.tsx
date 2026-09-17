import { tokens } from '@/shared/styles/tokens';
import { FiltersBar } from '@/shared/components/ui/FiltersBar';
import { DateRangeFilter } from '@/shared/components/ui/DateRangeFilter';
import { SaleType, PaymentMethod } from '../schemas/salesSchemas';

interface SalesHistoryFiltersProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  startDate: string;
  endDate: string;
  onDateChange: (start: string, end: string) => void;
  saleType: string;
  onSaleTypeChange: (value: string) => void;
  paymentMethod: string;
  onPaymentMethodChange: (value: string) => void;
}

// Mirrors PurchasesFilters' layout so the two comparable list pages read as one system
// instead of sales history offering only a search box while purchases history offers
// a full filter set.
export function SalesHistoryFilters({
  searchValue,
  onSearchChange,
  startDate,
  endDate,
  onDateChange,
  saleType,
  onSaleTypeChange,
  paymentMethod,
  onPaymentMethodChange,
}: SalesHistoryFiltersProps) {
  return (
    <FiltersBar searchValue={searchValue} onSearchChange={onSearchChange} searchPlaceholder="ابحث برقم الفاتورة أو اسم العميل...">
      <select className={`${tokens.input} w-full sm:w-auto`} value={saleType} onChange={(e) => onSaleTypeChange(e.target.value)}>
        <option value="">كل أنواع الفواتير</option>
        <option value={SaleType.Wholesale}>جملة</option>
        <option value={SaleType.Retail}>قطاعي</option>
      </select>
      <select className={`${tokens.input} w-full sm:w-auto`} value={paymentMethod} onChange={(e) => onPaymentMethodChange(e.target.value)}>
        <option value="">كل طرق الدفع</option>
        <option value={PaymentMethod.Cash}>كاش (نقدي)</option>
        <option value={PaymentMethod.Deferred}>آجل (ذمة)</option>
      </select>
      <DateRangeFilter startDate={startDate} endDate={endDate} onChange={onDateChange} />
    </FiltersBar>
  );
}
