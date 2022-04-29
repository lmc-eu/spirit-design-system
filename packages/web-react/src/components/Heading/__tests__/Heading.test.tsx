import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from '../Heading';
import headingSizeDataProvider from './headingSizeDataProvider';
import { HeadingSize } from '../../../types';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';

describe('Heading', () => {
  classNamePrefixProviderTest(Heading, 'typography-heading-medium-text');

  it.each(headingSizeDataProvider)('should have for size %s an expected class %s', (size, expectedClassName) => {
    const dom = render(<Heading size={size as HeadingSize} />);

    expect(dom.container.querySelector('div')).toHaveClass(expectedClassName);
  });
});
