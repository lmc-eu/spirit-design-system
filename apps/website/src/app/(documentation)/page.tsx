import {
  Card,
  CardArtwork,
  CardBody,
  CardFooter,
  CardLink,
  CardTitle,
  Container,
  Grid,
  Icon,
  Link,
  Section,
} from '@lmc-eu/spirit-web-react';
import { NextPage } from 'next';
import NextLink from 'next/link';

const Home: NextPage = () => (
  <Container>
    <Section>
      <Grid cols={{ mobile: 1, tablet: 2 }}>
        <Card direction="horizontal" isBoxed>
          <CardArtwork>
            <Icon name="file" />
          </CardArtwork>
          <CardBody>
            <CardTitle isHeading>
              <CardLink elementType={NextLink} href="/components">
                Components
              </CardLink>
            </CardTitle>
            <p>
              Our components are collection of interface elements that can be reused across the Spirit Design System.
            </p>
          </CardBody>
          <CardFooter alignmentX="right">
            <Link elementType={NextLink} href="/components" color="primary">
              See all components
            </Link>
          </CardFooter>
        </Card>
      </Grid>
    </Section>
  </Container>
);

export default Home;
