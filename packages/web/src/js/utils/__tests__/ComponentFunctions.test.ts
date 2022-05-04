import { clearFixture, createEvent, getFixture } from '../../../../tests/helpers/fixture';
import { enableToggleTrigger } from '../ComponentFunctions';
import BaseComponent from '../../BaseComponent';

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

  describe('data-toggle functionality', () => {
    it('should get Plugin and execute the given method, when a click occurred on data-toggle="PluginName"', async () => {
      window.addEventListener = jest.fn().mockImplementationOnce((event, callback) => {
        callback();
      });

      fixtureEl.innerHTML = [
        '<div id="foo" class="test">',
        '  <button type="button" data-toggle="test" data-target="#foo"></button>',
        '</div>',
      ].join('');

      const getOrCreateInstanceSpy = jest.spyOn(DummyClass2, 'getOrCreateInstance');
      const testMethodSpy = jest.spyOn(DummyClass2.prototype, 'testMethod');
      const componentWrapper = fixtureEl.querySelector('[data-target="#foo"]');
      const btnToggle = fixtureEl.querySelector('[data-toggle="test"]') as HTMLElement;
      const event = createEvent('click');

      enableToggleTrigger(DummyClass2, 'testMethod');
      await btnToggle.dispatchEvent(event);

      expect(window.addEventListener).toHaveBeenCalledWith('DOMContentLoaded', expect.any(Function));
      expect(getOrCreateInstanceSpy).toHaveBeenCalledWith(componentWrapper);
      expect(testMethodSpy).toHaveBeenCalled();
    });
  });
});
