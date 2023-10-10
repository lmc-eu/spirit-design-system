import classNames from 'classnames';
import React, { ElementType, Fragment } from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritBreadcrumbsProps } from '../../types';
import BreadcrumbsItem from './BreadcrumbsItem';
import { useBreadcrumbsStyleProps } from './useBreadcrumbsStyleProps';

const defaultProps = {
  items: [],
};

export const Breadcrumbs = <T extends ElementType = 'nav'>(props: SpiritBreadcrumbsProps<T>): JSX.Element => {
  const { children, elementType: ElementTag = 'nav', goBackTitle, items, ...restProps } = props;
  const { classProps, props: modifiedProps } = useBreadcrumbsStyleProps({ ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const isLast = (index: number, itemsCount: number) => {
    return index === itemsCount - 1;
  };

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      className={classNames(classProps.root, styleProps.className)}
      aria-label="Breadcrumb"
    >
      <ol>
        {children ||
          items?.map((item, index) => (
            <Fragment key={`BreadcrumbsItem_${item.title}`}>
              {index === items.length - 2 && goBackTitle && (
                <BreadcrumbsItem href={item.url || undefined} isGoBackOnly>
                  {goBackTitle}
                </BreadcrumbsItem>
              )}
              <BreadcrumbsItem href={item.url || undefined} isCurrent={isLast(index, items?.length)}>
                {item.title}
              </BreadcrumbsItem>
            </Fragment>
          ))}
      </ol>
    </ElementTag>
  );
};

Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;
