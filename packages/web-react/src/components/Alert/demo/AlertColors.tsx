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
    <Alert color="success" UNSAFE_className="mb-600">
      We sent you an activation link to email <strong>spirit@lmc.eu</strong>. See{' '}
      <a href="./" className="link-underlined">
        FAQ
      </a>{' '}
      for more info.
    </Alert>

    <Alert color="informative" UNSAFE_className="mb-600">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
      perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis provident
      unde. Eveniet, iste, molestiae? See{' '}
      <a href="./" className="link-underlined">
        FAQ
      </a>{' '}
      for more info.
    </Alert>

    <Alert color="warning" UNSAFE_className="mb-600">
      <strong>Warning!</strong> Data update failed due to missing internet connection. See{' '}
      <a href="./" className="link-underlined">
        FAQ
      </a>{' '}
      for more info.
    </Alert>

    <Alert color="danger" UNSAFE_className="mb-600">
      Data update failed due to missing internet connection. See{' '}
      <a href="./" className="link-underlined">
        FAQ
      </a>{' '}
      for more info.
    </Alert>
  </IconsProvider>
);

export default Story;
