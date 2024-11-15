import React from 'react';
import Link from '../Link';

const LinkDefault = () => (
  <>
    <Link href="https://www.example.com/">Link</Link>

    <Link href="https://www.example.com/" target="_blank" title="Warning">
      ⚠️ Link with Icon
    </Link>

    <Link elementType="button">Button</Link>
  </>
);

export default LinkDefault;
