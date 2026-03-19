import { execSync } from "child_process"

export function gitLastmod(filePath: string): string | undefined {
  try {
    const result = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: "utf-8",
    }).trim()
    return result || undefined
  } catch {
    return undefined
  }
}
