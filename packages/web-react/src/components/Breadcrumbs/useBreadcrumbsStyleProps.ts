import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { BreadcrumbsStyleProps } from '../../types';

export interface BreadcrumbsStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: BreadcrumbsStyleProps;
}

export function useBreadcrumbsStyleProps<P extends BreadcrumbsStyleProps>(props: P): BreadcrumbsStyles {
  const { isGoBackOnly, ...restProps } = props;
  const breadcrumbsClass = useClassNamePrefix('Breadcrumbs');

  return {
    classProps: breadcrumbsClass,
    props,
  };
}
