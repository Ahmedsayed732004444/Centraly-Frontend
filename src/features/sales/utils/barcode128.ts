// Code 128 (Subset B) Pure SVG Generator
// Zero external dependencies - High contrast for thermal printers

const PATTERNS: string[] = [
  '212222', '222122', '222221', '121223', '121322', '131222', '122213', '122312', '132212', '221213',
  '221312', '231212', '112232', '122132', '122231', '113222', '123122', '123221', '223211', '221132',
  '221231', '213212', '223112', '312131', '311222', '321122', '321221', '312212', '322112', '322211',
  '212123', '212321', '232121', '111323', '131123', '131321', '112313', '132113', '132311', '211313',
  '231113', '231311', '112133', '112331', '132131', '113123', '113321', '133121', '313121', '211331',
  '231131', '213113', '213311', '213131', '311123', '311321', '331121', '312113', '312311', '332111',
  '314111', '221411', '431111', '111224', '111422', '121124', '121421', '141122', '141221', '112214',
  '112412', '122114', '122411', '142112', '142211', '241211', '221114', '413111', '241112', '134111',
  '111242', '121142', '121241', '114212', '124112', '124211', '411212', '421112', '421211', '212141',
  '214121', '412121', '111143', '111341', '131141', '114113', '114311', '411113', '411311', '113141',
  '114131', '311141', '411131', '211412', '211214', '211232', '2331112'
];

export interface BarcodeOptions {
  height?: number;
  includeText?: boolean;
}

/**
 * Encodes ASCII string to Code 128 (Subset B) SVG string.
 */
export function generateCode128Svg(rawText: string, options: BarcodeOptions = {}): string {
  const text = (rawText || '').trim();
  if (!text) return '';

  const height = options.height ?? 46;
  const includeText = options.includeText ?? true;

  // Filter characters to standard printable ASCII (range 32 to 126)
  const sanitized = text.split('').map(char => {
    const code = char.charCodeAt(0);
    return code >= 32 && code <= 126 ? char : '-';
  }).join('');

  const values: number[] = [];
  for (let i = 0; i < sanitized.length; i++) {
    values.push(sanitized.charCodeAt(i) - 32);
  }

  // Start B = 104
  const startCode = 104;
  let checksum = startCode;
  for (let i = 0; i < values.length; i++) {
    checksum += (i + 1) * values[i];
  }
  checksum = checksum % 103;

  const symbolIndices = [startCode, ...values, checksum, 106];

  // Calculate bars
  const rects: { x: number; width: number }[] = [];
  let currentX = 8; // Quiet zone left

  for (const index of symbolIndices) {
    const pattern = PATTERNS[index];
    if (!pattern) continue;

    let isBar = true;
    for (let p = 0; p < pattern.length; p++) {
      const width = parseInt(pattern[p], 10);
      if (isBar) {
        rects.push({ x: currentX, width });
      }
      currentX += width;
      isBar = !isBar;
    }
  }

  const quietZoneRight = 8;
  const totalWidth = currentX + quietZoneRight;
  const totalSvgHeight = includeText ? height + 16 : height;

  const rectsSvg = rects
    .map(r => `<rect x="${r.x}" y="0" width="${r.width}" height="${height}" fill="#000000" />`)
    .join('');

  const textSvg = includeText
    ? `<text x="${totalWidth / 2}" y="${height + 13}" font-family="monospace, Courier, sans-serif" font-size="11" font-weight="bold" fill="#000000" text-anchor="middle" letter-spacing="2">${sanitized}</text>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalSvgHeight}" width="100%" height="${totalSvgHeight}" preserveAspectRatio="xMidYMid meet" style="display:block;margin:0 auto;max-width:240px;">${rectsSvg}${textSvg}</svg>`;
}
