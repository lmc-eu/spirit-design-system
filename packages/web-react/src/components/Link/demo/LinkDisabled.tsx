import React from 'react';
import Link from '../Link';

const LinkDisabled = () => (
  <>
    <Link href="#" color="primary" isDisabled>
      Primary Disabled Link
    </Link>

    <Link href="#" color="secondary" isDisabled>
      Secondary Disabled Link
    </Link>

    <Link href="#" color="tertiary" isDisabled>
      Tertiary Disabled Link
    </Link>
  </>
);

export default LinkDisabled;
