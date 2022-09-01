export function useIconName(key: string | undefined, iconMap: Record<string, string>) {
  return key && iconMap[key] ? iconMap[key] : iconMap.default;
}
