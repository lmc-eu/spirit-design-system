export function cleanName(name: string): string {
  return name.replace(/\s/g, '-').replace(/\//g, '-').replace(/\d+-/g, '').replace(/--+/g, '-').toLowerCase();
}
