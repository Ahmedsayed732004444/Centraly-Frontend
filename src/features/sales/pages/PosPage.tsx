import { useState, useEffect } from 'react';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useProducts } from '@/features/inventory/hooks/useInventory';
import { ProductResponse, ProductBatchResponse, ProductUsageDto } from '@/features/inventory/schemas/inventorySchemas';
import { PosProductGrid } from '../components/PosProductGrid';
import { PosCart } from '../components/PosCart';
import { PosMobileCart } from '../components/PosMobileCart';
import { BatchSelectionModal } from '../components/BatchSelectionModal';
import { CheckoutModal } from '../components/CheckoutModal';
import { useCreateSalesInvoice } from '../hooks/useSales';
import { usePosCart } from '../hooks/usePosCart';
import { SaleType, PaymentMethod, SalesInvoiceResponse } from '../schemas/salesSchemas';
import { SaleSuccessModal } from '../components/SaleSuccessModal';
import { printThermalReceipt } from '../utils/thermalReceiptPrint';
import { getReceiptSettings } from '../utils/receiptSettings';
export function PosPage() {
  const { setTitle, setBackButton } = useHeaderStore();
  const cart = usePosCart();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 350);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<ProductResponse | null>(null);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [checkoutMethod, setCheckoutMethod] = useState<PaymentMethod | null>(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [completedInvoice, setCompletedInvoice] = useState<SalesInvoiceResponse | null>(null);
  const { data: productsData, isLoading: isLoadingProducts } = useProducts({
    pageNumber: pageNumber,
    pageSize: 8,
    searchValue: debouncedSearchTerm || undefined,
    categoryId: selectedCategoryId || undefined,
    departmentId: selectedDepartmentId || undefined,
    excludeUsage: ProductUsageDto.MaintenanceOnly,
  });
  const createInvoiceMutation = useCreateSalesInvoice();
  useEffect(() => {
    setPageNumber(1);
  }, [debouncedSearchTerm, selectedDepartmentId, selectedCategoryId]);
  useEffect(() => {
    setTitle('نقطة البيع (POS)');
    setBackButton(false);
  }, [setTitle, setBackButton]);
  const handleProductClick = (product: ProductResponse) => {
    setSelectedProduct(product);
    setIsBatchModalOpen(true);
  };
  const handleSelectBatch = (batch: ProductBatchResponse, selectedPrice: number) => {
    if (!selectedProduct) return;
    cart.addItem({
      id: `${selectedProduct.productId}_${batch.batchId}_${selectedPrice}`,
      productId: selectedProduct.productId,
      productName: selectedProduct.name || 'منتج غير معروف',
      batchId: batch.batchId,
      batchName: batch.supplierName || 'شركة غير معروفة',
      imageUrl: selectedProduct.imageUrl,
      properties: selectedProduct.properties,
      price: selectedPrice,
      quantity: 1,
      maxQuantity: batch.availableQuantity,
    });
    setIsBatchModalOpen(false);
    setSelectedProduct(null);
  };
  const handleCheckoutClick = (method: PaymentMethod) => {
    setCheckoutMethod(method);
    setIsCheckoutModalOpen(true);
  };
  const handleConfirmCheckout = (customerName: string, customerPhone: string, paidAmount: number, paymentSource?: number, saleType: SaleType = SaleType.Retail) => {
    if (!checkoutMethod) return;
    createInvoiceMutation.mutate({
      customerName: customerName.trim() || undefined,
      customerPhone: customerPhone.trim() || undefined,
      saleType: saleType,
      paymentMethod: checkoutMethod,
      paidAmount: paidAmount,
      paymentSource: paymentSource,
      items: cart.items.map((item) => ({
        productId: item.productId,
        batchId: item.batchId,
        quantity: item.quantity,
        sellingPrice: item.price,
      })),
    }, {
      onSuccess: (invoice) => {
        cart.clear();
        setIsCheckoutModalOpen(false);
        setCheckoutMethod(null);
        setCompletedInvoice(invoice);
        if (getReceiptSettings().autoPrint) {
          printThermalReceipt(invoice);
        }
      },
    });
  };
  const totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="-m-6 w-[calc(100%+3rem)] h-[calc(100vh-theme(spacing.16))] bg-gray-50 overflow-hidden flex flex-col lg:flex-row relative">
      <div className="flex-1 overflow-hidden relative pb-[80px] lg:pb-0">
        <PosProductGrid
          products={productsData?.items || []}
          isLoading={isLoadingProducts}
          onProductClick={handleProductClick}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDepartmentId={selectedDepartmentId}
          setSelectedDepartmentId={setSelectedDepartmentId}
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={productsData?.totalPages || 1}
        />
      </div>
      {}
      <div className="hidden lg:block w-[320px] xl:w-[380px] shrink-0 h-full border-r border-gray-200">
        <PosCart
          items={cart.items}
          onUpdateQuantity={cart.updateQuantity}
          onRemoveItem={cart.removeItem}
          onClearCart={cart.clear}
          onCheckout={handleCheckoutClick}
        />
      </div>
      {}
      <PosMobileCart
        items={cart.items}
        totalQuantity={totalQuantity}
        totalAmount={totalAmount}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeItem}
        onClearCart={cart.clear}
        onCheckout={handleCheckoutClick}
      />
      <BatchSelectionModal
        isOpen={isBatchModalOpen}
        onClose={() => setIsBatchModalOpen(false)}
        product={selectedProduct}
        onSelectBatch={handleSelectBatch}
      />
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        totalAmount={cart.totalAmount}
        paymentMethod={checkoutMethod}
        onConfirm={handleConfirmCheckout}
        isSubmitting={createInvoiceMutation.isPending}
      />
      <SaleSuccessModal
        isOpen={!!completedInvoice}
        onClose={() => setCompletedInvoice(null)}
        invoice={completedInvoice}
        onNewSale={() => setCompletedInvoice(null)}
      />
    </div>
  );
}