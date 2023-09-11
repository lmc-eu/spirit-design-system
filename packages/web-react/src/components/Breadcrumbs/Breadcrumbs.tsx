import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritBreadcrumbsProps } from '../../types';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { useBreadcrumbsStyleProps } from './useBreadcrumbsStyleProps';

const defaultProps = {
  items: [],
};

export const Breadcrumbs = <T extends ElementType = 'nav'>(props: SpiritBreadcrumbsProps<T>): JSX.Element => {
  const { children, elementType: ElementTag = 'nav', goBackTitle, items, ...restProps } = props;
  const { classProps, props: modifiedProps } = useBreadcrumbsStyleProps({ ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const displayTabletNoneClassName = useClassNamePrefix('d-tablet-none');
  const displayNoneClassName = useClassNamePrefix('d-none');
  const displayTabletFlexClassName = useClassNamePrefix('d-tablet-flex');

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
                <li className={displayTabletNoneClassName}>
                  <Icon name="chevron-left" />
                  <Link href={item.url} color="primary" isUnderlined>
                    {goBackTitle}
                  </Link>
                </li>
              )}
              <li className={classNames(displayNoneClassName, displayTabletFlexClassName)}>
                {index !== 0 && <Icon name="chevron-right" />}
                <Link
                  href={item.url}
                  color={isLast(index, items?.length) ? 'secondary' : 'primary'}
                  isUnderlined={!isLast(index, items?.length)}
                  aria-current={isLast(index, items?.length) ? 'page' : undefined}
                >
                  {item.title}
                </Link>
              </li>
            </React.Fragment>
          ))}
      </ol>
    </ElementTag>
  );
};

Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;
