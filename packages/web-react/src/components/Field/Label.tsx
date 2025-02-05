'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritLabelProps } from '../../types';
import { mergeStyleProps } from '../../utils';

const Label = <T extends ElementType = 'label'>(props: SpiritLabelProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'label', children, htmlFor, for: labelFor, ...restProps } = props;
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { styleProps, otherProps });

  return (
    <ElementTag
      {...otherProps}
      {...mergedStyleProps}
      htmlFor={ElementTag === 'label' ? labelFor || htmlFor : undefined}
    >
      {children}
    </ElementTag>
  );
};

Label.spiritComponent = 'Label';

export default Label;
