import React from 'react';
import { Container } from '../../Container';
import { Flex } from '../../Flex';
import { ProductLogo } from '../../ProductLogo';
import { defaultSvgLogo } from '../../ProductLogo/demo/ProductLogoDefault';
import UNSTABLE_Header from '../UNSTABLE_Header';
import UNSTABLE_HeaderLogo from '../UNSTABLE_HeaderLogo';

const HeaderDefault = () => {
  return (
    <UNSTABLE_Header>
      <Container>
        <Flex alignmentX="left" alignmentY="center">
          <UNSTABLE_HeaderLogo href="#" aria-label="JobBoard homepage">
            <ProductLogo>{defaultSvgLogo}</ProductLogo>
          </UNSTABLE_HeaderLogo>
        </Flex>
      </Container>
    </UNSTABLE_Header>
  );
};
export default HeaderDefault;
