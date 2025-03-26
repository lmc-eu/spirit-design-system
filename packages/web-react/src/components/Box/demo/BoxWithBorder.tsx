import React from 'react';
import Box from '../Box';

const BoxWithBorder = () => (
  <>
    <p>For demo purposes, the boxes have custom padding.</p>
    <Box padding="space-800" borderWidth="100">
      With solid border style
    </Box>
    <Box padding="space-800" borderWidth="100" borderStyle="dotted">
      With dotted border style
    </Box>
    <Box padding="space-800" borderWidth="100" borderStyle="dashed">
      With dashed border style
    </Box>
    <Box padding="space-800" borderWidth="200">
      With thicker border
    </Box>
  </>
);

export default BoxWithBorder;
