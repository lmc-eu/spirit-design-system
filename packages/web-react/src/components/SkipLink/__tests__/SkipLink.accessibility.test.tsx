import React from 'react';
import { accessibilityTest } from '@local/tests';
import { type SpiritSkipLinkProps } from '../../../types';
import SkipLink from '../SkipLink';

describe('SkipLink accessibility', () => {
  const SkipLinkTest = (props: SpiritSkipLinkProps) => (
    <SkipLink {...props} href="#main-content">
      Skip to main content
    </SkipLink>
  );

  accessibilityTest(SkipLinkTest, 'a');
});
