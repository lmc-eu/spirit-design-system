import React from 'react';
import Link from '../Link';

const LinkDefault = () => (
  <>
    <Link href="#">Link</Link>

    <Link href="https://www.example.com/" target="_blank" title="Warning">
      ⚠️ Link with Icon
    </Link>
  </>
);

export default LinkDefault;
