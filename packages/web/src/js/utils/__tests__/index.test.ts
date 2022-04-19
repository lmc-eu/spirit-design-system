import * as Util from '../index';
import { clearFixture, getFixture } from '../../../../tests/helpers/fixture';

describe('Util', () => {
  let fixtureEl: Element;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  describe('getElementFromSelector', () => {
    it('should get element from data-target', () => {
      fixtureEl.innerHTML = ['<div id="test" data-target=".target"></div>', '<div class="target"></div>'].join('');

      const testEl = fixtureEl.querySelector('#test') as HTMLElement;

      expect(Util.getElementFromSelector(testEl)).toEqual(fixtureEl.querySelector('.target'));
    });

    it('should return null if element not found', () => {
      fixtureEl.innerHTML = '<a id="test" href=".target"></a>';

      const testEl = fixtureEl.querySelector('#test') as HTMLElement;

      expect(Util.getElementFromSelector(testEl)).toBeNull();
    });

    it('should return null if no selector', () => {
      fixtureEl.innerHTML = '<div></div>';

      const testEl = fixtureEl.querySelector('div') as HTMLElement;

      expect(Util.getElementFromSelector(testEl)).toBeNull();
    });
  });

  describe('isElement', () => {
    it('should detect if the parameter is an element or not and return Boolean', () => {
      fixtureEl.innerHTML = ['<div id="foo" class="test"></div>', '<div id="bar" class="test"></div>'].join('');

      const el = fixtureEl.querySelector('#foo');

      expect(Util.isElement(el)).toBeTruthy();
      expect(Util.isElement({})).toBeFalsy();
      expect(Util.isElement(fixtureEl.querySelectorAll('.test'))).toBeFalsy();
    });
  });

  describe('getElement', () => {
    it('should try to parse element', () => {
      fixtureEl.innerHTML = ['<div id="foo" class="test"></div>', '<div id="bar" class="test"></div>'].join('');

      const el = fixtureEl.querySelector('div');

      expect(Util.getElement(el)).toEqual(el);
      expect(Util.getElement('#foo')).toEqual(el);
      expect(Util.getElement('#fail')).toBeNull();
      expect(Util.getElement({})).toBeNull();
      expect(Util.getElement([])).toBeNull();
      expect(Util.getElement()).toBeNull();
      expect(Util.getElement(null)).toBeNull();
      expect(Util.getElement(fixtureEl.querySelectorAll('.test'))).toBeNull();
    });
  });
});
