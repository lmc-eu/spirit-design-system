'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { AlignmentXExtended, AlignmentYExtended, DirectionExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritFlexProps } from '../../types';
import { useFlexStyleProps } from './useFlexStyleProps';

const defaultProps: Partial<SpiritFlexProps> = {
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
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const flexStyleProps = {
    style: {
      ...styleProps.style,
      ...flexStyle,
    },
  };

  return (
    <ElementTag {...otherProps} {...flexStyleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default Flex;
