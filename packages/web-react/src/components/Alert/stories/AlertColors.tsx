// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import Alert from '../Alert';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <IconsProvider value={icons}>
    <Alert color="success">This is a success alert — check it out!</Alert>
    <div className="mb-500" />
    <Alert color="informative">This is an informative alert — check it out!</Alert>
    <div className="mb-500" />
    <Alert color="warning">This is a warning alert — check it out!</Alert>
    <div className="mb-500" />
    <Alert color="danger">This is a danger alert — check it out!</Alert>
  </IconsProvider>
);

export default Story;
