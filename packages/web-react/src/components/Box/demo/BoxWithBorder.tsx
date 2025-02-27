import React from 'react';
import Box from '../Box';

const BoxWithBorder = () => (
  <>
    <p>For demo purposes, the boxes have custom padding.</p>
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
    <Box padding="space-800" borderWidth="100" borderStyle="dashed">
      With dashed border style
    </Box>
  </>
);

export default BoxWithBorder;
