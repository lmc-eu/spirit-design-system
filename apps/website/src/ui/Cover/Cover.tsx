import { Button, Container, Flex, Heading, Section } from '@lmc-eu/spirit-web-react';
import NextLink from 'next/link';
import React from 'react';

const Cover = () => {
  return (
    <Section
      paddingY={{ tablet: 'space-1700', mobile: 'space-1200' }}
      textAlignment="center"
      backgroundColor="primary"
      color="primary"
      UNSAFE_className="theme-light-on-brand"
    >
      <Container>
        <Heading elementType="h1" size="xlarge" emphasis="bold">
          Spirit Design System
        </Heading>
        <Heading elementType="h2" size="small" emphasis="regular" textColor="secondary" UNSAFE_className="mb-1000">
          Development Preview
        </Heading>

        <Flex direction="horizontal" alignmentX="center" alignmentY="center">
          <Button elementType={NextLink} color="primary" size="large" href="https://spirit.supernova-docs.io/spirit/">
            Docs
          </Button>
          <Button
            elementType={NextLink}
            color="secondary"
            size="large"
            href="https://github.com/lmc-eu/spirit-design-system/"
          >
            GitHub
          </Button>
        </Flex>
      </Container>
    </Section>
  );
};

export default Cover;
