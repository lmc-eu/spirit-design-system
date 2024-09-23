import React from 'react';
import { Container } from '../../Container';
import { Divider } from '../../Divider';
import { Flex } from '../../Flex';
import { Grid } from '../../Grid';
import { Link } from '../../Link';
import { Stack } from '../../Stack';
import { Text } from '../../Text';
import { UNSTABLE_ProductLogo } from '../../UNSTABLE_ProductLogo';
import { defaultSvgLogo } from '../../UNSTABLE_ProductLogo/demo/ProductLogoDefault';
import Footer from '../Footer';
import FooterLinkFactory from './FooterLinkFactory';

const FooterNested = () => {
  return (
    <Footer UNSAFE_className="bg-cover pt-1100 pb-1000">
      <Container>
        {/* Grid with navigation links */}
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 6 }} spacing="space-800">
          {/* Navigation links 1 */}
          <nav aria-labelledby="footer-nested-links-navigation-section-1">
            <Text elementType="h3" size="large" emphasis="bold" marginBottom="space-600">
              <Link href="https://www.example.com" id="footer-nested-links-navigation-section-1">
                Section headline
              </Link>
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={3} label="Link" />
            </Stack>
          </nav>

          {/* Navigation links 2 */}
          <nav aria-labelledby="footer-nested-links-navigation-section-2">
            <Text elementType="h3" size="large" emphasis="bold" marginBottom="space-600">
              <Link href="https://www.example.com" id="footer-nested-links-navigation-section-2">
                Section headline
              </Link>
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={4} label="Link" />
            </Stack>
          </nav>

          {/* Navigation links 3 */}
          <nav aria-labelledby="footer-nested-links-navigation-section-3">
            <Text elementType="h3" size="large" emphasis="bold" marginBottom="space-600">
              <Link href="https://www.example.com" id="footer-nested-links-navigation-section-3">
                Section headline
              </Link>
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={6} label="Link" />
            </Stack>
          </nav>

          {/* Navigation links 4 with nested */}
          <div>
            <nav aria-labelledby="footer-nested-links-navigation-section-4" className="mb-800">
              <Text elementType="h3" size="large" emphasis="bold" marginBottom="space-600">
                <Link href="https://www.example.com" id="footer-nested-links-navigation-section-4">
                  Section headline
                </Link>
              </Text>
              <Stack elementType="ul" spacing="space-500" hasSpacing>
                <FooterLinkFactory items={3} label="Link" />
              </Stack>
            </nav>
            <nav aria-labelledby="footer-nested-links-navigation-section-1">
              <Text elementType="h3" size="large" emphasis="bold" marginBottom="space-600">
                <Link href="https://www.example.com" id="footer-nested-links-navigation-section-1">
                  Section headline
                </Link>
              </Text>
              <Stack elementType="ul" spacing="space-500" hasSpacing>
                <FooterLinkFactory items={2} label="Link" />
              </Stack>
            </nav>
          </div>

          {/* Navigation links 5 */}
          <nav aria-labelledby="footer-nested-links-navigation-section-5">
            <Text elementType="h3" size="large" emphasis="bold" marginBottom="space-600">
              <Link href="https://www.example.com" id="footer-nested-links-navigation-section-5">
                Section headline
              </Link>
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={3} label="Link" />
            </Stack>
          </nav>

          {/* Navigation links 6 */}
          <nav aria-labelledby="footer-nested-links-navigation-section-6">
            <Text elementType="h3" size="large" emphasis="bold" marginBottom="space-600">
              <Link href="https://www.example.com" id="footer-nested-links-navigation-section-6">
                Section headline
              </Link>
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={4} label="Link" />
            </Stack>
          </nav>
        </Grid>

        {/* Divider */}
        <Divider marginY="space-900" />

        {/* Product logo */}
        <div className="text-center">
          <Link href="https://www.example.com">
            <UNSTABLE_ProductLogo>{defaultSvgLogo}</UNSTABLE_ProductLogo>
          </Link>
        </div>

        {/* Divider */}
        <Divider marginY="space-900" />

        {/* Flex with secondary links */}
        <nav aria-label="Secondary links">
          <Flex
            elementType="ul"
            direction={{ mobile: 'column', tablet: 'row' }}
            alignmentX={{ mobile: 'stretch', tablet: 'center' }}
            spacing={{ mobile: 'space-500', tablet: 'space-700' }}
            isWrapping
          >
            <li>
              <Link href="https://www.example.com" color="secondary">
                Legal notice
              </Link>
            </li>
            <li>
              <Link href="https://www.example.com" color="secondary">
                Terms of service
              </Link>
            </li>
            <li>
              <Link href="https://www.example.com" color="secondary">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="https://www.example.com" color="secondary">
                Manage cookies
              </Link>
            </li>
          </Flex>
        </nav>
      </Container>
    </Footer>
  );
};

export default FooterNested;
