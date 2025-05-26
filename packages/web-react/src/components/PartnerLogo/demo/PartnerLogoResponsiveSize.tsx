import React from 'react';
import { Box } from '../../Box';
import { Flex } from '../../Flex';
import PartnerLogo from '../PartnerLogo';
import { logo } from './PartnerLogoDemoFactory';

const PartnerLogoResponsiveSize = () => (
  <Flex spacing="space-900" isWrapping>
    <Box backgroundColor="secondary" padding="space-1200">
      <PartnerLogo hasSafeArea={false} size={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}>
        {logo}
      </PartnerLogo>
    </Box>
  </Flex>
);

export default PartnerLogoResponsiveSize;
