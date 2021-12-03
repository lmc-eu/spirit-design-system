import React from 'react';
import { render } from 'react-dom';
import { Button } from '@lmc-eu/spirit-web-react/components/Button';

const Demo = () => (
  <section>
    <h2>Button</h2>
    <Button
      color="primary"
      label="Primary button"
      onClick={() => console.log('Primary button clicked!')}
      type="button"
    />
    <Button
      color="secondary"
      label="Secondary button"
      onClick={() => console.log('Secondary button clicked!')}
      type="button"
    />
    <Button
      color="tertiary"
      label="Tertiary button"
      onClick={() => console.log('Tertiary button clicked!')}
      type="button"
    />
  </section>
);

render(
  <Demo />,
  document.getElementById('demo_container'),
);
