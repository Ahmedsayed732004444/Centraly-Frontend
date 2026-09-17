export interface ReceiptSettings {
  storeName: string;
  activityDescription?: string;
  storePhone?: string;
  storeAddress?: string;
  taxNumber?: string;
  footerNote: string;
  autoPrint: boolean;
  paperWidth: '80mm' | '58mm';
}

const STORAGE_KEY = 'centraly_receipt_settings';

export const DEFAULT_RECEIPT_SETTINGS: ReceiptSettings = {
  storeName: 'سنترالي - Centraly',
  activityDescription: 'مبيعات وإكسسوارات المحمول والإلكترونيات',
  storePhone: '',
  storeAddress: '',
  footerNote: 'شكراً لزيارتكم نسعد بخدمتكم دائماً\nالبضاعة المباعة ترد وتستبدل خلال 14 يوماً مع إحضار أصل الفاتورة بحالتها',
  autoPrint: false,
  paperWidth: '80mm',
};

export function getReceiptSettings(): ReceiptSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_RECEIPT_SETTINGS;
    return { ...DEFAULT_RECEIPT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_RECEIPT_SETTINGS;
  }
}

export function saveReceiptSettings(settings: Partial<ReceiptSettings>): void {
  try {
    const current = getReceiptSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save receipt settings', e);
  }
}
