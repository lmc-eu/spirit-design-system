import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import UncontrolledCollapse from '../UncontrolledCollapse';

describe('UncontrolledCollapse', () => {
  classNamePrefixProviderTest(UncontrolledCollapse, 'Collapse');

  stylePropsTest(UncontrolledCollapse);

  restPropsTest(UncontrolledCollapse, 'div');

  it('should render text children', () => {
    const dom = render(
      <UncontrolledCollapse
        // Normally we want to display state change, not in this test, prop is passed anyway
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        renderTrigger={({ isOpen, ...rest }) => (
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
        // Normally we want to display state change, not in this test, prop is passed anyway
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        renderTrigger={({ isOpen, ...rest }) => (
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

    expect(element).toHaveClass('is-open');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
