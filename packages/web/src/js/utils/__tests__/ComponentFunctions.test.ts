import { clearFixture, createEvent, getFixture } from '../../../../tests/helpers/fixture';
import BaseComponent from '../../BaseComponent';
import { enableToggleTrigger } from '../ComponentFunctions';

/* eslint-disable class-methods-use-this */
class DummyClass2 extends BaseComponent {
  static get NAME() {
    return 'test';
  }

  hide() {
    return true;
  }

  testMethod() {
    return true;
  }
}
/* eslint-enable class-methods-use-this */

describe('Plugin functions', () => {
  let fixtureEl: Element;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  describe('data-spirit-toggle functionality', () => {
    it('should get Plugin and execute the given method, when a click occurred on data-spirit-toggle="PluginName"', async () => {
      window.addEventListener = jest.fn().mockImplementationOnce((event, callback) => {
        callback();
      });

      fixtureEl.innerHTML = [
        '<div id="foo" class="test">',
        '  <button type="button" data-spirit-toggle="test" data-spirit-target="#foo"></button>',
        '</div>',
      ].join('');

      const getOrCreateInstanceSpy = jest.spyOn(DummyClass2, 'getOrCreateInstance');
      const testMethodSpy = jest.spyOn(DummyClass2.prototype, 'testMethod');
      const componentWrapper = fixtureEl.querySelector('#foo');
      const btnToggle = fixtureEl.querySelector('[data-spirit-toggle="test"]') as HTMLElement;
      const event = createEvent('click');

      enableToggleTrigger(DummyClass2, 'testMethod');
      await btnToggle.dispatchEvent(event);

      expect(window.addEventListener).toHaveBeenCalledWith(
        'DOMContentLoaded',
        expect.any(Function),
        expect.any(Object),
      );
      expect(getOrCreateInstanceSpy).toHaveBeenCalledWith(componentWrapper);
      expect(testMethodSpy).toHaveBeenCalled();
    });
  });
});
