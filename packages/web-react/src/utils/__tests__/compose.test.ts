import { compose } from '../compose';

describe('#compose', () => {
  it('should compose functions', () => {
    const fn1 = (x) => x + 1;
    const fn2 = (x) => x * 2;
    const fn3 = (x) => x + 3;

    const composed = compose(fn1, fn2, fn3);
    expect(composed(1)).toBe(9);
  });
});
