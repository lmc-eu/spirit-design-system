import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from '../Heading';
import headingSizeDataProvider from './headingSizeDataProvider';
import { Size, SizeExtended } from '../../../types';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { sizeExtendedPropsTest, sizePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

describe('Heading', () => {
  classNamePrefixProviderTest(Heading, 'typography-heading-medium-text');

  stylePropsTest(Heading);

  sizePropsTest(Heading);

  sizeExtendedPropsTest(Heading);

  restPropsTest(Heading, 'div');

  it.each(headingSizeDataProvider)('should have for size %s an expected class %s', (size, expectedClassName) => {
    const dom = render(<Heading size={size as Size<string> as SizeExtended<string>} />);

    expect(dom.container.querySelector('div')).toHaveClass(expectedClassName);
  });
});
