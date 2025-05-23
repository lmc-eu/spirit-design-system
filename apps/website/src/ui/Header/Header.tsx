import { Container, Flex, UNSTABLE_Header, UNSTABLE_HeaderLogo } from '@lmc-eu/spirit-web-react';
import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import useIsPage from '../hooks/useIsPage';
import SpiritLogo from './SpiritLogo';

const Header = () => {
  const isHomePage = useIsPage('/');
  const isComponentsPage = useIsPage('components');

  return (
    <UNSTABLE_Header
      UNSAFE_className={clsx('theme-light-on-brand', { 'hide-from-visual-tests': isComponentsPage })}
      hasBottomDivider={isHomePage}
    >
      <Container isFluid>
        <Flex alignmentX="left" alignmentY="stretch" spacingX="space-1000">
          <UNSTABLE_HeaderLogo elementType={NextLink} href="/" aria-label="Spirit Development Preview">
            <SpiritLogo />
          </UNSTABLE_HeaderLogo>
        </Flex>
      </Container>
    </UNSTABLE_Header>
  );
};

export default Header;
