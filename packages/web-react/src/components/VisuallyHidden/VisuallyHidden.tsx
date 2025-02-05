'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritVisuallyHiddenProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useVisuallyHiddenProps } from './useVisuallyHiddenProps';

const VisuallyHidden = <T extends ElementType = 'span'>(props: SpiritVisuallyHiddenProps<T>): JSX.Element => {
  const { children, elementType: ElementTag = 'span', ...rest } = props;
  const { classProps, props: modifiedProps } = useVisuallyHiddenProps(rest);
  const { styleProps, props: otherProps } = useStyleProps({ ElementTag, ...modifiedProps });
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

VisuallyHidden.spiritComponent = 'VisuallyHidden';

export default VisuallyHidden;
