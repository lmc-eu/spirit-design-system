import { Container, Footer } from '@lmc-eu/spirit-web-react';
import { Cover } from '@local/ui/Cover';
import React, { ReactNode } from 'react';

const HomepageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Cover />
      <main className="py-1100 pt-tablet-1600">{children}</main>
      <Footer UNSAFE_className="bg-secondary mt-1200 mt-tablet-1700 pb-1200 text-center">
        <Container>© Alma Career Oy and its subsidiaries</Container>
      </Footer>
    </>
  );
};

export default HomepageLayout;
