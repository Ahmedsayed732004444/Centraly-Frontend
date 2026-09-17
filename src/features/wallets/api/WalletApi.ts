import { apiClient } from "@/lib/axios";
import {
  WalletResponse,
  CreateWalletRequest,
  ProcessOperationRequest,
  WalletOperationResponse,
  UpdateWalletRequest,
  WalletDetailsResponse,
  WalletOperationFilter,
  WalletOperationsSummaryResponse,
} from "../schemas/walletSchemas";
import { PaginatedList as PaginatedResponse } from "@/shared/types/pagination";

export class WalletApi {
  async getWallets(): Promise<WalletResponse[]> {
    const { data } = await apiClient.get<{ items: WalletResponse[] }>("/wallets", { params: { pageSize: 1000 } });
    return data.items;
  }

  async getWalletById(walletId: string): Promise<WalletDetailsResponse> {
    const { data } = await apiClient.get<WalletDetailsResponse>(`/wallets/${walletId}`);
    return data;
  }

  async getWalletOperations(filter: WalletOperationFilter): Promise<PaginatedResponse<WalletOperationResponse>> {
    const { data } = await apiClient.get<PaginatedResponse<WalletOperationResponse>>(`/wallets/operations`, {
      params: { ...filter, pageSize: filter.pageSize ?? 20 }
    });
    return data;
  }

  async getWalletOperationsSummary(filter: WalletOperationFilter): Promise<WalletOperationsSummaryResponse> {
    const { data } = await apiClient.get<WalletOperationsSummaryResponse>(`/wallets/operations/summary`, {
      params: filter
    });
    return data;
  }

  async createWallet(reqData: CreateWalletRequest): Promise<WalletResponse> {
    const formData = new FormData();
    formData.append("Name", reqData.name);
    formData.append("PhoneNumber", reqData.phoneNumber);
    if (reqData.ownerName) formData.append("OwnerName", reqData.ownerName);
    formData.append("InitialBalance", reqData.initialBalance.toString());
    formData.append("Image", reqData.image);
    if (reqData.allowedOperations && reqData.allowedOperations.length > 0) {
      reqData.allowedOperations.forEach(op => {
        formData.append("AllowedOperations", op.toString());
      });
    }

    const { data } = await apiClient.post<WalletResponse>("/wallets", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  }

  async updateWallet(walletId: string, reqData: UpdateWalletRequest): Promise<WalletResponse> {
    const formData = new FormData();
    formData.append("Name", reqData.name);
    formData.append("PhoneNumber", reqData.phoneNumber);
    if (reqData.ownerName) formData.append("OwnerName", reqData.ownerName);
    formData.append("IsActive", reqData.isActive.toString());
    if (reqData.image) formData.append("Image", reqData.image);
    if (reqData.allowedOperations && reqData.allowedOperations.length > 0) {
      reqData.allowedOperations.forEach(op => {
        formData.append("AllowedOperations", op.toString());
      });
    }

    const { data } = await apiClient.put<WalletResponse>(`/wallets/${walletId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  }

  async processOperation(reqData: ProcessOperationRequest): Promise<WalletOperationResponse> {
    const { data } = await apiClient.post<WalletOperationResponse>(`/wallets/${reqData.walletId}/operations`, reqData);
    return data;
  }
}

export const walletApi = new WalletApi();

