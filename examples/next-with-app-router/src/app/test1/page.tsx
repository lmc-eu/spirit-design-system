import React from 'react';
import { Container, Heading, Text as SpiritText } from '@lmc-eu/spirit-web-react';
import TestComponent from './components/TestComponent';
import OutsideComponent from './components/OutsideComponent';

const page = () => {
  return (
    <Container marginTop="space-1000" marginBottom="space-1000">
      <Heading elementType="h1" size="medium" marginBottom="space-1000">
        Test component 1
      </Heading>

      <Heading elementType="h2" size="small" marginBottom="space-1000">
        Should work
      </Heading>

      {/* TESTING ⬇ */}
      <>
        <TestComponent UNSAFE_className="test" UNSAFE_style={{ color: 'green' }}>
          Spirit Text component without elementType
        </TestComponent>

        <TestComponent elementType="p" UNSAFE_className="test" UNSAFE_style={{ color: 'green' }}>
          HTML element "p" with UNSAFE class and style
        </TestComponent>

        <TestComponent elementType={SpiritText} UNSAFE_className="test" UNSAFE_style={{ color: 'green' }}>
          Spirit Text component with UNSAFE class and style
        </TestComponent>

        <TestComponent elementType={OutsideComponent} className="test" style={{ color: 'green' }}>
          Random component with class and style
        </TestComponent>
      </>
      {/* TESTING ⬆ */}

      <Heading elementType="h2" size="small" marginBottom="space-1000" marginTop="space-1000">
        Should not work
      </Heading>

      {/* TESTING ⬇ */}
      <>
        {/* This will not be working - Spirit component accepts only UNSAFE style props */}
        <TestComponent elementType={SpiritText} className="test" style={{ color: 'green' }}>
          Spirit Text component with class and style
        </TestComponent>

        {/* This will not be working - Random component doesn't know what UNSAFE style props are */}
        <TestComponent elementType={OutsideComponent} UNSAFE_className="test" UNSAFE_style={{ color: 'green' }}>
          Random component with UNSAFE class and style
        </TestComponent>
      </>
      {/* TESTING ⬆ */}
    </Container>
  );
};

export default page;
