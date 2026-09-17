export enum WalletOperationType {
  CashIn = 1,
  CashOut = 2,
  Recharge = 3,
}

export interface WalletResponse {
  id: string;
  name: string;
  phoneNumber: string;
  ownerName: string | null;
  balance: number;
  imageUrl: string | null;
  isActive: boolean;
  allowedOperations: WalletOperationType[];
  createdAt: string;
}

export interface CreateWalletRequest {
  name: string;
  phoneNumber: string;
  ownerName?: string | null;
  initialBalance: number;
  allowedOperations?: WalletOperationType[];
  image: File;
}

export interface ProcessOperationRequest {
  walletId: string;
  operationType: WalletOperationType;
  transferredAmount: number;
  physicalCashAmount: number;
  notes: string | null;
}

export interface WalletOperationResponse {
  id: string;
  walletId: string;
  operationType: WalletOperationType;
  transferredAmount: number;
  physicalCashAmount: number;
  profit: number;
  drawerTransactionId: string | null;
  createdAt: string;
}

export interface UpdateWalletRequest {
  name: string;
  phoneNumber: string;
  ownerName?: string | null;
  isActive: boolean;
  allowedOperations?: WalletOperationType[];
  image?: File;
}

export interface WalletDetailsResponse extends WalletResponse {
  netProfit: number;
}

export interface WalletOperationFilter {
  pageNumber?: number;
  pageSize?: number;
  walletId?: string;
  operationType?: WalletOperationType;
  dateFrom?: string;
  dateTo?: string;
}

export interface WalletOperationsSummaryResponse {
  totalProfit: number;
}
