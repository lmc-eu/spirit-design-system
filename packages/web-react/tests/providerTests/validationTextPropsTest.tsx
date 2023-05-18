import { render, waitFor } from '@testing-library/react';
import React, { ComponentType } from 'react';
import { TextFieldType } from '../../src';

export const validationTextPropsTest = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>,
  className: string,
  type: TextFieldType | null = null,
) => {
  it('should have message', async () => {
    const dom = render(
      <Component
        id="component"
        label="Label"
        type={type as TextFieldType}
        /** @deprecated Will be removed in the next major version. */
        message="text"
        validationState="danger"
        validationText="text"
      />,
    );

    await waitFor(() => {
      const element = dom.container.querySelector(className) as HTMLElement;
      expect(element.textContent).toBe('text');
    });
  });

  it('should have multiline message as a list', async () => {
    const dom = render(
      <Component
        id="component"
        label="Label"
        type={type as TextFieldType}
        /** @deprecated Will be removed in the next major version. */
        message={['foo', 'bar']}
        validationState="danger"
        validationText={['foo', 'bar']}
      />,
    );

    await waitFor(() => {
      const element = dom.container.querySelector(className) as HTMLElement;
      expect(element.tagName.toLowerCase()).toBe('ul');
    });
  });
};
