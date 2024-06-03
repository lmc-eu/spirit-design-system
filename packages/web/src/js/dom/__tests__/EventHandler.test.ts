// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { clearFixture, getFixture } from '../../../../tests/helpers/fixture';
import EventHandler from '../EventHandler';

describe('EventHandler', () => {
  let fixtureEl: Element;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  describe('on', () => {
    it('should add event listener', async () => {
      fixtureEl.innerHTML = '<div></div>';

      const div = fixtureEl.querySelector('div');

      EventHandler.on(div, 'click', () => {
        expect.anything();
      });

      await div.click();
    });

    it('should handle event delegation', async () => {
      EventHandler.on(document, 'click', () => {
        expect.anything();
      });

      fixtureEl.innerHTML = '<div class="test"></div>';

      const div = fixtureEl.querySelector('div');

      await div.click();
    });
  });

  describe('off', () => {
    it('should remove a listener', async () => {
      fixtureEl.innerHTML = '<div></div>';
      const div = fixtureEl.querySelector('div');

      let called = 0;
      const handler = () => {
        called += 1;
      };

      EventHandler.on(div, 'foobar', handler);
      EventHandler.trigger(div, 'foobar');

      EventHandler.off(div, 'foobar', handler);
      EventHandler.trigger(div, 'foobar');

      await setTimeout(() => {
        expect(called).toBe(1);
      }, 20);
    });

    it('should remove all the events', async () => {
      fixtureEl.innerHTML = '<div></div>';
      const div = fixtureEl.querySelector('div');

      let called = 0;

      EventHandler.on(div, 'foobar', () => {
        called += 1;
      });
      EventHandler.on(div, 'foobar', () => {
        called += 1;
      });
      EventHandler.trigger(div, 'foobar');

      EventHandler.off(div, 'foobar');
      EventHandler.trigger(div, 'foobar');

      await setTimeout(() => {
        expect(called).toBe(2);
      }, 20);
    });
  });
});
