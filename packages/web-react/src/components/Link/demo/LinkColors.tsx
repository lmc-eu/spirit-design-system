import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Link from '../Link';

const LinkColors = () => (
  <>
    <Link href="#" color="primary">
      Link primary
    </Link>

    <Link href="#" color="secondary">
      Link secondary
    </Link>

    <DocsBox>
      <Link href="#" color="inverted">
        Link inverted
      </Link>
    </DocsBox>
  </>
);

export default LinkColors;
