import React from 'react';
import Box from '../Box';

const BoxWithCustomPadding = () => (
  <>
    <Box elementType="fieldset" marginBottom="space-500" borderWidth="0">
      <legend>For demo purposes the box is bordered</legend>
    </Box>
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
    <Box
      paddingX={{ mobile: 'space-400', tablet: 'space-800', desktop: 'space-1200' }}
      paddingY={{ mobile: 'space-200', tablet: 'space-400', desktop: 'space-600' }}
      borderWidth="100"
    >
      With responsive padding
    </Box>
  </>
);

export default BoxWithCustomPadding;
