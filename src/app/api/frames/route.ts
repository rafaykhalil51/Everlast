import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const framesDir = path.join(process.cwd(), "public", "frames");
    const entries = await fs.readdir(framesDir, { withFileTypes: true });
    const files = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => name.startsWith("frame_") && name.toLowerCase().endsWith(".png"))
      .sort();

    return NextResponse.json({
      count: files.length,
      files,
    });
  } catch {
    // If the user hasn't pasted frames yet, keep the app running.
    return NextResponse.json({ count: 0, files: [] });
  }
}

