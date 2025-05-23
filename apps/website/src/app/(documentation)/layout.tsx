'use client';

import React, { ReactNode } from 'react';
import { Container, Footer } from '@lmc-eu/spirit-web-react';
import useIsPage from '@local/hooks/useIsPage';
import { Header } from '@local/ui/Header';
// import { Cover } from '@local/ui/Cover';
import clsx from 'clsx';

const DocumentationLayout = ({ children }: { children: ReactNode }) => {
  const isComponentsPage = useIsPage('components');

  return (
    <>
      <Header />
      <main>
        {/* <Cover /> */}
        {children}
      </main>
      <Footer
        UNSAFE_className={clsx('bg-secondary mt-1200 mt-tablet-1700 pb-1200 text-center', {
          'hide-from-visual-tests': isComponentsPage,
        })}
      >
        <Container>© Alma Career Oy and its subsidiaries</Container>
      </Footer>
    </>
  );
};

export default DocumentationLayout;
