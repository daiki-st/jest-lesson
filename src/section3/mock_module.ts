import fs from "fs";

export function readFile(path: string) {
  try {
    const data = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    return data;
  } catch (error) {
    // エラーハンドリングのロジックをここに追加
    throw error;
  }
}
