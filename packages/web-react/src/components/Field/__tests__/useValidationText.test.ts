import { renderHook } from '@testing-library/react-hooks';
import { useValidationText } from '../useValidationText';

describe('useValidationText', () => {
  it('should return undefined', () => {
    const { result } = renderHook(() => useValidationText({ validationTextClassName: '', validationState: undefined }));

    expect(result.current).toBeUndefined();
  });

  it('should return ValidationText component', () => {
    const { result } = renderHook(() =>
      useValidationText({
        validationTextClassName: 'TextField__validationText',
        validationState: 'danger',
        validationText: 'required',
      }),
    );

    expect(result.current).toMatchInlineSnapshot(`
      <ValidationText
        className="TextField__validationText"
        elementType="div"
        validationText="required"
      />
    `);
  });
});
