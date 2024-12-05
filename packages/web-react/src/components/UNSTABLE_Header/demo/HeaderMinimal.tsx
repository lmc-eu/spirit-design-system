import React from 'react';
import { Flex } from '../../Flex';
import { ProductLogo } from '../../ProductLogo';
import { defaultSvgLogo } from '../../ProductLogo/demo/ProductLogoDefault';
import UNSTABLE_Header from '../UNSTABLE_Header';
import UNSTABLE_HeaderLogo from '../UNSTABLE_HeaderLogo';

const HeaderMinimal = () => {
  return (
    <UNSTABLE_Header>
      <Flex alignmentX="center" alignmentY="center">
        <UNSTABLE_HeaderLogo href="#" aria-label="JobBoard homepage">
          <ProductLogo>{defaultSvgLogo}</ProductLogo>
        </UNSTABLE_HeaderLogo>
      </Flex>
    </UNSTABLE_Header>
  );
};

export default HeaderMinimal;
