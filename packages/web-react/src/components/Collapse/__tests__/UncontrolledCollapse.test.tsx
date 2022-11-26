import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import UncontrolledCollapse from '../UncontrolledCollapse';

describe('UncontrolledCollapse', () => {
  classNamePrefixProviderTest(UncontrolledCollapse, 'Collapse');

  stylePropsTest(UncontrolledCollapse);

  restPropsTest(UncontrolledCollapse, 'div');

  it('should render text children', () => {
    const dom = render(
      <UncontrolledCollapse
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        renderTrigger={({ collapsed, ...rest }) => (
          <button type="button" {...rest}>
            trigger
          </button>
        )}
      >
        Hello World
      </UncontrolledCollapse>,
    );
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('should toggle a collapse', () => {
    const dom = render(
      <UncontrolledCollapse
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        renderTrigger={({ collapsed, ...rest }) => (
          <button type="button" {...rest}>
            trigger
          </button>
        )}
      >
        Hello World
      </UncontrolledCollapse>,
    );
    const element = dom.container.querySelector('div') as HTMLElement;
    const trigger = dom.container.querySelector('button') as HTMLElement;

    fireEvent.click(trigger);

    expect(element).toHaveClass('is-collapsed');
    expect(trigger).toHaveClass('is-expanded');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
