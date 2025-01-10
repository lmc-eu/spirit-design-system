import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import ActionGroup from '../ActionGroup';

const HorizontalReversedLayout = () => {
  return (
    <ActionGroup
      direction={{ mobile: 'vertical', tablet: 'horizontal-reversed' }}
      alignmentX={{ mobile: 'stretch', tablet: 'right' }}
    >
      <ButtonLink href="#" color="primary">
        Primary Action
      </ButtonLink>
      <ButtonLink href="#" color="secondary">
        Secondary Action
      </ButtonLink>
      <ButtonLink href="#" color="tertiary">
        Tertiary Action
      </ButtonLink>
    </ActionGroup>
  );
};

export default HorizontalReversedLayout;
