'use client';

import classNames from 'classnames';
import React, { ReactElement } from 'react';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { SpiritActionLayoutProps } from '../../types/actionLayout';
import { useActionLayoutStyleProps } from './useActionLayoutStyleProps';

const UNSTABLE_ActionLayout = (props: SpiritActionLayoutProps): ReactElement => {
  const { children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useActionLayoutStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  useDeprecationMessage({
    method: 'custom',
    trigger: true,
    componentName: 'UNSTABLE_ActionLayout',
    customText: 'The component will be deleted in the next version.',
  });

  return (
    <div {...otherProps} className={classNames(classProps.root, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

export default UNSTABLE_ActionLayout;
