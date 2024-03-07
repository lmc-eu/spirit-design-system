import React from 'react';
import { Button } from '../../src/components/Button';

const testButton = () => {
  // should be transformed from buttonLabel to buttonText
  // original: <Button id="test" buttonLabel="test" />
  return <Button id="test" buttonLabel="test" />;
};

export default testButton;
