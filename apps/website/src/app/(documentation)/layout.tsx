'use client';

import React, { ReactNode } from 'react';
import { Header } from '@local/ui/Header';
import { Cover } from '@local/ui/Cover';
import { Container, Footer } from '@lmc-eu/spirit-web-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const DocumentationLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      {/* <Header /> */}
      <main>
        {/* <Cover /> */}
        {children}
      </main>
      <Footer
        UNSAFE_className={clsx('bg-secondary mt-1200 mt-tablet-1700 pb-1200 text-center', {
          'hide-from-visual-tests': pathname.includes('components'),
        })}
      >
        <Container>© Alma Career Oy and its subsidiaries</Container>
      </Footer>
    </>
  );
};

export default DocumentationLayout;
