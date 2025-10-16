'use client';

import classNames from 'classnames';
import React from 'react';
import { BackgroundStyleProps, ObjectFit } from '../../constants';
import { useStyleProps } from '../../hooks';
import { CardSizes, type SpiritCardMediaProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useCardMediaStyleProps } from './useCardMediaStyleProps';
import { useCardStyleProps } from './useCardStyleProps';

const defaultProps: Partial<SpiritCardMediaProps> = {
  fit: ObjectFit.COVER,
  hasFilledHeight: false,
  isExpanded: false,
  size: CardSizes.AUTO,
};

const CardMedia = (props: SpiritCardMediaProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { backgroundColor, children, fit, hasFilledHeight, isExpanded, size, ...restProps } = propsWithDefaults;
  const { classProps } = useCardStyleProps({ size, isExpanded, hasFilledHeight });
  const { classProps: cardMediaClassProps, styleProps: cardMediaStyleProps } = useCardMediaStyleProps({
    backgroundColor,
    fit,
  });
  const { styleProps, props: otherProps } = useStyleProps(restProps, {
    ...BackgroundStyleProps,
  });
  const mergedStyleProps = mergeStyleProps('div', {
    classProps: classNames(classProps.media, cardMediaClassProps, styleProps.className),
    styleProps: { ...cardMediaStyleProps, ...styleProps },
  });

  return (
    <div {...otherProps} {...mergedStyleProps}>
      <div className={classProps.mediaCanvas}>{children}</div>
    </div>
  );
};

CardMedia.spiritComponent = 'CardMedia';

export default CardMedia;
