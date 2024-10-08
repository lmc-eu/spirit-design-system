import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { sizeExtendedPropsTest, sizePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { SizesDictionaryType, SizeExtendedDictionaryType, EmphasisDictionaryType } from '../../../types';
import Heading from '../Heading';
import headingSizeDataProvider from './headingSizeDataProvider';

describe('Heading', () => {
  classNamePrefixProviderTest(Heading, 'typography-heading-medium-bold');

  stylePropsTest(Heading);

  sizePropsTest(Heading);

  sizeExtendedPropsTest(Heading);

  restPropsTest(Heading, 'div');

  it.each(headingSizeDataProvider)('should have classname', (size, emphasis, expectedClassName) => {
    render(
      <Heading
        size={size as SizesDictionaryType<string> as SizeExtendedDictionaryType<string>}
        emphasis={emphasis as EmphasisDictionaryType}
        elementType="h1"
      />,
    );

    expect(screen.getByRole('heading')).toHaveClass(expectedClassName as string);
  });
});
