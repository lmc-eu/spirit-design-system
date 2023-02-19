import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useDeprecatedMessage, useDeprecationMessage, useStyleProps } from '../../hooks';
import { SpiritTagProps, StyleProps } from '../../types';
import { useTagStyleProps } from './useTagStyleProps';

const defaultProps = {
  color: 'neutral',
  elementType: 'span',
  isSubtle: false,
  size: 'medium',
};

export const Tag = <T extends ElementType = 'span', C = void, S = void>(
  props: SpiritTagProps<T, C, S>,
): JSX.Element => {
  const {
    elementType,
    /** @deprecated Will be removed in next major version */
    tag,
    children,
    ...restProps
  } = props;
  const { classProps, props: modifiedProps } = useTagStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps as StyleProps);

  const ElementTag = tag || elementType || 'span';

  useDeprecatedMessage({
    trigger: !!tag,
    componentName: 'Tag',
    deprecatedPropName: 'tag',
    newPropName: 'elementType',
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
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

Tag.defaultProps = defaultProps;

export default Tag;
