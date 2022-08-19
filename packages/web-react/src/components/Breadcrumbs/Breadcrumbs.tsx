import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useBreadcrumbsStyleProps } from './useBreadcrumbsStyleProps';
import { SpiritBreadcrumbsProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';

const defaultProps = {
  goBackTitle: '',
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
      className={classNames(classProps, styleProps.className)}
      aria-label="Breadcrumb"
    >
      <ol>
        {children ||
          items?.map((item, index) => (
            <React.Fragment key={`BreadcrumbsItem_${item.title}`}>
              {index === items.length - 2 && goBackTitle && (
                <li className="d-tablet-none">
                  <a href={item.url}>{goBackTitle}</a>
                </li>
              )}
              <li className="d-none d-tablet-flex">
                <a href={item.url} aria-current={isLast(index, items?.length) ? 'page' : undefined}>
                  {item.title}
                </a>
              </li>
            </React.Fragment>
          ))}
      </ol>
    </ElementTag>
  );
};

Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;
