import React from 'react';
import { Link } from '../../Link';
import { Header } from '..';
import SpiritLogo from './SpiritLogo';

const HeaderSimpleInverted = () => {
  return (
    <Header color="inverted" isSimple>
      <Link href="/">
        <SpiritLogo />
      </Link>
    </Header>
  );
};

export default HeaderSimpleInverted;
