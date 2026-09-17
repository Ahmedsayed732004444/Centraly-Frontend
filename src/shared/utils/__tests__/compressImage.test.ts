import { compressImage } from '../compressImage';

function makeFile(sizeBytes: number, type = 'image/jpeg', name = 'photo.jpg'): File {
  return new File([new Uint8Array(sizeBytes)], name, { type });
}

// jsdom implements neither createImageBitmap nor canvas 2D drawing/encoding,
// so each test stubs just enough of that pipeline to drive compressImage's
// own branches - the fake bitmap's dimensions and the fake blob's size are
// what the assertions actually care about.
function stubImagePipeline({
  bitmapWidth = 4000,
  bitmapHeight = 3000,
  blobSize,
}: { bitmapWidth?: number; bitmapHeight?: number; blobSize: number | null }) {
  vi.stubGlobal('createImageBitmap', vi.fn().mockResolvedValue({
    width: bitmapWidth,
    height: bitmapHeight,
    close: vi.fn(),
  }));

  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
    drawImage: vi.fn(),
  } as unknown as CanvasRenderingContext2D);

  vi.spyOn(HTMLCanvasElement.prototype, 'toBlob').mockImplementation((callback) => {
    callback(blobSize === null ? null : new Blob([new Uint8Array(blobSize)], { type: 'image/jpeg' }));
  });
}

describe('compressImage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('leaves small files untouched without touching the canvas pipeline', async () => {
    const bitmapSpy = vi.fn();
    vi.stubGlobal('createImageBitmap', bitmapSpy);
    const file = makeFile(100 * 1024); // 100KB, below the 300KB skip threshold

    const result = await compressImage(file);

    expect(result).toBe(file);
    expect(bitmapSpy).not.toHaveBeenCalled();
  });

  it('leaves GIFs untouched (avoids destroying animation)', async () => {
    const bitmapSpy = vi.fn();
    vi.stubGlobal('createImageBitmap', bitmapSpy);
    const file = makeFile(2 * 1024 * 1024, 'image/gif', 'anim.gif');

    const result = await compressImage(file);

    expect(result).toBe(file);
    expect(bitmapSpy).not.toHaveBeenCalled();
  });

  it('downscales and re-encodes a large photo into a smaller jpeg File', async () => {
    stubImagePipeline({ bitmapWidth: 4000, bitmapHeight: 3000, blobSize: 200 * 1024 });
    const original = makeFile(5 * 1024 * 1024, 'image/jpeg', 'camera-photo.HEIC');

    const result = await compressImage(original);

    expect(result).not.toBe(original);
    expect(result.type).toBe('image/jpeg');
    expect(result.name).toBe('camera-photo.jpg');
    expect(result.size).toBe(200 * 1024);
    expect(result.size).toBeLessThan(original.size);

    const canvas = (HTMLCanvasElement.prototype.getContext as ReturnType<typeof vi.fn>).mock
      .instances[0] as HTMLCanvasElement;
    // 4000x3000 must be capped to the 1280 long edge, preserving aspect ratio.
    expect(canvas.width).toBe(1280);
    expect(canvas.height).toBe(960);
  });

  it('never upscales an image smaller than the max dimension', async () => {
    stubImagePipeline({ bitmapWidth: 800, bitmapHeight: 400, blobSize: 250 * 1024 });
    const original = makeFile(400 * 1024);

    await compressImage(original);

    const canvas = (HTMLCanvasElement.prototype.getContext as ReturnType<typeof vi.fn>).mock
      .instances[0] as HTMLCanvasElement;
    expect(canvas.width).toBe(800);
    expect(canvas.height).toBe(400);
  });

  it('falls back to the original file when the "compressed" blob is not actually smaller', async () => {
    stubImagePipeline({ blobSize: 6 * 1024 * 1024 });
    const original = makeFile(5 * 1024 * 1024);

    const result = await compressImage(original);

    expect(result).toBe(original);
  });

  it('falls back to the original file if canvas.toBlob yields nothing', async () => {
    stubImagePipeline({ blobSize: null });
    const original = makeFile(5 * 1024 * 1024);

    const result = await compressImage(original);

    expect(result).toBe(original);
  });

  it('falls back to the original file if decoding throws (corrupt/unsupported image)', async () => {
    vi.stubGlobal('createImageBitmap', vi.fn().mockRejectedValue(new Error('decode failed')));
    const original = makeFile(5 * 1024 * 1024);

    const result = await compressImage(original);

    expect(result).toBe(original);
  });
});
