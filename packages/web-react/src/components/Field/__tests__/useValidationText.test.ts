import { renderHook } from '@testing-library/react-hooks';
import { useValidationText } from '../useValidationText';

describe('useValidationText', () => {
  it('should return null', () => {
    const { result } = renderHook(() => useValidationText({ validationTextClassName: '', validationState: undefined }));

    expect(result.current).toBeNull();
  });

  it('should return ValidationText component', () => {
    const { result } = renderHook(() =>
      useValidationText({
        validationTextClassName: 'TextField__message',
        validationState: 'danger',
        validationText: 'required',
      }),
    );

    expect(result.current).toMatchInlineSnapshot(`
      <ValidationText
        className="TextField__message"
        elementType="div"
        validationText="required"
      />
    `);
  });
});
