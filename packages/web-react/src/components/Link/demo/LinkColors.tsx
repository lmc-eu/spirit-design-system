import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Link from '../Link';

const LinkColors = () => (
  <>
    <Link href="#" color="primary">
      Primary Link
    </Link>

    <Link href="#" color="secondary">
      Secondary Link
    </Link>

    <DocsBox>
      <Link href="#" color="inverted">
        Inverted Link
      </Link>
    </DocsBox>
  </>
);

export default LinkColors;
