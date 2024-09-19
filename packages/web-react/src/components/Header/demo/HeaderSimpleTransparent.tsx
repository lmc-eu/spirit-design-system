import React from 'react';
import { Heading } from '../../Heading';
import { Link } from '../../Link';
import { ProductLogo } from '../../ProductLogo';
import { Header } from '..';
import JobBoardLogoInverted from './JobBoardLogoInverted';

const HeaderSimpleTransparent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '300px',
        color: 'white',
        background: 'linear-gradient(121.59deg, #073256 0%, #185C95 100%)',
      }}
    >
      <Header color="transparent" isSimple>
        <Link href="/">
          <ProductLogo>
            <JobBoardLogoInverted />
          </ProductLogo>
        </Link>
      </Header>

      <Heading elementType="div" size="large" marginBottom="space-1200" UNSAFE_className="text-center">
        Example Cover
      </Heading>
    </div>
  );
};

export default HeaderSimpleTransparent;
