import React from 'react';
import { Flex } from '../../Flex';
import PartnerLogoDemoFactory from './PartnerLogoDemoFactory';

const PartnerLogoSafeAreaDisabled = () => (
  <Flex spacing="space-900" isWrapping>
    <PartnerLogoDemoFactory hasSafeArea={false} />
  </Flex>
);

export default PartnerLogoSafeAreaDisabled;
