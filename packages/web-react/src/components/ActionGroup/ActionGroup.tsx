'use client';

import React, { type ReactElement } from 'react';
import { AlignmentXExtended, DirectionExtended } from '../../constants';
import { type SpiritActionGroupProps } from '../../types';
import { Flex } from '../Flex';

const defaultProps: Partial<SpiritActionGroupProps> = {
  alignmentX: {
    mobile: AlignmentXExtended.STRETCH,
    tablet: AlignmentXExtended.LEFT,
  },
  direction: {
    mobile: DirectionExtended.VERTICAL,
    tablet: DirectionExtended.HORIZONTAL,
  },
};

const ActionGroup = (props: SpiritActionGroupProps): ReactElement => {
  const { children, ...restProps } = props;
  const propsWithDefaults = { ...defaultProps, ...restProps };

  return <Flex {...propsWithDefaults}>{children}</Flex>;
};

ActionGroup.spiritComponent = 'ActionGroup';

export default ActionGroup;
