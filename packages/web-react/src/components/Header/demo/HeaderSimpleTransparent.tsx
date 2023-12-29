import React from 'react';
import { Heading } from '../../Heading';
import { Link } from '../../Link';
import { Header } from '..';
import SpiritLogo from './SpiritLogo';

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
      <Header isSimple>
        <Link href="/">
          <SpiritLogo />
        </Link>
      </Header>

      <Heading elementType="div" size="large" marginBottom="space-1200" UNSAFE_className="text-center">
        Example Cover
      </Heading>
    </div>
  );
};

export default HeaderSimpleTransparent;
