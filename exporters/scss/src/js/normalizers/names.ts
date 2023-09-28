export function slugifyName(name: string): string {
  return (
    name
      // Replace all white space characters with dashes, `Text Primary` -> `Text-Primary`
      .replace(/\s/g, '-')
      // Replace all forward slashes with dashes, `Text/Primary` -> `Text-Primary`
      .replace(/\//g, '-')
      // Replace `dash number number dash` with single dash, `Text-01-Primary` -> `Text-Primary`
      .replace(/-\d\d-/g, '-')
      // Replace all double dashes with single dashes, `Text--Primary` -> `Text-Primary`
      .replace(/--+/g, '-')
      // Make all characters lowercase, `Text-Primary` -> `text-primary`
      .toLowerCase()
  );
}
