import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { BreadcrumbsStyleProps } from '../../types';

export interface BreadcrumbsStyles {
  /** className props */
  classProps: {
    root: string;
    item: string;
  };
  /** props to be passed to the element */
  props: BreadcrumbsStyleProps;
}

export function useBreadcrumbsStyleProps<P extends BreadcrumbsStyleProps>(props: P): BreadcrumbsStyles {
  const { isGoBackOnly, ...restProps } = props;
  const breadcrumbsClass = useClassNamePrefix('Breadcrumbs');
  const displayNoneClassName = useClassNamePrefix('d-none');
  const displayTabletFlexClassName = useClassNamePrefix('d-tablet-flex');
  const displayTabletNoneClassName = useClassNamePrefix('d-tablet-none');

  return {
    classProps: {
      root: breadcrumbsClass,
      item: classNames({
        [displayNoneClassName]: !isGoBackOnly,
        [displayTabletFlexClassName]: !isGoBackOnly,
        [displayTabletNoneClassName]: isGoBackOnly,
      }),
    },
    props: restProps,
  };
}
