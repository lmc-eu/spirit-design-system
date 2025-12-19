'use client';

import React, { type ElementType } from 'react';
import { AlignmentXExtended, AlignmentYExtended, DirectionExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { type SpiritFlexProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useFlexStyleProps } from './useFlexStyleProps';

const defaultProps: SpiritFlexProps = {
  alignmentX: AlignmentXExtended.STRETCH,
  alignmentY: AlignmentYExtended.STRETCH,
  direction: DirectionExtended.HORIZONTAL,
  elementType: 'div',
  isWrapping: false,
};

const Flex = <T extends ElementType = 'div'>(props: SpiritFlexProps<T>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = 'div',
    /**
     * @deprecated "row" and "column" values will be removed in the next major version. Please use "horizontal" and "vertical" instead.
     * @see https://jira.almacareer.tech/browse/DS-1629
     */
    direction,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps, styleProps: flexStyle } = useFlexStyleProps({ direction, ...restProps });
  const { styleProps, props: otherProps } = useStyleProps({ ...modifiedProps });
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, flexStyle, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Flex.spiritComponent = 'Flex';
Flex.spiritDefaultElement = 'div' as const;
Flex.spiritDefaultProps = null as unknown as SpiritFlexProps<'div'>;

export default Flex;
