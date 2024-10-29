// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Heading, Link, Text } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <Heading elementType="h1">
      <Link hasVisitedStyleAllowed>Test Link</Link>
    </Heading>
    <Heading elementType="h1">
      <Link hasVisitedStyleAllowed>Test Link 1</Link>
      <Link hasVisitedStyleAllowed>Test Link 2</Link>
    </Heading>
    <Heading elementType="h1">
      <Link hasVisitedStyleAllowed>Test Link 1</Link>
      <Link hasVisitedStyleAllowed>Test Link 2</Link>
    </Heading>
    <Text>
      <Link>Test Link</Link>
    </Text>
    <Heading elementType="h1">
      <div>
        <Link hasVisitedStyleAllowed>Test Link 1</Link>
        <Link hasVisitedStyleAllowed>Test Link 2</Link>
      </div>
    </Heading>
    <Heading elementType="h1">
      <Link hasVisitedStyleAllowed={false}>Test Link</Link>
    </Heading>
  </>
);
