// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import { Icon } from '../../Icon';
import Button from '../Button';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <IconsProvider value={icons}>
    <Button color="primary" isSquare>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="secondary" isSquare>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="tertiary" isSquare>
      <Icon name="hamburger" />
    </Button>
    <div className="docs-Box my-500">
      <Button color="inverted" isSquare>
        <Icon name="hamburger" />
      </Button>
    </div>
    <Button color="success" isSquare>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="informative" isSquare>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="warning" isSquare>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="danger" isSquare>
      <Icon name="hamburger" />
    </Button>
  </IconsProvider>
);

export default Story;
