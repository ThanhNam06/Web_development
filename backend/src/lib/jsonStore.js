import fs from "node:fs/promises";
import path from "node:path";

export async function ensureJsonFile(filePath, defaultValue) {
  const absPath = path.resolve(filePath);
  const dir = path.dirname(absPath);

  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {
    return absPath;
  }

  try {
    await fs.access(absPath);
  } catch {
    await fs.writeFile(absPath, JSON.stringify(defaultValue, null, 2), "utf-8");
  }

  return absPath;
}

export async function readJsonFile(filePath, fallbackValue = null) {
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return fallbackValue;
  }
}

export async function writeJsonFile(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}
