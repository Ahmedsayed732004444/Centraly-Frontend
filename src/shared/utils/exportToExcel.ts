// Generic "export a filtered list to Excel" builder - every list page's export button
// goes through this so file structure/styling stays one system instead of 15 bespoke
// sheets. For a report that needs summary cards/category breakdowns (like a drawer
// session close-out), see finance/utils/exportDrawerSessionExcel.ts instead - that one
// stays hand-built on purpose since it isn't a flat table.
import ExcelJS from 'exceljs/dist/exceljs.min.js';

export interface ExcelColumn<T> {
  header: string;
  width?: number;
  /** Raw value for the cell - a number gets money/number formatting per `money`/`numFmt`, a string/Date is written as-is. */
  value: (row: T) => string | number | Date | null | undefined;
  /** Apply the "#,##0 ج.م." money format to this column. */
  money?: boolean;
  align?: 'right' | 'center' | 'left';
}

const PALETTE = {
  headerBg: 'FF0F172A', // Slate 900
  headerRowBg: 'FF1E293B', // Slate 800
  white: 'FFFFFFFF',
  textDark: 'FF0F172A',
  textMuted: 'FF64748B',
  border: 'FFE2E8F0',
  rowZebra: 'FFF8FAFC',
};

const MONEY_FORMAT = '#,##0 "ج.م."';

const BORDER_THIN: Partial<ExcelJS.Borders> = {
  top: { style: 'thin', color: { argb: PALETTE.border } },
  left: { style: 'thin', color: { argb: PALETTE.border } },
  bottom: { style: 'thin', color: { argb: PALETTE.border } },
  right: { style: 'thin', color: { argb: PALETTE.border } },
};

export interface ExportToExcelOptions<T> {
  /** File name without extension. */
  fileName: string;
  sheetName: string;
  /** Big title row at the top of the sheet. */
  title: string;
  /** Smaller line under the title - e.g. the active filters or the export date. */
  subtitle?: string;
  columns: ExcelColumn<T>[];
  rows: T[];
}

export async function exportToExcel<T>({ fileName, sheetName, title, subtitle, columns, rows }: ExportToExcelOptions<T>): Promise<void> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Centraly System';
  workbook.created = new Date();

  const sheet = workbook.addWorksheet(sheetName.slice(0, 31), { views: [{ rightToLeft: true, showGridLines: true }] });
  const colCount = columns.length;

  sheet.columns = columns.map((c) => ({ width: c.width ?? Math.max(12, c.header.length + 4) }));

  sheet.mergeCells(1, 1, 1, colCount);
  const titleCell = sheet.getCell(1, 1);
  titleCell.value = title;
  titleCell.font = { name: 'Segoe UI', size: 15, bold: true, color: { argb: PALETTE.white } };
  titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
  titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PALETTE.headerBg } };
  sheet.getRow(1).height = 32;
  for (let c = 1; c <= colCount; c++) sheet.getCell(1, c).fill = titleCell.fill;

  let headerRowIndex = 2;
  if (subtitle) {
    sheet.mergeCells(2, 1, 2, colCount);
    const subCell = sheet.getCell(2, 1);
    subCell.value = subtitle;
    subCell.font = { name: 'Segoe UI', size: 10, color: { argb: PALETTE.textMuted } };
    subCell.alignment = { horizontal: 'center', vertical: 'middle' };
    sheet.getRow(2).height = 20;
    headerRowIndex = 3;
  }

  columns.forEach((col, i) => {
    const cell = sheet.getCell(headerRowIndex, i + 1);
    cell.value = col.header;
    cell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: PALETTE.white } };
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PALETTE.headerRowBg } };
    cell.border = BORDER_THIN;
  });
  sheet.getRow(headerRowIndex).height = 24;

  rows.forEach((row, rowIdx) => {
    const excelRow = headerRowIndex + 1 + rowIdx;
    const rowFill = rowIdx % 2 === 0 ? PALETTE.white : PALETTE.rowZebra;
    columns.forEach((col, colIdx) => {
      const cell = sheet.getCell(excelRow, colIdx + 1);
      cell.value = col.value(row) ?? '-';
      if (col.money && typeof cell.value === 'number') cell.numFmt = MONEY_FORMAT;
      cell.font = { name: 'Segoe UI', size: 10, color: { argb: PALETTE.textDark } };
      cell.alignment = { horizontal: col.align ?? 'center', vertical: 'middle' };
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: rowFill } };
      cell.border = BORDER_THIN;
    });
    sheet.getRow(excelRow).height = 20;
  });

  if (rows.length === 0) {
    sheet.mergeCells(headerRowIndex + 1, 1, headerRowIndex + 1, colCount);
    const emptyCell = sheet.getCell(headerRowIndex + 1, 1);
    emptyCell.value = 'لا توجد بيانات مطابقة';
    emptyCell.font = { name: 'Segoe UI', size: 10, italic: true, color: { argb: PALETTE.textMuted } };
    emptyCell.alignment = { horizontal: 'center', vertical: 'middle' };
  }

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${fileName}-${new Date().toISOString().slice(0, 10)}.xlsx`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
