'use client';

import { Container, Footer } from '@lmc-eu/spirit-web-react';
import ComponentCover from '@local/features/components/ui/ComponentCover';
import useIsPage from '@local/hooks/useIsPage';
import clsx from 'clsx';
import { ReactNode } from 'react';

const DocumentationLayout = ({ children }: { children: ReactNode }) => {
  const isComponentsPage = useIsPage('components');

  return (
    <>
      <ComponentCover />
      <main className="py-1100 pt-tablet-1600">{children}</main>
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
