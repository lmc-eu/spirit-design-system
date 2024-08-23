export function toPascalCase(str: string): string {
  if (typeof str !== 'string') {
    return str;
  }

  return str
    .split('-') // Split the string by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(''); // Join the words back together without any hyphens
}
