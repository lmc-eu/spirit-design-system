'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { AlignmentXExtended, AlignmentYExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritFlexProps } from '../../types';
import { useFlexStyleProps } from './useFlexStyleProps';

const defaultProps: Partial<SpiritFlexProps> = {
  alignmentX: AlignmentXExtended.STRETCH,
  alignmentY: AlignmentYExtended.STRETCH,
  direction: 'row',
  elementType: 'div',
  isWrapping: false,
};

const Flex = <T extends ElementType = 'div'>(props: SpiritFlexProps<T>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'div', children, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps, styleProps: flexStyle } = useFlexStyleProps(restProps);
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
