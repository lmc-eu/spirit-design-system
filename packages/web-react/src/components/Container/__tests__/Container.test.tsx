import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from '../Container';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('Container', () => {
  it('should have default classname', () => {
    const dom = render(<Container />);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('Container');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Container />
      </ClassNamePrefixProvider>,
    );

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element).toHaveClass('lmc-Container');
  });

  it('should render text children', () => {
    const dom = render(<Container>Hello World</Container>);

    const element = dom.container.querySelector('div') as HTMLElement;
    expect(element.textContent).toBe('Hello World');
  });
});
