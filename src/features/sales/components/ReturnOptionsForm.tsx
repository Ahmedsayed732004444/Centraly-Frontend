import { ReturnReason } from '../schemas/salesSchemas';

interface ReturnOptionsFormProps {
  reason: ReturnReason;
  onReasonChange: (reason: ReturnReason) => void;
  isCashRefund: boolean;
  onCashRefundChange: (isCash: boolean) => void;
  notes: string;
  onNotesChange: (notes: string) => void;
}

export function ReturnOptionsForm({ 
  reason, 
  onReasonChange, 
  isCashRefund, 
  onCashRefundChange, 
  notes, 
  onNotesChange 
}: ReturnOptionsFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">سبب الإرجاع</label>
        <select 
          value={reason} 
          onChange={(e) => onReasonChange(Number(e.target.value))}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value={ReturnReason.ChangedMind}>تغيير رأي</option>
          <option value={ReturnReason.Defect}>تالف / عيب صناعة</option>
          <option value={ReturnReason.Other}>أخرى</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">طريقة الاسترداد</label>
        <select 
          value={isCashRefund ? 'cash' : 'debt'} 
          onChange={(e) => onCashRefundChange(e.target.value === 'cash')}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="debt">خصم من المديونية</option>
          <option value="cash">نقدي (كاش)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">ملاحظات</label>
        <input 
          type="text" 
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="ملاحظات إضافية..."
        />
      </div>
    </div>
  );
}
