import classNames from 'classnames';
import React, { ElementType, useContext } from 'react';
import IconsContext from '../../context/IconsContext';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
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
  const icons = useContext(IconsContext);

  useDeprecationMessage({
    method: 'custom',
    trigger: color === 'danger' && (icons == null || icons[alertIconName] == null),
    componentName: 'Alert',
    customText: `The "warning" icon for the "danger" color is deprecated.
    Make sure you have the "danger" icon in your project assets.
    The fallback to the "warning" icon will be removed in favor of the "danger" icon in the next major version.`,
  });

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)} role="alert">
      <Icon name={alertIconName} />
      <div>{children}</div>
    </ElementTag>
  );
};

Alert.defaultProps = defaultProps;

export default Alert;
