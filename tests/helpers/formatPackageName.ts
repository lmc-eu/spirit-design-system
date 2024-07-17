export const formatPackageName = (packageName: string) =>
  packageName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
