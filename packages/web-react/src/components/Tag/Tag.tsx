import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { SpiritTagProps, StyleProps } from '../../types';
import { useTagStyleProps } from './useTagStyleProps';

const defaultProps = {
  color: 'neutral',
  elementType: 'span',
  isSubtle: false,
  size: 'medium',
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Tag'] }] */
const _Tag = <T extends ElementType = 'span', C = void, S = void>(
  props: SpiritTagProps<T, C, S>,
  ref: ForwardedRef<HTMLSpanElement>,
): JSX.Element => {
  const {
    elementType,
    /** @deprecated Will be removed in the next major version. */
    tag,
    children,
    ...restProps
  } = props;
  const { classProps, props: modifiedProps } = useTagStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps as StyleProps);

  const ElementTag = tag || elementType || 'span';

  useDeprecationMessage({
    method: 'property',
    trigger: !!tag,
    componentName: 'Tag',
    propertyProps: {
      deprecatedName: 'tag',
      newName: 'elementType',
    },
  });

  useDeprecationMessage({
    method: 'property',
    trigger: props?.color === 'default',
    componentName: 'Tag',
    propertyProps: {
      deprecatedValue: 'default',
      newValue: 'neutral',
      propertyName: 'color',
    },
  });

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)} ref={ref}>
      {children}
    </ElementTag>
  );
};

export const Tag = forwardRef<HTMLSpanElement, SpiritTagProps<ElementType>>(_Tag);

Tag.defaultProps = defaultProps;

export default Tag;
