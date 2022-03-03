import React from 'react';
import { render } from 'react-dom';
import { Button } from '@lmc-eu/spirit-web-react/components/Button';

const Demo = () => (
  <section>
    <h2>Button</h2>
    <Button color="primary" onClick={() => console.log('Primary button clicked!')}>
      Primary button
    </Button>
    <Button color="secondary" onClick={() => console.log('Secondary button clicked!')}>
      Secondary Button
    </Button>
    <Button color="tertiary" onClick={() => console.log('Tertiary button clicked!')}>
      Tertiary button
    </Button>
    <Button color="inverted" onClick={() => console.log('Inverted button clicked!')}>
      Inverted button
    </Button>
    <Button color="danger" onClick={() => console.log('Danger button clicked!')}>
      Danger button
    </Button>
  </section>
);

render(<Demo />, document.getElementById('demo_container'));
