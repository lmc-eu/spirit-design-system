import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tag from '../Tag';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';

describe('Tag', () => {
  classNamePrefixProviderTest(Tag, 'Tag');

  it('should have default classname', () => {
    const dom = render(<Tag />);

    expect(dom.container.firstChild).toHaveClass('Tag--default');
  });
});
