// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import Spinner from '../Spinner';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <IconsProvider value={icons}>
    <div>
      <Spinner />
    </div>
    <div>
      <Spinner color="primary" />
    </div>
    <div>
      <Spinner color="secondary" />
    </div>
    <div className="docs-Box">
      <div>
        <Spinner color="primary-inverted" />
      </div>
      <div>
        <Spinner color="secondary-inverted" />
      </div>
    </div>
  </IconsProvider>
);

export default Story;
