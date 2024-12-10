import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {
  classNamePrefixProviderTest,
  sizeExtendedPropsTest,
  sizePropsTest,
  restPropsTest,
  stylePropsTest,
} from '@local/tests';
import { SizesDictionaryType, SizeExtendedDictionaryType, EmphasisDictionaryType } from '../../../types';
import Heading from '../Heading';
import headingSizeDataProvider from './headingSizeDataProvider';

describe('Heading', () => {
  classNamePrefixProviderTest(() => <Heading elementType="h1" />, 'typography-heading-medium-bold');

  stylePropsTest((props) => <Heading elementType="h1" data-testid="heading-test-id" {...props} />, 'heading-test-id');

  sizePropsTest((props) => <Heading elementType="h1" data-testid="heading-test-id" {...props} />, 'heading-test-id');

  sizeExtendedPropsTest(
    (props) => <Heading elementType="h1" data-testid="heading-test-id" {...props} />,
    'heading-test-id',
  );

  restPropsTest((props) => <Heading elementType="h1" {...props} />, 'h1');

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
