import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tag from '../Tag';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('Tag', () => {
  it('should have default classname', () => {
    const dom = render(<Tag />);

    expect(dom.container.firstChild).toHaveClass('Tag');
    expect(dom.container.firstChild).toHaveClass('Tag--default-dark');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Tag />
      </ClassNamePrefixProvider>,
    );

    expect(dom.container.firstChild).toHaveClass('lmc-Tag');
    expect(dom.container.firstChild).toHaveClass('lmc-Tag--default-dark');
  });
});
