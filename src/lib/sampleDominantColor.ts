export async function sampleDominantColorFromUrl(url: string) {
  // Samples an average color from the image (fast enough for a single/rare call).
  const img = new Image();
  img.decoding = "async";
  img.crossOrigin = "anonymous";
  img.src = url;

  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return { hex: "#60a5fa", rgb: [96, 165, 250] as const };

  // Downscale for speed.
  const size = 24;
  canvas.width = size;
  canvas.height = size;
  ctx.drawImage(img, 0, 0, size, size);

  const data = ctx.getImageData(0, 0, size, size).data;
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    if (alpha < 50) continue;
    r += data[i + 0];
    g += data[i + 1];
    b += data[i + 2];
    count++;
  }

  if (count === 0) return { hex: "#60a5fa", rgb: [96, 165, 250] as const };

  r = Math.round(r / count);
  g = Math.round(g / count);
  b = Math.round(b / count);

  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return { hex, rgb: [r, g, b] as const };
}

