import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Link from '../Link';

const LinkDisabled = () => (
  <>
    <Link href="#" color="primary" isDisabled>
      Primary Disabled Link
    </Link>

    <Link href="#" color="secondary" isDisabled>
      Secondary Disabled Link
    </Link>

    <DocsBox>
      <Link href="#" color="inverted" isDisabled>
        Inverted Disabled Link
      </Link>
    </DocsBox>
  </>
);

export default LinkDisabled;
