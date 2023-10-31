export function plural(name: string): string {
  if (name === 'radius') {
    return 'radii';
  }
  if (name.slice(-1) === 's') {
    return name;
  }

  return `${name}s`;
}
