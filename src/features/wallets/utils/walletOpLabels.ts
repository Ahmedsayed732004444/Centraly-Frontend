import type { BadgeVariant } from '@/shared/components/ui/Badge';
import { WalletOperationType } from '../schemas/walletSchemas';

// Single source for wallet operation labels/colors - was duplicated independently in
// WalletsAdminPage, GlobalWalletOperationsTable and WalletDetailsPage with slightly
// different class names for the same three operations.
export const walletOpLabels: Record<WalletOperationType, { label: string; variant: BadgeVariant }> = {
  [WalletOperationType.CashIn]: { label: 'بيع', variant: 'success' },
  [WalletOperationType.CashOut]: { label: 'سحب', variant: 'danger' },
  [WalletOperationType.Recharge]: { label: 'رصيد', variant: 'indigo' },
};
