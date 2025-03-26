import React from 'react';
import Box from '../Box';

const BoxWithAll = () => (
  <>
    <p>For demo purposes, the boxes have custom padding.</p>
    <Box padding="space-800" backgroundColor="primary" borderWidth="100">
      With primary background, solid border and no radius
    </Box>
    <Box padding="space-800" backgroundColor="secondary" borderRadius="300" borderStyle="dashed" borderWidth="200">
      With primary background, custom radius, dashed thicker border
    </Box>
    <Box
      padding="space-800"
      backgroundColor="tertiary"
      borderRadius="full"
      borderStyle="dotted"
      borderWidth="200"
      borderColor="basic"
    >
      With primary background, full radius, dotted thicker border
    </Box>
  </>
);

export default BoxWithAll;
