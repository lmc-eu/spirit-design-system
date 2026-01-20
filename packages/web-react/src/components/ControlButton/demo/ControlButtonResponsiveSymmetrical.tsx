import React from 'react';
import { Icon } from '../../Icon';
import ControlButton from '../ControlButton';

const ControlButtonResponsiveSymmetrical = () => (
  <>
    <ControlButton isSymmetrical aria-label="Close">
      <Icon name="close" />
    </ControlButton>

    <ControlButton isSymmetrical={{ tablet: true }} aria-label="Close">
      <Icon name="close" />
    </ControlButton>

    <ControlButton isSymmetrical={{ desktop: true }} aria-label="Close">
      <Icon name="close" />
    </ControlButton>

    <ControlButton isSymmetrical={{ mobile: true, tablet: false }} aria-label="Close">
      <Icon name="close" />
    </ControlButton>

    <ControlButton isSymmetrical={{ mobile: true, desktop: false }} aria-label="Close">
      <Icon name="close" />
    </ControlButton>

    <ControlButton isSymmetrical={{ tablet: true, desktop: false }} aria-label="Close">
      <Icon name="close" />
    </ControlButton>
  </>
);

export default ControlButtonResponsiveSymmetrical;
