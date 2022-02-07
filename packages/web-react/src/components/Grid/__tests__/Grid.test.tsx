import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Grid from '../Grid';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('Grid', () => {
  it('should have default classname', () => {
    const dom = render(<Grid />);

    expect(dom.container.querySelector('div')).toHaveClass('Grid');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Grid />
      </ClassNamePrefixProvider>,
    );

    expect(dom.container.querySelector('div')).toHaveClass('lmc-Grid');
  });

  it('should render text children', () => {
    const dom = render(<Grid>Hello World</Grid>);

    expect(dom.container.querySelector('div').textContent).toBe('Hello World');
  });

  it('should have desktop cols classname', () => {
    const dom = render(<Grid desktop={3} />);

    expect(dom.container.querySelector('div')).toHaveClass('Grid--desktop--cols-3');
  });

  it('should have tablet cols classname', () => {
    const dom = render(<Grid tablet={3} />);

    expect(dom.container.querySelector('div')).toHaveClass('Grid--tablet--cols-3');
  });

  it('should have mobile cols classname', () => {
    const dom = render(<Grid mobile={3} />);

    expect(dom.container.querySelector('div')).toHaveClass('Grid--mobile--cols-3');
  });

  it('should have narrow classname', () => {
    const dom = render(<Grid narrow />);

    expect(dom.container.querySelector('div')).toHaveClass('Grid--narrow');
  });
});
