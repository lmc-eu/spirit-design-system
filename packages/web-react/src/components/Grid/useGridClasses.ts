import { SpiritBreakpoints } from '../../types';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'typeof SpiritBreakpoints'.
const gridBreakpoints = Object.keys(SpiritBreakpoints).map((breakpoint) => SpiritBreakpoints[breakpoint as unknown]);

export const useGridClasses = <T>(
  className: string,
  props: T,
  modificator: string,
  breakpoints: string[] = gridBreakpoints,
) => {
  const classes: string[] = [];

  breakpoints.forEach((breakpoint) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'unknown'.
    const variant = props[breakpoint];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'unknown'.
    delete props[breakpoint];

    if (!variant && variant !== '') {
      return;
    }

    classes.push(`${className}--${breakpoint}--${modificator}-${variant}`);
  });

  return {
    classes,
    props,
  };
};
