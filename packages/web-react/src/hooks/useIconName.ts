export function useIconName(key: string | undefined, iconMap: Record<string, string>, defaultKey: string = 'default') {
  return key && iconMap[key] ? iconMap[key] : iconMap[defaultKey];
}
