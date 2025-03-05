import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {
  classNamePrefixProviderTest,
  sizeExtendedPropsTest,
  sizePropsTest,
  restPropsTest,
  stylePropsTest,
  textColorPropsTest,
} from '@local/tests';
import { SizesDictionaryType, SizeExtendedDictionaryType, EmphasisDictionaryType } from '../../../types';
import Heading from '../Heading';
import headingSizeDataProvider from './headingSizeDataProvider';
import { AlignmentX } from '../../../constants';

describe('Heading', () => {
  classNamePrefixProviderTest(() => <Heading elementType="h1" />, 'typography-heading-medium-bold');

  stylePropsTest((props) => <Heading elementType="h1" data-testid="heading-test-id" {...props} />, 'heading-test-id');

  sizePropsTest((props) => <Heading elementType="h1" data-testid="heading-test-id" {...props} />, 'heading-test-id');

  sizeExtendedPropsTest(
    (props) => <Heading elementType="h1" data-testid="heading-test-id" {...props} />,
    'heading-test-id',
  );

  textColorPropsTest(
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

  it.each([Object.values(AlignmentX)])('should render additional style props', (alignment) => {
    render(
      <Heading elementType="h1" textAlignment={alignment}>
        Text
      </Heading>,
    );

    expect(screen.getByText('Text')).toHaveClass(`text-${alignment}`);
  });
});
