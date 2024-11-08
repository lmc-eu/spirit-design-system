import React from 'react';
import { ButtonLink } from '../../Button';
import UNSTABLE_ActionLayout from '../UNSTABLE_ActionLayout';

const ActionLayoutDefault = () => (
  <UNSTABLE_ActionLayout>
    <ButtonLink color="primary" href="#">
      Primary Action
    </ButtonLink>
    <ButtonLink color="secondary" href="#">
      Secondary Action
    </ButtonLink>
  </UNSTABLE_ActionLayout>
);

export default ActionLayoutDefault;
