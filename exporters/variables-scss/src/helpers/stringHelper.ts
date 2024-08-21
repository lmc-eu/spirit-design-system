export const toPlural = (name: string): string => {
  const specialCases: Record<string, string> = {
    radius: 'radii',
    spacing: 'spaces',
  };

  return specialCases[name] || (name.endsWith('s') ? name : `${name}s`);
};
