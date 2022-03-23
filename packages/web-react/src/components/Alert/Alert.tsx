import React, { ElementType } from 'react';
import { useAlertStyleProps } from './useAlertStyleProps';
import { SpiritAlertProps } from '../../types';
import { filterProps } from '../../utils/filterProps';

const defaultProps = {
  color: 'success',
};

export const Alert = <T extends ElementType = 'div'>(props: SpiritAlertProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useAlertStyleProps(restProps);

  return (
    <ElementTag {...filterProps(modifiedProps)} className={classProps} role="alert">
      {children}
    </ElementTag>
  );
};

Alert.defaultProps = defaultProps;

export default Alert;
