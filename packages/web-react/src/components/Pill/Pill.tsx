import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { SpiritPillProps, StyleProps } from '../../types';
import { usePillStyleProps } from './usePillStyleProps';

const defaultProps = {
  color: 'selected',
};

export const Pill = <T extends ElementType = 'span', C = void>(props: SpiritPillProps<T, C>): JSX.Element => {
  const { elementType: ElementTag = 'span', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = usePillStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps as StyleProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

Pill.defaultProps = defaultProps;

export default Pill;
