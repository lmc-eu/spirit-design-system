import { base64ToByteArray, image2Base64Preview } from '../utils';

const base64 = 'SGVsbG8gd29ybGQ=';
const blob = new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]);

describe('image2Base64Preview', () => {
  it('should convert image file to base64 string', () => {
    const file = new File([blob], 'image.jpg', {
      type: 'image/jpeg',
    });

    image2Base64Preview(file, 100, (base64Preview) => {
      expect(base64Preview).toBeDefined();
      expect(base64Preview).toBe(base64);
    });
  });
});

describe('base64ToByteArray', () => {
  it('should convert a base64 string to a byte array', () => {
    const result = base64ToByteArray(base64);

    expect(result).toEqual(blob);
  });
});
