import React from 'react';
import { ButtonLink } from '../../ButtonLink';
import { Container } from '../../Container';
import { Divider } from '../../Divider';
import { Flex } from '../../Flex';
import { Grid } from '../../Grid';
import { Icon } from '../../Icon';
import { Link } from '../../Link';
import { Select } from '../../Select';
import { Stack } from '../../Stack';
import { Text } from '../../Text';
import { UNSTABLE_ProductLogo } from '../../UNSTABLE_ProductLogo';
import { defaultSvgLogo } from '../../UNSTABLE_ProductLogo/demo/ProductLogoDefault';
import { VisuallyHidden } from '../../VisuallyHidden';
import Footer from '../Footer';
import FooterLinkFactory from './FooterLinkFactory';

const FooterDefault = () => {
  return (
    <Footer>
      <Container>
        {/* Grid with navigation links */}
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 6 }} spacing="space-800">
          {/* Navigation links 1 */}
          <nav aria-labelledby="footer-navigation-section-1">
            <Text
              id="footer-navigation-section-1"
              elementType="h3"
              size="large"
              emphasis="bold"
              marginBottom="space-600"
            >
              Section headline
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={3} label="Link" />
            </Stack>
          </nav>

          {/* Navigation links 2 */}
          <nav aria-labelledby="footer-navigation-section-2">
            <Text
              id="footer-navigation-section-2"
              elementType="h3"
              size="large"
              emphasis="bold"
              marginBottom="space-600"
            >
              Section headline
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={4} label="Link" />
            </Stack>
          </nav>

          {/* Navigation links 3 */}
          <nav aria-labelledby="footer-navigation-section-3">
            <Text
              id="footer-navigation-section-3"
              elementType="h3"
              size="large"
              emphasis="bold"
              marginBottom="space-600"
            >
              Section headline
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={6} label="Link" />
            </Stack>
          </nav>

          {/* Navigation links 4 */}
          <nav aria-labelledby="footer-navigation-section-4">
            <Text
              id="footer-navigation-section-4"
              elementType="h3"
              size="large"
              emphasis="bold"
              marginBottom="space-600"
            >
              Section headline
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={3} label="Link" />
            </Stack>
          </nav>

          {/* Navigation links 5 */}
          <nav aria-labelledby="footer-navigation-section-5">
            <Text
              id="footer-navigation-section-5"
              elementType="h3"
              size="large"
              emphasis="bold"
              marginBottom="space-600"
            >
              Section headline
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={3} label="Link" />
            </Stack>
          </nav>

          {/* Navigation links 6 */}
          <nav aria-labelledby="footer-navigation-section-6">
            <Text
              id="footer-navigation-section-4"
              elementType="h3"
              size="large"
              emphasis="bold"
              marginBottom="space-600"
            >
              Section headline
            </Text>
            <Stack elementType="ul" spacing="space-500" hasSpacing>
              <FooterLinkFactory items={4} label="Link" />
            </Stack>
          </nav>
        </Grid>

        {/* Divider */}
        <Divider marginY="space-900" />

        {/* Grid with product logo, social media links and language switch */}
        <Grid
          cols={{ mobile: 1, desktop: 3 }}
          alignmentX={{ mobile: 'center', desktop: 'stretch' }}
          alignmentY="center"
          spacing="space-900"
        >
          {/* Product logo */}
          <div className="text-desktop-left">
            <Link href="https://www.example.com">
              <UNSTABLE_ProductLogo>{defaultSvgLogo}</UNSTABLE_ProductLogo>
            </Link>
          </div>

          {/* Flex with social media links */}
          <Flex elementType="ul" alignmentX="center" alignmentY="center">
            <li>
              <ButtonLink size="medium" color="secondary" isSquare>
                <VisuallyHidden>Facebook</VisuallyHidden>
                <Icon name="logo-facebook" />
              </ButtonLink>
            </li>
            <li>
              <ButtonLink size="medium" color="secondary" isSquare>
                <VisuallyHidden>X</VisuallyHidden>
                <Icon name="logo-x" />
              </ButtonLink>
            </li>
            <li>
              <ButtonLink size="medium" color="secondary" isSquare>
                <VisuallyHidden>YouTube</VisuallyHidden>
                <Icon name="logo-youtube" />
              </ButtonLink>
            </li>
            <li>
              <ButtonLink size="medium" color="secondary" isSquare>
                <VisuallyHidden>Google</VisuallyHidden>
                <Icon name="logo-google" />
              </ButtonLink>
            </li>
            <li>
              <ButtonLink size="medium" color="secondary" isSquare>
                <VisuallyHidden>LinkedIn</VisuallyHidden>
                <Icon name="logo-linkedin" />
              </ButtonLink>
            </li>
          </Flex>

          {/* Language switch */}
          <div className="text-desktop-right">
            <Select id="select-language" name="selectLanguage" label="Language" isLabelHidden>
              <option value="en">English</option>
              <option value="cs">Čeština</option>
            </Select>
          </div>
        </Grid>

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

export default FooterDefault;
