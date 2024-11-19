'use client';

import classNames from 'classnames';
import React from 'react';
import { AlignmentX } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritCardArtworkProps } from '../../types';
import { useCardStyleProps } from './useCardStyleProps';

const defaultProps: Partial<SpiritCardArtworkProps> = {
  alignmentX: AlignmentX.LEFT,
};

const CardArtwork = (props: SpiritCardArtworkProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, alignmentX, ...restProps } = propsWithDefaults;
  const { classProps } = useCardStyleProps({ artworkAlignmentX: alignmentX });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} className={classNames(classProps.artwork, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

export default CardArtwork;
