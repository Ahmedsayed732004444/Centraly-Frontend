const MAX_DIMENSION = 1280;
const JPEG_QUALITY = 0.75;
// Below this, the file is already small enough that re-encoding isn't worth
// the quality loss - skip it.
const SKIP_BELOW_BYTES = 300 * 1024;

/**
 * Downscales and re-encodes an oversized image before upload. Product photos
 * come straight off phone cameras (often 2-8MB) and the backend stores
 * whatever it's given with zero server-side resizing (Centraly-Backend's
 * FileHelper.UploadeFileAsync writes the raw upload to disk as-is) - on a
 * free hosting plan's 5GB quota, a catalog's worth of unshrunk photos alone
 * can exhaust it. Falls back to the original file on any failure (unsupported
 * format, decode error, or a "compressed" result that isn't actually smaller)
 * so a bad image never blocks the upload.
 */
export async function compressImage(file: File): Promise<File> {
  if (!file.type.startsWith('image/') || file.type === 'image/gif' || file.size <= SKIP_BELOW_BYTES) {
    return file;
  }

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      bitmap.close();
      return file;
    }
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/jpeg', JPEG_QUALITY)
    );
    if (!blob || blob.size >= file.size) return file;

    const newName = file.name.replace(/\.[^./\\]+$/, '') + '.jpg';
    return new File([blob], newName, { type: 'image/jpeg' });
  } catch {
    return file;
  }
}
