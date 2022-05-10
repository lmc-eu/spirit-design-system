import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '../Text';
import textPropsDataProvider from './textPropsDataProvider';
import { TextEmphasis, TextSize } from '../../../types';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';

describe('Text', () => {
  classNamePrefixProviderTest(Text, 'typography-body-medium-text-regular');

  stylePropsTest(Text);

  it.each(textPropsDataProvider)('should have classname', (size, emphasis, expectedClassName) => {
    const dom = render(<Text size={size as TextSize} emphasis={emphasis as TextEmphasis} />);

    expect(dom.container.querySelector('p')).toHaveClass(expectedClassName as string);
  });
});
