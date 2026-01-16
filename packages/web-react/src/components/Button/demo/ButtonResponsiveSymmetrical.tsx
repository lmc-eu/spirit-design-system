import React from 'react';
import { Icon } from '../../Icon';
import { VisuallyHidden } from '../../VisuallyHidden';
import Button from '../Button';

const ButtonResponsiveSymmetrical = () => (
  <>
    <Button isSymmetrical>
      <Icon name="hamburger" />
      <VisuallyHidden>Menu</VisuallyHidden>
    </Button>

    <Button isSymmetrical={{ tablet: true }}>
      <Icon name="hamburger" marginRight={{ mobile: 'space-400', tablet: 'space-0' }} />
      <VisuallyHidden>Menu</VisuallyHidden>
      <span className="d-tablet-none" aria-hidden="true">
        Menu
      </span>
    </Button>

    <Button isSymmetrical={{ desktop: true }}>
      <Icon name="hamburger" marginRight={{ mobile: 'space-400', desktop: 'space-0' }} />
      <VisuallyHidden>Menu</VisuallyHidden>
      <span className="d-desktop-none" aria-hidden="true">
        Menu
      </span>
    </Button>

    <Button isSymmetrical={{ mobile: true, tablet: false }}>
      <Icon name="hamburger" marginRight={{ tablet: 'space-400' }} />
      <VisuallyHidden>Menu</VisuallyHidden>
      <span className="d-none d-tablet-inline" aria-hidden="true">
        Menu
      </span>
    </Button>

    <Button isSymmetrical={{ mobile: true, desktop: false }}>
      <Icon name="hamburger" marginRight={{ desktop: 'space-400' }} />
      <VisuallyHidden>Menu</VisuallyHidden>
      <span className="d-none d-desktop-inline" aria-hidden="true">
        Menu
      </span>
    </Button>

    <Button isSymmetrical={{ tablet: true, desktop: false }}>
      <Icon name="hamburger" marginRight={{ mobile: 'space-400', tablet: 'space-0', desktop: 'space-400' }} />
      <VisuallyHidden>Menu</VisuallyHidden>
      <span className="d-tablet-none d-desktop-inline" aria-hidden="true">
        Menu
      </span>
    </Button>
  </>
);

export default ButtonResponsiveSymmetrical;
