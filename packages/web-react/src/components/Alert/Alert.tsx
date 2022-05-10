import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useAlertStyleProps } from './useAlertStyleProps';
import { SpiritAlertProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';

const defaultProps = {
  color: 'success',
};

export const Alert = <T extends ElementType = 'div'>(props: SpiritAlertProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useAlertStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)} role="alert">
      {children}
    </ElementTag>
  );
};

Alert.defaultProps = defaultProps;

export default Alert;
