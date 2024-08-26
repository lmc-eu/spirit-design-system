export const toPlural = (name: string): string => {
  if (name === 'radius') {
    return 'radii';
  }

  if (name === 'spacing') {
    return 'spaces';
  }

  if (name === 'spacing') {
    return 'spaces';
  }

  if (name.slice(-1) === 's') {
    return name;
  }

  return `${name}s`;
};
