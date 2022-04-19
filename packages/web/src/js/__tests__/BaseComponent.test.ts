// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import BaseComponent from '../BaseComponent';
import { clearFixture, getFixture } from '../../../tests/helpers/fixture';
import EventHandler from '../dom/EventHandler';

class DummyClass extends BaseComponent {
  constructor(element: Element | string | null) {
    super(element);

    EventHandler.on(this.element, 'click');
  }
}

describe('Base Component', () => {
  let fixtureEl: Element;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  describe('Public Methods', () => {
    describe('constructor', () => {
      it('should accept element, either passed as a CSS selector or DOM element', () => {
        fixtureEl.innerHTML = ['<div id="foo"></div>', '<div id="bar"></div>'].join('');

        const el = fixtureEl.querySelector('#foo');
        const elInstance = new DummyClass(el);
        const selectorInstance = new DummyClass('#bar');

        expect(elInstance.element).toEqual(el);
        expect(selectorInstance.element).toEqual(fixtureEl.querySelector('#bar'));
      });
    });
  });
});
