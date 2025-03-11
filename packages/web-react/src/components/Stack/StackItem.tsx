'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritStackItemProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useStackStyleProps } from './useStackStyleProps';

const StackItem = <T extends ElementType = 'div'>(props: SpiritStackItemProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useStackStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, {
    classProps: classProps.item,
    styleProps,
    otherProps,
  });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

StackItem.spiritComponent = 'StackItem';

export default StackItem;
