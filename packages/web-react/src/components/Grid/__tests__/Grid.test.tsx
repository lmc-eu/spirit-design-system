import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Grid from '../Grid';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('Grid', () => {
  it('should have default classname', () => {
    const dom = render(<Grid />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Grid />
      </ClassNamePrefixProvider>,
    );

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('lmc-Grid');
  });

  it('should render text children', () => {
    const dom = render(<Grid>Hello World</Grid>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });

  it('should have desktop cols classname', () => {
    const dom = render(<Grid desktop={3} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid--desktop--cols-3');
  });

  it('should have tablet cols classname', () => {
    const dom = render(<Grid tablet={3} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid--tablet--cols-3');
  });

  it('should have all cols classnames', () => {
    const dom = render(<Grid cols={2} tablet={3} desktop={4} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid--cols-2');
    expect(element).toHaveClass('Grid--tablet--cols-3');
    expect(element).toHaveClass('Grid--desktop--cols-4');
  });

  it('should have narrow classname', () => {
    const dom = render(<Grid layout="narrow" />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid--narrow');
  });

  it('should have cols classname', () => {
    const dom = render(<Grid cols={2} />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Grid--cols-2');
  });
});
