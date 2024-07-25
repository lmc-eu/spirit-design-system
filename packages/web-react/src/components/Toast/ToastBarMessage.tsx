'use client';

import classNames from 'classnames';
import React from 'react';
import { useClassNamePrefix, useStyleProps } from '../../hooks';
import { ChildrenProps } from '../../types';

const ToastBarMessage = (props: ChildrenProps) => {
  const { children, ...restProps } = props;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div
      {...styleProps}
      {...otherProps}
      className={classNames(useClassNamePrefix('text-truncate-multiline'), styleProps.className)}
    >
      {children}
    </div>
  );
};

export default ToastBarMessage;
