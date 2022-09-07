import { Token } from '../index';
import { localeSort } from './localeSort';

export function breakpointSort(a: Token, b: Token, breakpointsString: string, sortByValue: boolean) {
  const breakpoints = breakpointsString.trim().split(',');
  let aBreakpoint = '';
  let bBreakpoint = '';
  breakpoints.some((substring: string) => {
    if ((a.origin ? a.origin.name : a.name).includes(substring)) {
      aBreakpoint = substring;
    }

    if ((b.origin ? b.origin.name : b.name).includes(substring)) {
      bBreakpoint = substring;
    }

    return false;
  });

  if (!!sortByValue && !aBreakpoint) {
    return -1;
  }

  let result = breakpoints.indexOf(aBreakpoint) - breakpoints.indexOf(bBreakpoint);

  if (result === 0) {
    result = localeSort(a, b);
  }

  return result;
}
