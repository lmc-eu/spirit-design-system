import React from 'react';
import Button from '../Button';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Button color="primary" size="medium">
      Medium button
    </Button>
    <span className="mr-500" />
    <Button color="primary" size="large">
      Large button
    </Button>
    <span className="mr-500" />
    <div className="docs-Box">
      <Button color="inverted" size="medium">
        Medium inverted button
      </Button>
      <span className="mr-500" />
      <Button color="inverted" size="large">
        Large inverted button
      </Button>
    </div>
  </>
);

export default Story;
