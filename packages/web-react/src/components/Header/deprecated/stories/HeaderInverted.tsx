import React from 'react';
import Header from '../Header';
import { Link } from '../../../Link';
import SpiritLogo from './SpiritLogo';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <Header id="story-inverted" isInverted>
    <Link href="/Users/tomas.sychra/Projects/Repos/spirit-design-system/static">
      <SpiritLogo />
    </Link>
  </Header>
);

export default Story;
