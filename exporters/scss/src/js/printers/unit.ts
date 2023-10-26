export function printUnit(value: number, unit: string): string {
  let result = value.toString();
  if (+value !== 0) {
    if (unit === 'Pixels') {
      result += 'px';
    }
    if (unit === 'rem') {
      result += 'rem';
    }
  }

  return result;
}
