import React, { useState } from 'react';
import { ComponentStory } from '@storybook/react';
import { Link } from '../../Link';
import { Button } from '../../Button';
import SpiritLogo from './SpiritLogo';
import Header from '../Header';
import HeaderMobileActions from '../HeaderMobileActions';
import HeaderDesktopActions from '../HeaderDesktopActions';
import HeaderNav from '../HeaderNav';
import HeaderNavItem from '../HeaderNavItem';
import HeaderLink from '../HeaderLink';
import HeaderDialog from '../HeaderDialog';
import HeaderDialogCloseButton from '../HeaderDialogCloseButton';
import HeaderDialogActions from '../HeaderDialogActions';
import HeaderDialogNav from '../HeaderDialogNav';
import HeaderDialogNavItem from '../HeaderDialogNavItem';
import HeaderDialogLink from '../HeaderDialogLink';

const Story: ComponentStory<typeof Header> = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header color="inverted">
        <Link href="/">
          <SpiritLogo />
        </Link>
        <HeaderMobileActions dialogId="header_dialog_example" isOpen={isOpen} onOpen={handleOpen} />
        <HeaderDesktopActions color="primary" aria-label="Main navigation">
          <HeaderNav>
            <HeaderNavItem>
              <HeaderLink isCurrent>Job offers</HeaderLink>
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
        <HeaderDesktopActions color="secondary">
          <Button color="primary">Sign in</Button>
          <Button color="inverted">Enterprise</Button>
        </HeaderDesktopActions>
      </Header>
      <HeaderDialog id="header_dialog_example" isOpen={isOpen} onClose={handleClose}>
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
        <HeaderDialogActions color="secondary">
          <Button color="primary">Sign in</Button>
          <Button color="inverted">Enterprise</Button>
        </HeaderDialogActions>
      </HeaderDialog>
    </>
  );
};

export default Story;
