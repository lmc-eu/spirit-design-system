import React from 'react';
import Box from '../Box';

const BoxWithBorder = () => (
  <>
    <fieldset className="mb-0" style={{ border: 0 }}>
      <legend className="mb-500">For demo purposes the box has custom padding</legend>
    </fieldset>
    <Box padding="space-800" borderWidth="100">
      Without radius
    </Box>
    <Box padding="space-800" borderWidth="100" borderRadius="300">
      With custom radius
    </Box>
    <Box padding="space-800" borderWidth="100" borderRadius="full">
      With full radius
    </Box>
    <Box padding="space-800" borderWidth="200" borderRadius="300">
      With thicker border
    </Box>
    <Box padding="space-800" borderWidth="100" borderRadius="300" borderColor="focus">
      With focus color
    </Box>
  </>
);

export default BoxWithBorder;
