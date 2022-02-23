import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '../TextField';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('TextField', () => {
  it('should have default classname', () => {
    const dom = render(<TextField />);

    expect(dom.container.querySelector('div')).toHaveClass('TextField');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <TextField />
      </ClassNamePrefixProvider>,
    );

    expect(dom.container.querySelector('div')).toHaveClass('lmc-TextField');
  });

  it('should have label classname', () => {
    const dom = render(<TextField />);

    expect(dom.container.querySelector('label')).toHaveClass('TextField__label');
  });

  it('should have hidden classname', () => {
    const dom = render(<TextField isLabelHidden />);

    expect(dom.container.querySelector('label')).toHaveClass('TextField__label--hidden');
  });

  it('should have required classname', () => {
    const dom = render(<TextField required />);

    expect(dom.container.querySelector('label')).toHaveClass('TextField__label--required');
  });

  it('should have input classname', () => {
    const dom = render(<TextField />);

    expect(dom.container.querySelector('input')).toHaveClass('TextField__input');
  });

  it('should have message', () => {
    const dom = render(<TextField message="text" />);

    expect(dom.container.querySelector('.TextField__message').textContent).toBe('text');
  });

  it('should have error classname', () => {
    const dom = render(<TextField validationState="error" />);

    expect(dom.container.querySelector('div')).toHaveClass('TextField--error');
  });
});
