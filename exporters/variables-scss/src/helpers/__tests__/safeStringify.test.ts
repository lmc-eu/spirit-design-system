import { safeStringify } from '../safeStringify';

type CircularObject = { [key: string]: CircularObject | unknown };

describe('safeStringify', () => {
  it('should stringify a simple object', () => {
    const obj = { key: 'value', number: 42 };
    const result = safeStringify(obj);

    expect(result).toBe(JSON.stringify(obj, null, 2));
  });

  it('should handle circular references in objects', () => {
    const obj: CircularObject = { key: 'value' };
    obj.self = obj; // Introduce circular reference

    const result = safeStringify(obj);

    expect(result).toContain('"self": "CIRCULAR_REFERENCE"');
  });

  it('should handle nested objects with no circular references', () => {
    const obj = { outer: { inner: { key: 'value' } } };
    const result = safeStringify(obj);

    expect(result).toBe(JSON.stringify(obj, null, 2));
  });

  it('should handle arrays within objects', () => {
    const obj = { list: [1, 2, 3] };
    const result = safeStringify(obj);

    expect(result).toBe(JSON.stringify(obj, null, 2));
  });

  it('should handle null values', () => {
    const obj = { key: null };
    const result = safeStringify(obj);

    expect(result).toBe(JSON.stringify(obj, null, 2));
  });
});
