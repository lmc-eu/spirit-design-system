import { handleSpecialCase } from '../specialCaseHelper';

describe('specialCaseHelper', () => {
  it('should handle special case', () => {
    const result = handleSpecialCase('breakpoint-mobile', 32);

    expect(result).toBe(0);
  });

  it('should not handle special case', () => {
    const result = handleSpecialCase('breakpoint-tablet', 32);

    expect(result).toBe(32);
  });
});
