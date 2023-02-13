export function hasKey(obj: Record<string, any> | undefined, key: string) {
  return Object.keys(obj || {}).includes(key);
}
