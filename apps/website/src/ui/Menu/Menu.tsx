import { Navigation, NavigationAction, NavigationItem } from '@lmc-eu/spirit-web-react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Menu = () => {
  const currentPage = usePathname();

  return (
    <Navigation aria-label="Main Navigation" UNSAFE_className="d-none d-desktop-flex">
      <NavigationItem>
        <NavigationAction
          elementType={NextLink}
          variant="pill"
          href="/components"
          aria-current="page"
          isSelected={currentPage.includes('components')}
        >
          Components
        </NavigationAction>
      </NavigationItem>
    </Navigation>
  );
};

export default Menu;
