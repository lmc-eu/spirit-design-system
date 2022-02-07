import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from '../Container';
import { ClassNamePrefixProvider } from '../../../context/ClassNamePrefixContext';

describe('Container', () => {
  it('should have default classname', () => {
    const dom = render(<Container />);

    expect(dom.container.querySelector('div')).toHaveClass('Container');
  });

  it('should have classname with lmc prefix', () => {
    const dom = render(
      <ClassNamePrefixProvider value="lmc">
        <Container />
      </ClassNamePrefixProvider>,
    );

    expect(dom.container.querySelector('div')).toHaveClass('lmc-Container');
  });

  it('should render text children', () => {
    const dom = render(<Container>Hello World</Container>);

    expect(dom.container.querySelector('div').textContent).toBe('Hello World');
  });
});
