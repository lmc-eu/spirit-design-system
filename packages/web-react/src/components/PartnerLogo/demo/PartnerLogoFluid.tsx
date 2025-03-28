import React from 'react';
import { Box } from '../../Box';
import { Text } from '../../Text';
import PartnerLogo from '../PartnerLogo';
import { logo } from './PartnerLogoDemoFactory';

const PartnerLogoFluid = () => (
  <>
    <Text textColor="primary">
      The PartnerLogo is adjusted to the dimensions of the container in which it is placed and is vertically and
      horizontally aligned.
    </Text>
    <Box UNSAFE_style={{ width: '300px', height: '200px' }} borderStyle="dashed" borderWidth="100">
      <PartnerLogo isFluid>{logo}</PartnerLogo>
    </Box>
  </>
);

export default PartnerLogoFluid;
