import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { HeaderDialogNavProps } from '../../../types';
import { Link } from '../../Link';
import { ProductLogo } from '../../ProductLogo';
import JobBoardLogo from '../demo/JobBoardLogo';
import {
  Header,
  HeaderDesktopActions,
  HeaderDialog,
  HeaderDialogActions,
  HeaderDialogButton,
  HeaderDialogCloseButton,
  HeaderDialogLink,
  HeaderDialogNav,
  HeaderDialogNavItem,
  HeaderDialogText,
  HeaderLink,
  HeaderMobileActions,
  HeaderNav,
  HeaderNavItem,
} from '..';

const meta: Meta<typeof HeaderDialogNav> = {
  title: 'Components/Header',
  component: HeaderDialogNav,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderDialogNav>;

const HeaderWithHooks = (args: HeaderDialogNavProps) => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);
  const handleUserMenuOpen = () => setUserMenuOpen(true);
  const handleUserMenuClose = () => setUserMenuOpen(false);

  return (
    <>
      <Header>
        <Link href="/">
          <ProductLogo>
            <JobBoardLogo />
          </ProductLogo>
        </Link>
        <HeaderMobileActions dialogId="header-dialog-example-1" isOpen={isMenuOpen} onOpen={handleMenuOpen} />
        <HeaderDesktopActions aria-label="Main navigation">
          <HeaderNav>
            <HeaderNavItem>
              <HeaderLink isCurrent aria-current="page">
                Job offers
              </HeaderLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderLink>Part-time jobs</HeaderLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderLink>Inspiration</HeaderLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderLink>Replies</HeaderLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderLink>Employers</HeaderLink>
            </HeaderNavItem>
          </HeaderNav>
        </HeaderDesktopActions>
        <HeaderDesktopActions isAtEnd aria-label="User area">
          <HeaderNav>
            <HeaderNavItem>
              <HeaderDialogButton
                onClick={handleUserMenuOpen}
                aria-controls="header-dialog-example-2"
                aria-expanded={isUserMenuOpen}
              >
                Marian
              </HeaderDialogButton>
            </HeaderNavItem>
          </HeaderNav>
        </HeaderDesktopActions>
      </Header>
      <HeaderDialog id="header-dialog-example-1" aria-label="Menu" isOpen={isMenuOpen} onClose={handleMenuClose}>
        <HeaderDialogCloseButton />
        <HeaderDialogActions color="primary" aria-label="Main navigation">
          <HeaderDialogNav {...args}>
            <HeaderDialogNavItem>
              <HeaderDialogLink isCurrent>Job offers</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Part-time jobs</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Inspiration</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Replies</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Employers</HeaderDialogLink>
            </HeaderDialogNavItem>
          </HeaderDialogNav>
        </HeaderDialogActions>
        <HeaderDialogActions color="secondary" aria-label="Menu">
          <HeaderDialogNav>
            <HeaderDialogNavItem>
              <HeaderDialogText UNSAFE_className="text-tertiary">Marian</HeaderDialogText>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Dashboard</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Profile</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Favourites</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Notifications</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogButton>Sign out</HeaderDialogButton>
            </HeaderDialogNavItem>
          </HeaderDialogNav>
        </HeaderDialogActions>
      </HeaderDialog>
      <HeaderDialog
        id="header-dialog-example-2"
        aria-label="User menu"
        isOpen={isUserMenuOpen}
        onClose={handleUserMenuClose}
      >
        <HeaderDialogCloseButton />
        <HeaderDialogActions color="primary" aria-label="User menu">
          <HeaderDialogNav>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Dashboard</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Profile</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Favourites</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink>Notifications</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogButton>Sign out</HeaderDialogButton>
            </HeaderDialogNavItem>
          </HeaderDialogNav>
        </HeaderDialogActions>
      </HeaderDialog>
    </>
  );
};

export const HeaderDialogNavPlayground: Story = {
  name: 'HeaderDialogNav',
  render: (args) => <HeaderWithHooks {...args} />,
};
