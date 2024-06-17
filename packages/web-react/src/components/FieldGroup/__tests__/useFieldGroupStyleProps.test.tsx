import { renderHook } from '@testing-library/react';
import { SpiritFieldGroupProps } from '../../../types';
import { useFieldGroupStyleProps } from '../useFieldGroupStyleProps';

describe('useFieldGroupStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useFieldGroupStyleProps(props));

    expect(result.current.classProps.root).toBe('FieldGroup');
  });

  it('should return FieldGroup fluid and danger classes', () => {
    const props: SpiritFieldGroupProps = { id: 'example-id', label: 'Label', isFluid: true, validationState: 'danger' };
    const { result } = renderHook(() => useFieldGroupStyleProps(props));

    expect(result.current.classProps.root).toBe('FieldGroup FieldGroup--fluid FieldGroup--danger');
  });

  it('should return required class on label', () => {
    const props: SpiritFieldGroupProps = { id: 'example-id', label: 'Label', isRequired: true };
    const { result } = renderHook(() => useFieldGroupStyleProps(props));

    expect(result.current.classProps.label).toBe('FieldGroup__label FieldGroup__label--required');
  });
});
