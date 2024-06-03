// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { getFixture, clearFixture } from '../../../../tests/helpers/fixture';
import SelectorEngine from '../SelectorEngine';

describe('SelectorEngine', () => {
  let fixtureEl: Element;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  describe('findAll', () => {
    it('should find elements', () => {
      fixtureEl.innerHTML = '<div></div>';

      const div = fixtureEl.querySelector('div');

      expect(SelectorEngine.findAll('div', fixtureEl)).toEqual([div]);
    });

    it('should find elements globaly', () => {
      fixtureEl.innerHTML = '<div id="test"></div>';

      const div = fixtureEl.querySelector('#test');

      expect(SelectorEngine.findAll('#test')).toEqual([div]);
    });

    it('should handle :scope selectors', () => {
      fixtureEl.innerHTML = [
        '<ul>',
        '  <li></li>',
        '  <li>',
        '    <a href="#" class="active">link</a>',
        '  </li>',
        '  <li></li>',
        '</ul>',
      ].join('');

      const listEl = fixtureEl.querySelector('ul');
      const aActive = fixtureEl.querySelector('.active');

      expect(SelectorEngine.findAll(':scope > li > .active', listEl)).toEqual([aActive]);
    });
  });

  describe('findOne', () => {
    it('should return one element', () => {
      fixtureEl.innerHTML = '<div id="test"></div>';

      const div = fixtureEl.querySelector('#test');

      expect(SelectorEngine.findOne('#test')).toEqual(div);
    });
  });
});
