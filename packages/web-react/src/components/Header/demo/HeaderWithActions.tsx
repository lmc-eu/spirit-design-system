import React, { useState } from 'react';
import { Button } from '../../Button';
import { Link } from '../../Link';
import { ProductLogo } from '../../ProductLogo';
import {
  Header,
  HeaderDesktopActions,
  HeaderDialog,
  HeaderDialogActions,
  HeaderDialogCloseButton,
  HeaderDialogLink,
  HeaderDialogNav,
  HeaderDialogNavItem,
  HeaderLink,
  HeaderMobileActions,
  HeaderNav,
  HeaderNavItem,
} from '..';
import JobBoardLogo from './JobBoardLogo';

const HeaderWithActions = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header>
        <Link href="/">
          <ProductLogo>
            <JobBoardLogo />
          </ProductLogo>
        </Link>
        <HeaderMobileActions dialogId="header-dialog-example" isOpen={isOpen} onOpen={handleOpen} />
        <HeaderDesktopActions aria-label="Main navigation">
          <HeaderNav>
            <HeaderNavItem>
              <HeaderLink href="#" isCurrent>
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
        <HeaderDesktopActions isAtEnd>
          <Button color="primary">Sign in</Button>
          <Button color="secondary">Enterprise</Button>
        </HeaderDesktopActions>
      </Header>
      <HeaderDialog id="header-dialog-example" isOpen={isOpen} onClose={handleClose}>
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
        <HeaderDialogActions color="secondary">
          <Button color="primary">Sign in</Button>
          <Button color="secondary">Enterprise</Button>
        </HeaderDialogActions>
      </HeaderDialog>
    </>
  );
};

export default HeaderWithActions;
