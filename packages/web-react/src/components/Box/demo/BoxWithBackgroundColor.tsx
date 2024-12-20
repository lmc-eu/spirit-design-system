import React from 'react';
import Box from '../Box';

const BoxWithBackgroundColor = () => (
  <>
    <fieldset className="mb-0" style={{ border: 0 }}>
      <legend className="mb-500">For demo purposes the box is bordered</legend>
    </fieldset>
    <Box padding="space-800" borderWidth="100">
      Primary Background
    </Box>
    <Box padding="space-800" borderWidth="100" backgroundColor="secondary">
      Primary Background
    </Box>
    <Box padding="space-800" borderWidth="100" backgroundColor="tertiary">
      Primary Background
    </Box>
  </>
);

export default BoxWithBackgroundColor;
