'use client';

import classNames from 'classnames';
import React, { ReactElement } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritActionGroupProps } from '../../types';
import { useActionGroupStyleProps } from './useActionGroupStyleProps';

const defaultProps: Partial<SpiritActionGroupProps> = {
  direction: 'row',
};

const ActionGroup = (props: SpiritActionGroupProps): ReactElement => {
  const { children, ...restProps } = props;
  const propsWithDefaults = { ...defaultProps, ...restProps };
  const {
    classProps,
    props: modifiedProps,
    styleProps: actionGroupStyle,
  } = useActionGroupStyleProps(propsWithDefaults);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const actionGroupStyleProps = {
    style: {
      ...styleProps.style,
      ...actionGroupStyle,
    },
  };

  return (
    <div {...otherProps} {...actionGroupStyleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </div>
  );
};

export default ActionGroup;
