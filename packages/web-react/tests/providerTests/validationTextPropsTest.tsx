import { render, waitFor } from '@testing-library/react';
import React, { ComponentType } from 'react';
import { TextFieldType } from '../../src';
import { A11Y_ALERT_ROLE } from '../../src/components/Field/constants';

export const validationTextPropsTest = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>,
  selector: string,
  type: TextFieldType | null = null,
) => {
  it('should have message', async () => {
    const dom = render(
      <Component
        id="component"
        label="Label"
        type={type as TextFieldType}
        validationState="danger"
        validationText="text"
      />,
    );

    await waitFor(() => {
      const element = dom.container.querySelector(selector) as HTMLElement;
      expect(element.textContent).toBe('text');
    });
  });

  it('should have multiline message as a list', async () => {
    const dom = render(
      <Component
        id="component"
        label="Label"
        type={type as TextFieldType}
        validationState="danger"
        validationText={['foo', 'bar']}
      />,
    );

    await waitFor(() => {
      const element = dom.container.querySelector(selector) as HTMLElement;
      expect(element.children[0]).toContainHTML('ul');
    });
  });

  it('should update role when validation state updated', () => {
    const { getByRole, rerender } = render(
      <Component id="component" label="Label" type={type as TextFieldType} validationText="initial validation text" />,
    );

    expect(() => getByRole(A11Y_ALERT_ROLE)).toThrow();

    rerender(
      <Component
        id="component"
        label="Label"
        type={type as TextFieldType}
        validationState="danger"
        validationText="initial validation text"
      />,
    );

    expect(getByRole(A11Y_ALERT_ROLE)).toBeInTheDocument();
  });

  it('should update role when validation text updated', () => {
    const { getByRole, rerender } = render(
      <Component
        id="component"
        label="Label"
        type={type as TextFieldType}
        validationState="danger"
        validationText="initial validation text"
      />,
    );

    expect(() => getByRole(A11Y_ALERT_ROLE)).toThrow();

    rerender(
      <Component
        id="component"
        label="Label"
        type={type as TextFieldType}
        validationState="danger"
        validationText="updated validation text"
      />,
    );

    expect(getByRole(A11Y_ALERT_ROLE)).toBeInTheDocument();
  });
};
