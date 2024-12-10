import { Button, Heading } from '@lmc-eu/spirit-web-react';
import { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <Heading elementType="h2" size="large">
      Spirit App Router
    </Heading>
    <Button color="primary" size="large" marginBottom="space-123">
      Hello, World!
    </Button>
  </>
);

export default Home;
