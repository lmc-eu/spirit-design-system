import { clearFixture, getFixture } from '../../../tests/helpers/fixture';
import Collapse from '../Collapse';
import { CLASSNAME_OPEN, CLASSNAME_TRANSITION } from '../constants';

describe('Collapse', () => {
  let fixtureEl: Element;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  describe('constructor', () => {
    it('should take care of element passed as a CSS selector', () => {
      fixtureEl.innerHTML = `
        <button data-toggle="collapse" data-target="CollapseExample0"></button>
        <div id="CollapseExample0" class="Collapse">
          <div class="Collapse__content">
            test content
          </div>
        </div>
      `;

      const element = fixtureEl.querySelector('[data-toggle="collapse"]') as HTMLElement;
      const elementBySelector = new Collapse(element);

      expect(elementBySelector.element).toEqual(element);
    });
  });

  describe('toggle', () => {
    it('should toggle a collapse', async () => {
      fixtureEl.innerHTML = `
        <button data-toggle="collapse" data-target="CollapseExample0" aria-expanded="false"></button>
        <div id="CollapseExample0" class="Collapse">
          <div class="Collapse__content">
            test content
          </div>
        </div>
      `;

      const toggleSpy = jest.spyOn(Collapse.prototype, 'toggle');
      const element = fixtureEl.querySelector('[data-toggle="collapse"]') as HTMLElement;
      const collapse = new Collapse(element);

      await collapse.toggle();

      expect(toggleSpy).toHaveBeenCalled();

      await collapse.toggle();

      expect(toggleSpy).toHaveBeenCalled();
    });
  });

  describe('show', () => {
    it('should show a collapse', async () => {
      fixtureEl.innerHTML = `
        <button data-toggle="collapse" data-target="CollapseExample0" aria-expanded="false"></button>
        <div id="CollapseExample0" class="Collapse">
          <div class="Collapse__content">
            test content
          </div>
        </div>
      `;

      const element = fixtureEl.querySelector('[data-toggle="collapse"]') as HTMLElement;
      const target = fixtureEl.querySelector('#CollapseExample0') as HTMLElement;
      const collapse = new Collapse(element);

      await collapse.show();

      expect(element.getAttribute('aria-expanded')).toBe('true');
      expect(target).toHaveClass(CLASSNAME_TRANSITION);

      // Wait until transition ends
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((event) => setTimeout(event, 250));
      expect(target).toHaveClass(CLASSNAME_OPEN);
    });
  });

  describe('hide', () => {
    it('should hide a collapse', async () => {
      fixtureEl.innerHTML = `
        <button data-toggle="collapse" data-target="CollapseExample0" aria-expanded="true"></button>
        <div id="CollapseExample0" class="Collapse">
          <div class="Collapse__content">
            test content
          </div>
        </div>
      `;

      const element = fixtureEl.querySelector('[data-toggle="collapse"]') as HTMLElement;
      const collapse = new Collapse(element);

      await collapse.hide();

      expect(element.getAttribute('aria-expanded')).toBe('false');
    });
  });
});
