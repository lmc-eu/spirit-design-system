import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { PaginationProps } from '../../types';

export interface PaginationStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: PaginationProps;
}

export function usePaginationStyleProps(props: PaginationProps): PaginationStyles {
  const paginationClass = useClassNamePrefix('Pagination');

  return {
    classProps: paginationClass,
    props,
  };
}
