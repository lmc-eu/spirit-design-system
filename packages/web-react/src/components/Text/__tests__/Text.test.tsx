import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '../Text';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { sizeExtendedPropsTest, sizePropsTest } from '../../../../tests/providerTests/dictionaryPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { SizesDictionaryType, SizeExtendedDictionaryType, TextEmphasis } from '../../../types';
import textPropsDataProvider from './textPropsDataProvider';

describe('Text', () => {
  classNamePrefixProviderTest(Text, 'typography-body-medium-text-regular');

  stylePropsTest(Text);

  sizePropsTest(Text);

  sizeExtendedPropsTest(Text);

  restPropsTest(Text, 'p');

  it.each(textPropsDataProvider)('should have classname', (size, emphasis, expectedClassName) => {
    const dom = render(
      <Text
        size={size as SizesDictionaryType<string> as SizeExtendedDictionaryType<string>}
        emphasis={emphasis as TextEmphasis}
      />,
    );

    expect(dom.container.querySelector('p')).toHaveClass(expectedClassName as string);
  });
});
