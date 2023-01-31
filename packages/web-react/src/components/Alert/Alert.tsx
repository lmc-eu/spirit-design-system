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
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useAlertStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const iconName = useAlertIcon(restProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)} role="alert">
      <Icon name={iconName} />
      <div>{children}</div>
    </ElementTag>
  );
};

Alert.defaultProps = defaultProps;

export default Alert;
