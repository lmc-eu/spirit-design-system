import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { HeaderProps } from '../../../types';
import { Link } from '../../Link';
import { ProductLogo } from '../../ProductLogo';
import JobBoardLogo from '../demo/JobBoardLogo';
import ReadMe from '../README.md';
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

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
    layout: 'fullscreen',
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'transparent'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    isSimple: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    color: 'primary',
    isSimple: false,
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const HeaderWithHooks = (args: HeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);
  const handleUserMenuOpen = () => setUserMenuOpen(true);
  const handleUserMenuClose = () => setUserMenuOpen(false);

  return (
    <>
      <Header {...args}>
        <Link href="/">
          <ProductLogo>
            <JobBoardLogo />
          </ProductLogo>
        </Link>
        <HeaderMobileActions dialogId="header-dialog-example-1" isOpen={isMenuOpen} onOpen={handleMenuOpen} />
        <HeaderDesktopActions aria-label="Main navigation">
          <HeaderNav>
            <HeaderNavItem>
              <HeaderLink href="#" isCurrent aria-current="page">
                Job offers
              </HeaderLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderLink href="#">Part-time jobs</HeaderLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderLink href="#">Inspiration</HeaderLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderLink href="#">Replies</HeaderLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderLink href="#">Employers</HeaderLink>
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
          <HeaderDialogNav>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#" isCurrent>
                Job offers
              </HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Part-time jobs</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Inspiration</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Replies</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Employers</HeaderDialogLink>
            </HeaderDialogNavItem>
          </HeaderDialogNav>
        </HeaderDialogActions>
        <HeaderDialogActions color="secondary" aria-label="Menu">
          <HeaderDialogNav>
            <HeaderDialogNavItem>
              <HeaderDialogText UNSAFE_className="text-tertiary">Marian</HeaderDialogText>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Dashboard</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Profile</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Favourites</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Notifications</HeaderDialogLink>
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
              <HeaderDialogLink href="#">Dashboard</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Profile</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Favourites</HeaderDialogLink>
            </HeaderDialogNavItem>
            <HeaderDialogNavItem>
              <HeaderDialogLink href="#">Notifications</HeaderDialogLink>
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

export const Playground: Story = {
  name: 'Header',
  render: (args) => <HeaderWithHooks {...args} />,
};
