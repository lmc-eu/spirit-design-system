import React, { ReactNode } from 'react';
import { Header } from '@local/ui/Header';
import { Cover } from '@local/ui/Cover';
import { Container, Footer } from '@lmc-eu/spirit-web-react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const DocumentationLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <>
      {/* <Header /> */}
      <main>
        {/* <Cover /> */}
        {children}
      </main>
      <Footer
        UNSAFE_className={clsx('bg-secondary mt-1200 mt-tablet-1700 pb-1200 text-center', {
          'hide-from-visual-tests': router.asPath.includes('components'),
        })}
      >
        <Container>© Alma Career Oy and its subsidiaries</Container>
      </Footer>
    </>
  );
};

export default DocumentationLayout;
