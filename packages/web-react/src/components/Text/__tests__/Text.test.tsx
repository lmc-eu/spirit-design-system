import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import {
  classNamePrefixProviderTest,
  sizeExtendedPropsTest,
  sizePropsTest,
  restPropsTest,
  stylePropsTest,
  textAlignmentPropsTest,
  textColorPropsTest,
  validHtmlAttributesTest,
  elementTypePropsTest,
} from '@local/tests';
import { EmphasisDictionaryType, SizesDictionaryType, SizeExtendedDictionaryType } from '../../../types';
import Text from '../Text';
import textPropsDataProvider from './textPropsDataProvider';

describe('Text', () => {
  classNamePrefixProviderTest(Text, 'typography-body-medium-regular');

  stylePropsTest(Text);

  sizePropsTest(Text);

  sizeExtendedPropsTest(Text);

  textAlignmentPropsTest(Text);

  textColorPropsTest(Text);

  restPropsTest(Text, 'p');

  validHtmlAttributesTest(Text);

  elementTypePropsTest(Text);

  it.each(textPropsDataProvider)('should have classname', (size, emphasis, expectedClassName) => {
    render(
      <Text
        size={size as SizesDictionaryType<string> as SizeExtendedDictionaryType<string>}
        emphasis={emphasis as EmphasisDictionaryType}
      >
        Text
      </Text>,
    );

    expect(screen.getByText('Text')).toHaveClass(expectedClassName as string);
  });

  it('should correctly render children', () => {
    render(<Text>Text</Text>);

    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});
