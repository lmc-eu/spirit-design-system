import React, { useState } from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { HeaderDialogTextProps } from '../../types';
import { Link } from '../Link';
import SpiritLogo from './demo/SpiritLogo';
import ReadMe from './README.md';
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
} from '.';

const meta: Meta<typeof HeaderDialogText> = {
  title: 'Components/Header',
  component: HeaderDialogText,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Marian',
    UNSAFE_className: 'text-primary-inverted-disabled',
  },
};

export default meta;
type Story = StoryObj<typeof HeaderDialogText>;

const HeaderWithHooks = (args: HeaderDialogTextProps) => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);
  const handleUserMenuOpen = () => setUserMenuOpen(true);
  const handleUserMenuClose = () => setUserMenuOpen(false);

  return (
    <>
      <Header color="inverted">
        <Link href="/">
          <SpiritLogo />
        </Link>
        <HeaderMobileActions dialogId="header_dialog_example_1" isOpen={isMenuOpen} onOpen={handleMenuOpen} />
        <HeaderDesktopActions color="primary" aria-label="Main navigation">
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
        <HeaderDesktopActions color="secondary" aria-label="User area">
          <HeaderNav>
            <HeaderNavItem>
              <HeaderDialogButton
                onClick={handleUserMenuOpen}
                aria-controls="header_dialog_example_2"
                aria-expanded={isUserMenuOpen}
              >
                Marian
              </HeaderDialogButton>
            </HeaderNavItem>
          </HeaderNav>
        </HeaderDesktopActions>
      </Header>
      <HeaderDialog id="header_dialog_example_1" aria-label="Menu" isOpen={isMenuOpen} onClose={handleMenuClose}>
        <HeaderDialogCloseButton />
        <HeaderDialogActions color="primary" aria-label="Main navigation">
          <HeaderDialogNav>
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
              <HeaderDialogText {...args} />
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
        id="header_dialog_example_2"
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

export const HeaderDialogTextPlayground: Story = {
  name: 'HeaderDialogText',
  render: (args) => <HeaderWithHooks {...args} />,
};
