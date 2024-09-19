import React from 'react';
import { Link } from '../../Link';
import { ProductLogo } from '../../ProductLogo';
import { Header } from '..';
import JobBoardLogo from './JobBoardLogo';

const HeaderSimple = () => {
  return (
    <Header isSimple>
      <Link href="/">
        <ProductLogo>
          <JobBoardLogo />
        </ProductLogo>
      </Link>
    </Header>
  );
};

export default HeaderSimple;
