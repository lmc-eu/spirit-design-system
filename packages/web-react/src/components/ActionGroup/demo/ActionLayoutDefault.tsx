import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import { Flex } from '../../Flex';
import { TextField } from '../../TextField';
import ActionGroup from '../ActionGroup';

const DefaultLayout = () => (
  <Flex direction="vertical" UNSAFE_style={{ maxWidth: '400px' }}>
    <TextField label="Test" id="default-text-field" placeholder="Enter text here" size="large" />
    <ActionGroup direction="horizontal-reversed" alignmentX="space-between">
      <ButtonLink href="#" color="primary">
        Uložit
      </ButtonLink>
      <ButtonLink href="#" color="secondary">
        Zrušit
      </ButtonLink>
    </ActionGroup>
  </Flex>
);

export default DefaultLayout;
