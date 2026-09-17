import { useParams } from 'react-router-dom';
import { useSupplierDetails, useSupplierStatement } from '../hooks/useSuppliers';
import { SupplierOverviewCard } from '../components/SupplierOverviewCard';
import { SupplierStatementCard } from '../components/SupplierStatementCard';
import { SupplierPaymentModal } from '../components/SupplierPaymentModal';
import { PageLoader } from '@/shared/components/ui/PageLoader';
import { BackButton } from '@/shared/components/ui/BackButton';
import { useHeaderStore } from '@/shared/hooks/useHeaderStore';
import { useEffect, useState } from 'react';

export function SupplierDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { setTitle, setBackButton } = useHeaderStore();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const { data: supplier, isLoading: isLoadingSupplier, isError } = useSupplierDetails(id!);
  const { data: statement, isLoading: isLoadingStatement } = useSupplierStatement(id!);

  useEffect(() => {
    setTitle("تفاصيل المورد");
    setBackButton(true, "/contacts/suppliers");
    return () => setBackButton(false);
  }, [setTitle, setBackButton]);

  if (isLoadingSupplier) {
    return <PageLoader />;
  }

  if (isError || !supplier) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-gray-500">لم يتم العثور على المورد.</p>
        <BackButton to="/contacts/suppliers" label="العودة للقائمة" />
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-full overflow-hidden">

      <div className="grid grid-cols-1 gap-4">
        {/* Overview */}
        <SupplierOverviewCard 
          supplier={supplier} 
          onPay={() => setIsPaymentModalOpen(true)} 
        />

        {/* Statement / Transactions */}
        <SupplierStatementCard statement={statement} isLoading={isLoadingStatement} supplierName={supplier.name} />
      </div>

      {isPaymentModalOpen && (
        <SupplierPaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          supplier={supplier}
        />
      )}
    </div>
  );
}
