import React, { ReactNode } from 'react';
import { Header } from '@local/ui/Header';
import { Cover } from '@local/ui/Cover';
import { Container, Footer } from '@lmc-eu/spirit-web-react';

const DocumentationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      <main>
        {/* <Cover /> */}
        {children}
      </main>
      {/* @TODO: hide from visual tests class */}
      <Footer UNSAFE_className="bg-secondary mt-1200 mt-tablet-1700 pb-1200 text-center">
        <Container>© Alma Career Oy and its subsidiaries</Container>
      </Footer>
    </>
  );
};

export default DocumentationLayout;
