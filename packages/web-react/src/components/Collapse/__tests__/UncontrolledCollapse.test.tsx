import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { Button } from '../../Button';
import UncontrolledCollapse from '../UncontrolledCollapse';

describe('UncontrolledCollapse', () => {
  classNamePrefixProviderTest(UncontrolledCollapse, 'Collapse');

  stylePropsTest(UncontrolledCollapse);

  restPropsTest(UncontrolledCollapse, 'div');

  beforeEach(() => {
    render(
      <UncontrolledCollapse
        id="example-id"
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
  });

  it('should render text children', () => {
    const element = screen.getByRole('button').parentElement as HTMLElement;

    expect(element).toHaveTextContent('Hello World');
  });

  it('should toggle a collapse', () => {
    const trigger = screen.getByRole('button') as HTMLElement;
    const element = trigger.nextElementSibling as HTMLElement;

    fireEvent.click(trigger);

    expect(element).toHaveClass('is-open');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('should have correct id', () => {
    const element = screen.getByRole('button').nextElementSibling as HTMLElement;

    expect(element).toHaveAttribute('id', 'example-id');
  });
});

describe('UncontrolledCollapse with disposable trigger', () => {
  const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, similique.';

  it('should hide trigger after collapse open', () => {
    render(
      <div>
        {content}
        <UncontrolledCollapse
          id="uncontrolled-collapse-id"
          // Normally we want to display state change, not in this test, prop is passed anyway
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          renderTrigger={({ isOpen, ...rest }) => <Button {...rest}>… more</Button>}
          isDisposable
        >
          {content}
        </UncontrolledCollapse>
      </div>,
    );

    const trigger = screen.getByRole('button') as HTMLElement;

    fireEvent.click(trigger);

    expect(trigger).not.toBeInTheDocument();
  });
});
