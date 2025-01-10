import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import ActionGroup from '../ActionGroup';

const DefaultLayout = () => {
  return (
    <ActionGroup>
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

export default DefaultLayout;
