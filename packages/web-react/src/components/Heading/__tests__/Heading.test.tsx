import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from '../Heading';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';
import headingSizeDataProvider from './headingSizeDataProvider';
import { HeadingSize } from '../../../types';

describe('Heading', () => {
  it.each(headingSizeDataProvider)('should have for size %s an expected class %s', (size, expectedClassName) => {
    const dom = render(<Heading size={size as HeadingSize} />);

    expect(dom.container.querySelector('div')).toHaveClass(expectedClassName);
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Heading size="xlarge" />
      </ClassNamePrefixProvider>,
    );

    expect(dom.container.querySelector('div')).toHaveClass('lmc-typography-heading-xlarge-text');
  });
});
