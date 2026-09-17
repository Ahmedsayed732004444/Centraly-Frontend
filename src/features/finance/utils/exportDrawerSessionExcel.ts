// src/features/finance/utils/exportDrawerSessionExcel.ts
//
// تصدير تفاصيل وردية (درج مبيعات أو صيانة) إلى ملف Excel احترافي ومنسق.
// بتصميم Dashboard مالي عصري، بطاقات ملخص مدمجة، وتنسيق دقيق بدون أكواد عشوائية.

import ExcelJS from 'exceljs/dist/exceljs.min.js';
import { DrawerSessionResponse, DrawerTransactionResponse } from '../schemas/financeSchemas';
import { formatDate } from '@/shared/utils/date';
import { formatDrawerNotes } from './formatDrawerNotes';

const CATEGORY_LABELS: Record<number, string> = {
  1: 'مبيعات',
  2: 'سداد موردين',
  3: 'صيانة',
  4: 'مرتجعات مبيعات',
  5: 'تحصيل ديون عملاء',
  6: 'حركة يدوية',
  7: 'مشتريات نقدية',
  8: 'مرتجع لمورد',
  10: 'عمليات المحافظ',
};

function getCategoryLabel(category: number): string {
  return CATEGORY_LABELS[category] ?? 'عمليات أخرى';
}

// لوحة الألوان الهادئة الاحترافية (Tailwind Slate / Emerald / Rose / Indigo)
const PALETTE = {
  headerBg: 'FF0F172A',      // Slate 900
  headerBgMaint: 'FF312E81', // Indigo 900
  cardHeaderBg: 'FF334155',  // Slate 700
  cardSubHeader: 'FFF1F5F9', // Slate 100
  textDark: 'FF0F172A',      // Slate 900
  textMuted: 'FF64748B',     // Slate 500
  white: 'FFFFFFFF',
  border: 'FFE2E8F0',        // Slate 200
  borderDark: 'FFCBD5E1',    // Slate 300
  
  // دلالات مالية ناعمة
  incomeText: 'FF166534',    // Green 800
  incomeBg: 'FFDCFCE7',      // Green 100
  incomePill: 'FF15803D',    // Green 700

  expenseText: 'FF991B1B',   // Red 800
  expenseBg: 'FFFEE2E2',     // Red 100
  expensePill: 'FFB91C1C',   // Red 700

  profitText: 'FF1D4ED8',    // Blue 700
  profitBg: 'FFDBEAFE',      // Blue 100

  rowZebra: 'FFF8FAFC',      // Slate 50
};

const BORDER_THIN: Partial<ExcelJS.Borders> = {
  top: { style: 'thin', color: { argb: PALETTE.border } },
  left: { style: 'thin', color: { argb: PALETTE.border } },
  bottom: { style: 'thin', color: { argb: PALETTE.border } },
  right: { style: 'thin', color: { argb: PALETTE.border } },
};

const BORDER_CARD: Partial<ExcelJS.Borders> = {
  top: { style: 'thin', color: { argb: PALETTE.borderDark } },
  left: { style: 'thin', color: { argb: PALETTE.borderDark } },
  bottom: { style: 'thin', color: { argb: PALETTE.borderDark } },
  right: { style: 'thin', color: { argb: PALETTE.borderDark } },
};

const MONEY_FORMAT = '#,##0 "ج.م."';

function applyRangeStyle(
  sheet: ExcelJS.Worksheet,
  r1: number,
  c1: number,
  r2: number,
  c2: number,
  style: {
    fillColor?: string;
    border?: Partial<ExcelJS.Borders>;
    font?: Partial<ExcelJS.Font>;
    alignment?: Partial<ExcelJS.Alignment>;
  }
) {
  for (let r = r1; r <= r2; r++) {
    for (let c = c1; c <= c2; c++) {
      const cell = sheet.getCell(r, c);
      if (style.fillColor) {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: style.fillColor } };
      }
      if (style.border) {
        cell.border = style.border;
      }
      if (style.font) {
        cell.font = { ...cell.font, ...style.font };
      }
      if (style.alignment) {
        cell.alignment = { ...cell.alignment, ...style.alignment };
      }
    }
  }
}

export async function exportDrawerSessionToExcel(session: DrawerSessionResponse) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Centraly System';
  workbook.created = new Date();

  const isMaintenance = session.type === 2;
  const typeLabel = isMaintenance ? 'الصيانة' : 'المبيعات';
  const mainHeaderColor = isMaintenance ? PALETTE.headerBgMaint : PALETTE.headerBg;

  const sheet = workbook.addWorksheet('وردية ' + typeLabel, {
    views: [{ rightToLeft: true, showGridLines: true }],
  });

  sheet.columns = [
    { key: 'colA', width: 6 },  // م (#)
    { key: 'colB', width: 22 }, // التاريخ والوقت
    { key: 'colC', width: 14 }, // نوع الحركة
    { key: 'colD', width: 20 }, // التصنيف
    { key: 'colE', width: 18 }, // المبلغ
    { key: 'colF', width: 18 }, // الرصيد بعد الحركة
    { key: 'colG', width: 38 }, // البيان / الملاحظات
  ];

  // 1) هيدر التقرير
  sheet.mergeCells('A1:G1');
  const titleCell = sheet.getCell('A1');
  titleCell.value = 'تقرير وردية درج ' + typeLabel;
  sheet.getRow(1).height = 36;
  applyRangeStyle(sheet, 1, 1, 1, 7, {
    fillColor: mainHeaderColor,
    font: { name: 'Segoe UI', size: 16, bold: true, color: { argb: PALETTE.white } },
    alignment: { horizontal: 'center', vertical: 'middle' },
  });

  sheet.mergeCells('A2:G2');
  const subtitleCell = sheet.getCell('A2');
  const statusStr = session.isClosed ? 'مغلقة' : 'جارية الآن';
  const openTime = formatDate(session.openedAt);
  const closeTime = session.closedAt ? formatDate(session.closedAt) : 'حتى الآن';
  subtitleCell.value = 'وقت الفتح: ' + openTime + '   •   وقت الإغلاق: ' + closeTime + '   •   حالة الوردية: [ ' + statusStr + ' ]';
  sheet.getRow(2).height = 22;
  applyRangeStyle(sheet, 2, 1, 2, 7, {
    fillColor: 'FFF8FAFC',
    font: { name: 'Segoe UI', size: 10, bold: false, color: { argb: PALETTE.textMuted } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: BORDER_CARD,
  });

  sheet.getRow(3).height = 10;

  // 2) بطاقات الملخص المالي
  const income = session.totalIncome ?? 0;
  const expense = session.totalExpense ?? 0;
  const profit = session.totalProfit ?? 0;
  const closing = session.closingBalance ?? (session.openingBalance + income - expense);

  sheet.mergeCells('A4:G4');
  sheet.getCell('A4').value = 'الملخص المالي العام للوردية';
  sheet.getRow(4).height = 24;
  applyRangeStyle(sheet, 4, 1, 4, 7, {
    fillColor: PALETTE.cardHeaderBg,
    font: { name: 'Segoe UI', size: 11, bold: true, color: { argb: PALETTE.white } },
    alignment: { horizontal: 'center', vertical: 'middle' },
  });

  sheet.mergeCells('A5:B5');
  sheet.getCell('A5').value = 'الرصيد الافتتاحي';
  sheet.getCell('C5').value = 'إجمالي المقبوضات (+)';
  sheet.getCell('D5').value = 'إجمالي المصروفات (-)';
  sheet.getCell('E5').value = 'صافي حركة الوردية';
  sheet.mergeCells('F5:G5');
  sheet.getCell('F5').value = session.isClosed ? 'الرصيد الختامي الفعلي' : 'الرصيد المتوقع بالدرج';

  sheet.getRow(5).height = 22;
  applyRangeStyle(sheet, 5, 1, 5, 7, {
    fillColor: PALETTE.cardSubHeader,
    font: { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.textDark } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: BORDER_CARD,
  });

  sheet.mergeCells('A6:B6');
  const openCell = sheet.getCell('A6');
  openCell.value = session.openingBalance;
  openCell.numFmt = MONEY_FORMAT;

  const incomeCell = sheet.getCell('C6');
  incomeCell.value = income;
  incomeCell.numFmt = MONEY_FORMAT;

  const expenseCell = sheet.getCell('D6');
  expenseCell.value = expense;
  expenseCell.numFmt = MONEY_FORMAT;

  const profitCell = sheet.getCell('E6');
  profitCell.value = profit || (income - expense);
  profitCell.numFmt = MONEY_FORMAT;

  sheet.mergeCells('F6:G6');
  const closingCell = sheet.getCell('F6');
  closingCell.value = closing;
  closingCell.numFmt = MONEY_FORMAT;

  sheet.getRow(6).height = 30;

  applyRangeStyle(sheet, 6, 1, 6, 2, {
    fillColor: PALETTE.white,
    font: { name: 'Segoe UI', size: 12, bold: true, color: { argb: PALETTE.textDark } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: BORDER_CARD,
  });
  applyRangeStyle(sheet, 6, 3, 6, 3, {
    fillColor: PALETTE.incomeBg,
    font: { name: 'Segoe UI', size: 12, bold: true, color: { argb: PALETTE.incomeText } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: BORDER_CARD,
  });
  applyRangeStyle(sheet, 6, 4, 6, 4, {
    fillColor: PALETTE.expenseBg,
    font: { name: 'Segoe UI', size: 12, bold: true, color: { argb: PALETTE.expenseText } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: BORDER_CARD,
  });
  applyRangeStyle(sheet, 6, 5, 6, 5, {
    fillColor: PALETTE.profitBg,
    font: { name: 'Segoe UI', size: 12, bold: true, color: { argb: PALETTE.profitText } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: BORDER_CARD,
  });
  applyRangeStyle(sheet, 6, 6, 6, 7, {
    fillColor: 'FFF1F5F9',
    font: { name: 'Segoe UI', size: 13, bold: true, color: { argb: PALETTE.textDark } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: BORDER_CARD,
  });

  sheet.getRow(7).height = 12;

  // 3) جدول ملخص التصنيف
  sheet.mergeCells('A8:G8');
  sheet.getCell('A8').value = 'ملخص العمليات حسب التصنيف';
  sheet.getRow(8).height = 24;
  applyRangeStyle(sheet, 8, 1, 8, 7, {
    fillColor: PALETTE.cardHeaderBg,
    font: { name: 'Segoe UI', size: 11, bold: true, color: { argb: PALETTE.white } },
    alignment: { horizontal: 'center', vertical: 'middle' },
  });

  sheet.mergeCells('A9:C9');
  sheet.getCell('A9').value = 'نوع المعاملة / التصنيف';
  sheet.getCell('D9').value = 'عدد العمليات';
  sheet.getCell('E9').value = 'إجمالي الوارد (+)';
  sheet.getCell('F9').value = 'إجمالي الصادر (-)';
  sheet.getCell('G9').value = 'الصافي';
  sheet.getRow(9).height = 22;
  applyRangeStyle(sheet, 9, 1, 9, 7, {
    fillColor: 'FFE2E8F0',
    font: { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.textDark } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: BORDER_CARD,
  });

  const byCategory = new Map<number, { count: number; income: number; expense: number }>();
  (session.transactions || []).forEach((tx) => {
    const entry = byCategory.get(tx.category) ?? { count: 0, income: 0, expense: 0 };
    entry.count += 1;
    if (tx.type === 1) entry.income += tx.amount;
    else entry.expense += tx.amount;
    byCategory.set(tx.category, entry);
  });

  let curRow = 10;
  let totalCount = 0;
  let catSumIncome = 0;
  let catSumExpense = 0;

  const sortedCategories = Array.from(byCategory.entries())
    .sort((a, b) => (b[1].income + b[1].expense) - (a[1].income + a[1].expense));

  if (sortedCategories.length === 0) {
    sheet.mergeCells('A' + curRow + ':G' + curRow);
    sheet.getCell('A' + curRow).value = 'لا توجد حركات مسجلة في هذه الوردية حتى الآن';
    applyRangeStyle(sheet, curRow, 1, curRow, 7, {
      font: { name: 'Segoe UI', size: 10, italic: true, color: { argb: PALETTE.textMuted } },
      alignment: { horizontal: 'center', vertical: 'middle' },
      border: BORDER_THIN,
    });
    sheet.getRow(curRow).height = 22;
    curRow += 1;
  } else {
    sortedCategories.forEach(([catId, stats], idx) => {
      totalCount += stats.count;
      catSumIncome += stats.income;
      catSumExpense += stats.expense;

      sheet.mergeCells('A' + curRow + ':C' + curRow);
      sheet.getCell('A' + curRow).value = getCategoryLabel(catId);
      sheet.getCell('D' + curRow).value = stats.count;

      const incCell = sheet.getCell('E' + curRow);
      incCell.value = stats.income;
      incCell.numFmt = MONEY_FORMAT;

      const expCell = sheet.getCell('F' + curRow);
      expCell.value = stats.expense;
      expCell.numFmt = MONEY_FORMAT;

      const netCell = sheet.getCell('G' + curRow);
      netCell.value = stats.income - stats.expense;
      netCell.numFmt = MONEY_FORMAT;

      const rowFill = idx % 2 === 0 ? PALETTE.white : PALETTE.rowZebra;
      applyRangeStyle(sheet, curRow, 1, curRow, 7, {
        fillColor: rowFill,
        font: { name: 'Segoe UI', size: 10, color: { argb: PALETTE.textDark } },
        alignment: { horizontal: 'center', vertical: 'middle' },
        border: BORDER_THIN,
      });

      incCell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.incomeText } };
      expCell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.expenseText } };
      netCell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.textDark } };

      sheet.getRow(curRow).height = 22;
      curRow += 1;
    });

    sheet.mergeCells('A' + curRow + ':C' + curRow);
    sheet.getCell('A' + curRow).value = 'الإجمالي العام للملخص';
    sheet.getCell('D' + curRow).value = totalCount;

    const tInc = sheet.getCell('E' + curRow);
    tInc.value = catSumIncome;
    tInc.numFmt = MONEY_FORMAT;

    const tExp = sheet.getCell('F' + curRow);
    tExp.value = catSumExpense;
    tExp.numFmt = MONEY_FORMAT;

    const tNet = sheet.getCell('G' + curRow);
    tNet.value = catSumIncome - catSumExpense;
    tNet.numFmt = MONEY_FORMAT;

    applyRangeStyle(sheet, curRow, 1, curRow, 7, {
      fillColor: 'FFF1F5F9',
      font: { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.textDark } },
      alignment: { horizontal: 'center', vertical: 'middle' },
      border: BORDER_CARD,
    });
    tInc.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.incomeText } };
    tExp.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.expenseText } };
    sheet.getRow(curRow).height = 24;
    curRow += 1;
  }

  sheet.getRow(curRow).height = 12;
  curRow += 1;

  // 4) جدول سجل حركات الدرج بالتفصيل
  sheet.mergeCells('A' + curRow + ':G' + curRow);
  sheet.getCell('A' + curRow).value = 'سجل حركات الدرج بالتفصيل';
  sheet.getRow(curRow).height = 26;
  applyRangeStyle(sheet, curRow, 1, curRow, 7, {
    fillColor: mainHeaderColor,
    font: { name: 'Segoe UI', size: 11, bold: true, color: { argb: PALETTE.white } },
    alignment: { horizontal: 'center', vertical: 'middle' },
  });
  curRow += 1;

  const tableHeaderRow = curRow;
  const headers = [
    'م',
    'التاريخ والوقت',
    'نوع الحركة',
    'التصنيف',
    'المبلغ',
    'الرصيد بعد الحركة',
    'البيان والملاحظات',
  ];

  headers.forEach((h, i) => {
    sheet.getCell(tableHeaderRow, i + 1).value = h;
  });
  sheet.getRow(tableHeaderRow).height = 24;
  applyRangeStyle(sheet, tableHeaderRow, 1, tableHeaderRow, 7, {
    fillColor: 'FF1E293B',
    font: { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.white } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: BORDER_CARD,
  });
  curRow += 1;

  const sortedTx = [...(session.transactions || [])].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  sortedTx.forEach((tx: DrawerTransactionResponse, index: number) => {
    const isIncome = tx.type === 1;
    const rowFill = index % 2 === 0 ? PALETTE.white : PALETTE.rowZebra;

    sheet.getCell(curRow, 1).value = index + 1;
    sheet.getCell(curRow, 2).value = formatDate(tx.createdAt);

    const typeCell = sheet.getCell(curRow, 3);
    typeCell.value = isIncome ? 'وارد (+)' : 'صادر (-)';
    typeCell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: isIncome ? PALETTE.incomeBg : PALETTE.expenseBg },
    };
    typeCell.font = {
      name: 'Segoe UI',
      size: 10,
      bold: true,
      color: { argb: isIncome ? PALETTE.incomeText : PALETTE.expenseText },
    };

    sheet.getCell(curRow, 4).value = getCategoryLabel(tx.category);

    const amtCell = sheet.getCell(curRow, 5);
    amtCell.value = (isIncome ? 1 : -1) * tx.amount;
    amtCell.numFmt = '+#,##0 "ج.م.";-#,##0 "ج.م.";0 "ج.م."';
    amtCell.font = {
      name: 'Segoe UI',
      size: 10,
      bold: true,
      color: { argb: isIncome ? PALETTE.incomeText : PALETTE.expenseText },
    };

    const balCell = sheet.getCell(curRow, 6);
    balCell.value = tx.balance;
    balCell.numFmt = MONEY_FORMAT;
    balCell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.textDark } };

    const notesCell = sheet.getCell(curRow, 7);
    notesCell.value = formatDrawerNotes(tx.notes, tx.source);
    notesCell.font = { name: 'Segoe UI', size: 9.5, color: { argb: PALETTE.textDark } };

    [1, 2, 4, 6, 7].forEach((col) => {
      const c = sheet.getCell(curRow, col);
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: rowFill } };
    });

    for (let c = 1; c <= 7; c++) {
      const cell = sheet.getCell(curRow, c);
      cell.border = BORDER_THIN;
      if (c === 7) {
        cell.alignment = { horizontal: 'right', vertical: 'middle', indent: 1 };
      } else {
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
      }
    }

    sheet.getRow(curRow).height = 22;
    curRow += 1;
  });

  const totalRow = curRow;
  sheet.mergeCells('A' + totalRow + ':D' + totalRow);
  const totalLabel = sheet.getCell('A' + totalRow);
  totalLabel.value = 'إجمالي حركات الدرج (' + sortedTx.length + ' حركة)';

  const totalAmountCell = sheet.getCell('E' + totalRow);
  totalAmountCell.value = income - expense;
  totalAmountCell.numFmt = '+#,##0 "ج.م.";-#,##0 "ج.م.";0 "ج.م."';

  const finalBalCell = sheet.getCell('F' + totalRow);
  finalBalCell.value = closing;
  finalBalCell.numFmt = MONEY_FORMAT;

  sheet.getCell('G' + totalRow).value = '-';

  sheet.getRow(totalRow).height = 26;
  applyRangeStyle(sheet, totalRow, 1, totalRow, 7, {
    fillColor: 'FF0F172A',
    font: { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.white } },
    alignment: { horizontal: 'center', vertical: 'middle' },
    border: BORDER_CARD,
  });

  sheet.views = [{ rightToLeft: true, showGridLines: true }];

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const dateStr = new Date(session.openedAt).toISOString().slice(0, 10);
  a.href = url;
  a.download = 'تقرير-وردية-' + typeLabel + '-' + dateStr + '.xlsx';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
