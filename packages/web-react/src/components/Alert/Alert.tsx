import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { SpiritAlertProps } from '../../types';
import { Icon } from '../Icon';
import { useAlertIcon } from './useAlertIcon';
import { useAlertStyleProps } from './useAlertStyleProps';

const defaultProps = {
  color: 'success',
  isCentered: false,
};

export const Alert = <T extends ElementType = 'div', E = void>(props: SpiritAlertProps<T, E>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, color, iconName, ...restProps } = props;
  const { classProps, props: modifiedProps } = useAlertStyleProps({ color, ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const alertIconName = useAlertIcon({ color, iconName, ...otherProps });

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)} role="alert">
      <Icon name={alertIconName} />
      <div>{children}</div>
    </ElementTag>
  );
};

Alert.defaultProps = defaultProps;

export default Alert;
