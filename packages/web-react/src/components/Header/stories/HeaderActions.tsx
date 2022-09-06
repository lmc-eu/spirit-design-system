// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import { ButtonLink } from '../../Button';
import { Link } from '../../Link';
import Header from '../Header';
import NavbarActions from '../HeaderActions';
import Nav from '../Nav';
import Navbar from '../Navbar';
import NavbarClose from '../NavbarClose';
import NavbarToggler from '../NavbarToggler';
import NavItem from '../NavItem';
import NavLink from '../NavLink';
import SpiritLogo from './SpiritLogo';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <IconsProvider value={icons}>
    <Header id="story-actions" isInverted>
      <Link href="/">
        <SpiritLogo />
      </Link>
      <NavbarToggler />
      <Navbar variant="bar">
        <NavbarClose />
        <NavbarActions color="primary">
          <Nav>
            <NavItem>
              <NavLink href="/" isCurrent>
                Job Offers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Internship</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Inspiration</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Job applications</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Employers</NavLink>
            </NavItem>
          </Nav>
        </NavbarActions>
        <NavbarActions color="secondary">
          <ButtonLink color="primary" href="/">
            Login
          </ButtonLink>
          <ButtonLink color="inverted" href="/">
            Login For Employers
          </ButtonLink>
        </NavbarActions>
      </Navbar>
    </Header>
  </IconsProvider>
);

export default Story;
