import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';

export interface UsePaginationStyleProps {
  isCurrent?: boolean;
}

export interface UsePaginationStyleReturn {
  /** className props */
  classProps: {
    root: string;
    item: string;
    link: string;
  };
}

export const usePaginationStyleProps = (props?: UsePaginationStyleProps): UsePaginationStyleReturn => {
  const paginationRootClass = useClassNamePrefix('Pagination');
  const paginationItemClass = `${paginationRootClass}__item`;
  const paginationLinkClass = `${paginationRootClass}__link`;
  const paginationLinkCurrentClass = `${paginationLinkClass}--current`;

  return {
    classProps: {
      root: paginationRootClass,
      item: paginationItemClass,
      link: classNames(paginationLinkClass, { [paginationLinkCurrentClass]: props?.isCurrent }),
    },
  };
};
