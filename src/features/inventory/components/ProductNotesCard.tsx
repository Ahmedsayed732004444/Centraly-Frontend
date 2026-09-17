import { FileText } from 'lucide-react';

export function ProductNotesCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative z-10">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center justify-end gap-3 w-full">
          <h2 className="text-lg font-bold text-gray-900">ملاحظات</h2>
          <div className="text-blue-500">
            <FileText size={20} />
          </div>
        </div>
      </div>
      
      <div className="p-8 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 mb-4">
          <FileText size={32} />
        </div>
        <h3 className="text-lg font-bold text-gray-700">لا توجد ملاحظات على هذا المنتج</h3>
        <p className="text-gray-500 mt-1">يمكنك إضافة ملاحظات داخلية هنا</p>
      </div>
    </div>
  );
}
