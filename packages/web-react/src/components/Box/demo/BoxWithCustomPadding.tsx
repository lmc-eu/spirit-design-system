import React from 'react';
import Box from '../Box';

const BoxWithCustomPadding = () => (
  <>
    <fieldset className="mb-0" style={{ border: 0 }}>
      <legend className="mb-500">For demo purposes the box is bordered</legend>
    </fieldset>
    <Box padding="space-800" borderWidth="100">
      With custom padding
    </Box>
    <Box paddingX="space-800" paddingY="space-400" borderWidth="100">
      With custom vertical and horizontal padding
    </Box>
    <Box
      paddingTop="space-200"
      paddingBottom="space-800"
      paddingLeft="space-600"
      paddingRight="space-1200"
      borderWidth="100"
    >
      With custom padding for each direction
    </Box>
    <Box paddingLeft={{ mobile: 'space-600', tablet: 'space-800', desktop: 'space-1000' }} borderWidth="100">
      With responsive padding
    </Box>
  </>
);

export default BoxWithCustomPadding;
