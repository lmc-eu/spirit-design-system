import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { sizeExtendedPropsTest, sizePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { SizesDictionaryType, SizeExtendedDictionaryType } from '../../../types';
import Heading from '../Heading';
import headingSizeDataProvider from './headingSizeDataProvider';

describe('Heading', () => {
  classNamePrefixProviderTest(Heading, 'typography-heading-medium-text');

  stylePropsTest(Heading);

  sizePropsTest(Heading);

  sizeExtendedPropsTest(Heading);

  restPropsTest(Heading, 'div');

  it.each(headingSizeDataProvider)('should have for size %s an expected class %s', (size, expectedClassName) => {
    const dom = render(<Heading size={size as SizesDictionaryType<string> as SizeExtendedDictionaryType<string>} />);

    expect(dom.container.querySelector('div')).toHaveClass(expectedClassName);
  });
});
