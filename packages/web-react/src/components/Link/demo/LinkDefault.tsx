import React from 'react';
import Link from '../Link';

const LinkDefault = () => (
  <>
    <Link href="#">Link</Link>

    <Link href="#" color="primary" isUnderlined>
      Primary Underlined Link
    </Link>

    <Link href="#" color="primary" isDisabled>
      Primary Disabled Link
    </Link>

    <Link href="https://www.example.com/" target="_blank" title="Warning">
      ⚠️
    </Link>
  </>
);

export default LinkDefault;
