import React, { ElementType } from 'react';
import classNames from 'classnames';
import { usePillStyleProps } from './usePillStyleProps';
import { SpiritPillProps, StyleProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';

const defaultProps = {
  color: 'selected',
};

export const Pill = <T extends ElementType = 'span'>(props: SpiritPillProps<T>): JSX.Element => {
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
