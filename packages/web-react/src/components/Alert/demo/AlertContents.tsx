import React from 'react';

const AlertSuccessContent = () => (
  <>
    We sent you an activation link to email <strong>spirit@lmc.eu</strong>. See{' '}
    <a href="./" className="link-underlined">
      FAQ
    </a>{' '}
    for more info.
  </>
);

const AlertInfoContent = () => (
  <>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
    perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis provident
    unde. Eveniet, iste, molestiae? See{' '}
    <a href="./" className="link-underlined">
      FAQ
    </a>{' '}
    for more info.
  </>
);

const AlertWarningContent = () => (
  <>
    <strong>Warning!</strong> Data update failed due to missing internet connection. See{' '}
    <a href="./" className="link-underlined">
      FAQ
    </a>{' '}
    for more info.
  </>
);

const AlertDangerContent = () => (
  <>
    Data update failed due to missing internet connection. See{' '}
    <a href="./" className="link-underlined">
      FAQ
    </a>{' '}
    for more info.
  </>
);

export { AlertInfoContent, AlertSuccessContent, AlertWarningContent, AlertDangerContent };
