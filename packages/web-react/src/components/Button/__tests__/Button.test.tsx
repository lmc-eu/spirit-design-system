import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('Button', () => {
  it('should have default classname', () => {
    const dom = render(<Button />);

    expect(dom.container.querySelector('button')).toHaveClass('Button');
    expect(dom.container.querySelector('button')).toHaveClass('Button--primary');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Button />
      </ClassNamePrefixProvider>,
    );

    expect(dom.container.querySelector('button')).toHaveClass('lmc-Button');
    expect(dom.container.querySelector('button')).toHaveClass('lmc-Button--primary');
  });
});
