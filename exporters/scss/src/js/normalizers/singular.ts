export function singular(name: string): string {
  if (name.slice(-1) === 's') {
    return name.replace(/.$/, '');
  }

  return name;
}
