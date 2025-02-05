'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritAlertProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { Icon } from '../Icon';
import { useAlertIcon } from './useAlertIcon';
import { useAlertStyleProps } from './useAlertStyleProps';

const defaultProps: Partial<SpiritAlertProps> = {
  color: 'success',
  isCentered: false,
};

export const Alert = <T extends ElementType = 'div', E = void>(props: SpiritAlertProps<T, E>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'div', children, color, iconName, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useAlertStyleProps({ color, ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps });
  const alertIconName = useAlertIcon({ color, iconName, ...otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      <Icon name={alertIconName} />
      <div>{children}</div>
    </ElementTag>
  );
};

Alert.spiritComponent = 'Alert';

export default Alert;
