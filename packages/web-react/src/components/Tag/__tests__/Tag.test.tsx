import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tag from '../Tag';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('Tag', () => {
  classNamePrefixProviderTest(Tag, 'Tag');

  stylePropsTest(Tag);

  restPropsTest(Tag, 'span');

  it('should have default classname', () => {
    const dom = render(<Tag />);

    expect(dom.container.firstChild).toHaveClass('Tag--default');
  });
});
