import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { BreadcrumbsProps } from '../../types';

export interface BreadcrumbsStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: BreadcrumbsProps;
}

export function useBreadcrumbsStyleProps(props: BreadcrumbsProps): BreadcrumbsStyles {
  const breadcrumbsClass = useClassNamePrefix('Breadcrumbs');

  return {
    classProps: breadcrumbsClass,
    props,
  };
}
