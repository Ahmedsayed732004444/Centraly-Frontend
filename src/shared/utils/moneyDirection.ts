// Single source of truth for "is this transaction money coming IN or going OUT" -
// three call sites each re-derived this from a different representation of the same
// idea (a string enum, a numeric enum, a numeric category) and one of them (Safe) had
// a fallback that misclassified Expense rows. House the enum-specific translation here
// so the color/sign is decided in exactly one place: green = in, red = out.
export type MoneyDirection = 'in' | 'out';

export const directionStyles: Record<MoneyDirection, { badge: string; text: string; sign: '+' | '-' }> = {
  in: { badge: 'bg-green-50 text-green-700', text: 'text-green-600', sign: '+' },
  out: { badge: 'bg-red-50 text-red-700', text: 'text-red-600', sign: '-' },
};

// Safe transactions share the backend DrawerTransactionType enum, sent to the client
// as its string name ("Income" | "Expense") - see SafeTransactionResponse.TransactionType.
export function safeTxDirection(transactionType: string): MoneyDirection {
  return transactionType === 'Income' ? 'in' : 'out';
}

// DrawerTransactionType (Centraly.Api/Entities/Common/Enums.cs): Income = 1, Expense = 2.
export function drawerTxDirection(type: number): MoneyDirection {
  return type === 1 ? 'in' : 'out';
}

// GlobalTransactionCategory (Centraly.Api/Contracts/Shared/Enums/FinanceEnums.cs):
// OwnerDeposit = 10 (capital coming in), OwnerWithdrawal = 11 (profit going out).
const OWNER_DEPOSIT_CATEGORY = 10;
export function ownerTxDirection(category: number): MoneyDirection {
  return category === OWNER_DEPOSIT_CATEGORY ? 'in' : 'out';
}
