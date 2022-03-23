/**
 * Using object destruction is very simple in this case, but there are unused properties which could be confusing
 * for other developers.
 * Better approach is to use Object.keys().filter.reduce() to get this job done.
 * But for now, as we are using ES5, the filter() on string[] is not supported.
 */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Adding type to rest props is like a hell in typescript.
 * Index keys using `[key: string]: any` only supports `string`, `number` and `symbol` for symbol.
 * But we have problems with `elementType` prop which is HTMLAttributes<HTMLElement> and cannot be used in index keys.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const filterProps = ({ style, className, ...restProps }: any) => restProps;
