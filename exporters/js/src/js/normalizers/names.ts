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

export function kebabCaseToPascalCase(name: string): string {
  return (
    name
      // Split the string at hyphens
      .split('-')
      // Capitalize the first letter of each segment
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
      // Join the segments back together
      .join('')
  );
}

export function kebabCaseToCamelCase(name: string): string {
  return (
    name
      // Split the string at hyphens
      .split('-')
      // Capitalize the first letter of each segment
      .map((segment, index) => (index > 0 ? segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase() : segment))
      // Join the segments back together
      .join('')
  );
}
