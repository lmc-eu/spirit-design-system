import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Button, Heading, Text } from '@lmc-eu/spirit-web-react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Avatar } from '@lmc-eu/spirit-web-react/components/Avatar';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Flex } from '@lmc-eu/spirit-web-react/src';

export const MyComponent = () => (
  <>
    <Button>Click me</Button>
    <Heading elementType="h1">Title</Heading>
    <Text>Some text</Text>
    <Avatar size="small">AB</Avatar>
    <Flex>Content</Flex>
  </>
);
