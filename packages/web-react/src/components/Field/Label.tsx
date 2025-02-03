'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritLabelProps } from '../../types';

const Label = <T extends ElementType = 'label'>(props: SpiritLabelProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'label', children, htmlFor, for: labelFor, ...restProps } = props;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ElementTag {...otherProps} {...styleProps} htmlFor={ElementTag === 'label' ? labelFor || htmlFor : undefined}>
      {children}
    </ElementTag>
  );
};

export default Label;
