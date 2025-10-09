import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  sizeExtendedPropsTest,
  sizePropsTest,
  stylePropsTest,
  textAlignmentPropsTest,
  textColorPropsTest,
  textHyphensPropsTest,
  textIsBalancedPropsTest,
  textWordBreakPropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import { type EmphasisDictionaryType, type SizeExtendedDictionaryType, type SizesDictionaryType } from '../../../types';
import Heading from '../Heading';
import headingSizeDataProvider from './headingSizeDataProvider';

describe('Heading', () => {
  classNamePrefixProviderTest(() => <Heading elementType="h1" />, 'typography-heading-medium-bold');

  stylePropsTest((props) => <Heading elementType="h1" {...props} />);

  sizePropsTest((props) => <Heading elementType="h1" {...props} />);

  sizeExtendedPropsTest((props) => <Heading elementType="h1" {...props} />);

  textAlignmentPropsTest((props) => <Heading elementType="h1" {...props} />);

  textColorPropsTest((props) => <Heading elementType="h1" {...props} />);

  textHyphensPropsTest((props) => <Heading elementType="h1" {...props} />);

  textIsBalancedPropsTest((props) => <Heading elementType="h1" {...props} />);

  textWordBreakPropsTest((props) => <Heading elementType="h1" {...props} />);

  restPropsTest((props) => <Heading elementType="h1" {...props} />, 'h1');

  validHtmlAttributesTest((props) => <Heading elementType="h1" {...props} />);

  ariaAttributesTest((props) => <Heading elementType="h1" {...props} />);

  elementTypePropsTest(Heading);

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
