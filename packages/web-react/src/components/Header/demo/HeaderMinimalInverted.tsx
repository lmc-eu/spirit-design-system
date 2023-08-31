import React from 'react';
import { Link } from '../../Link';
import { Header } from '..';
import SpiritLogo from './SpiritLogo';

const HeaderMinimalInverted = () => {
  return (
    <Header color="inverted">
      <Link href="/">
        <SpiritLogo />
      </Link>
    </Header>
  );
};

export default HeaderMinimalInverted;
