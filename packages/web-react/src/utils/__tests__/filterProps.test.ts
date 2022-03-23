import { filterProps } from '../filterProps';

describe('#filterProps', () => {
  it.each([
    [{ style: { 'vertical-align': 'center' }, className: 'Button' }, {}],
    [{ role: 'button' }, { role: 'button' }],
    [{ role: 'button', style: { 'vertical-align': 'center' } }, { role: 'button' }],
  ])('should filter out unwanted props', (input, expected) => {
    expect(filterProps(input)).toEqual(expected);
  });
});
