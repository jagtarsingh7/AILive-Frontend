export function getEnv(variable: string, defaultValue = ''): string {
  const env = (window as any)?.env || {};
  return env[variable] ?? process.env[variable] ?? defaultValue;
}
