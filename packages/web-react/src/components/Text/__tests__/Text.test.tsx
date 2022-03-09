import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '../Text';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';
import textPropsDataProvider from './textPropsDataProvider';
import { TextEmphasis, TextSize } from '../../../types';

describe('Text', () => {
  it('should have default classname', () => {
    const dom = render(<Text />);

    expect(dom.container.querySelector('p')).toHaveClass('typography-body-medium-text-regular');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Text />
      </ClassNamePrefixProvider>,
    );

    expect(dom.container.querySelector('p')).toHaveClass('lmc-typography-body-medium-text-regular');
  });

  it.each(textPropsDataProvider)('should have classname', (size, emphasis, expectedClassName) => {
    const dom = render(<Text size={size as TextSize} emphasis={emphasis as TextEmphasis} />);

    expect(dom.container.querySelector('p')).toHaveClass(expectedClassName);
  });
});
