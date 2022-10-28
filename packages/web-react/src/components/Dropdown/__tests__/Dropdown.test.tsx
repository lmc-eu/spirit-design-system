import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import Dropdown from '../Dropdown';

describe('Dropdown', () => {
  classNamePrefixProviderTest(Dropdown, 'Dropdown');

  stylePropsTest(Dropdown);

  restPropsTest(Dropdown, 'div');

  it('should render text children', () => {
    const dom = render(
      <Dropdown
        renderTrigger={({ trigger }) => (
          <button type="button" {...trigger}>
            trigger
          </button>
        )}
      >
        Hello World
      </Dropdown>,
    );
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('should toggle a dropdown', () => {
    const dom = render(
      <Dropdown
        renderTrigger={({ trigger }) => (
          <button type="button" {...trigger}>
            trigger
          </button>
        )}
      >
        Hello World
      </Dropdown>,
    );
    const element = dom.container.querySelector('div') as HTMLElement;
    const trigger = dom.container.querySelector('button') as HTMLElement;

    fireEvent.click(trigger);

    expect(element).toHaveClass('is-open');
    expect(trigger).toHaveClass('is-expanded');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
