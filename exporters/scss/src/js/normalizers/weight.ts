export function normalizeWeight(name: string): number | string {
  switch (name.toLowerCase().replace(/\W/g, '')) {
    case 'thin':
      return 100;
    case 'extralight':
      return 200;
    case 'light':
      return 300;
    case 'normal':
      return 400;
    case 'regular':
      return 400;
    case 'medium':
      return 500;
    case 'semibold':
      return 600;
    case 'bold':
      return 700;
    case 'extrabold':
      return 800;
    case 'black':
      return 900;
    case 'extrablack':
      return 950;
    default:
      return name;
  }
}
