import React from 'react';
import { render } from 'react-dom';
import { Button } from '@lmc-eu/spirit-web-react/dist/_esNext/components/Button';

const Demo = () => (
  <>
    <Button
      label="Primary button"
      onClick={() => console.log('Primary button clicked!')}
    />
    <Button
      color="secondary"
      label="Secondary button"
      onClick={() => console.log('Secondary button clicked!')}
    />
    <Button
      color="tertiary"
      label="Tertiary button"
      onClick={() => console.log('Tertiary button clicked!')}
    />
  </>
);

render(
  <Demo />,
  document.getElementById('demo_container'),
);
