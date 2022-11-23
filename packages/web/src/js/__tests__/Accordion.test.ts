import { clearFixture, getFixture } from '../../../tests/helpers/fixture';
import { triggerEvent } from '../../../tests/helpers/event';
import Accordion from '../Accordion';
import Collapse from '../Collapse';
import { CLASSNAME_OPEN, CLASSNAME_TRANSITION } from '../constants';

describe('Accordion', () => {
  let fixtureEl: Element;

  const testHTMLElement = `
    <section
      id="accordionExample1"
      class="Accordion"
      data-toggle="accordion"
    >
      <article
        id="accordionExample1_article_0"
        class="Accordion__item"
      >
        <h3
          id="accordionExample1_article_0_header"
          class="Accordion__itemHeader"
        >
          <button
            type="button"
            class="Accordion__itemToggle"
            data-toggle="collapse"
            data-target="accordionExample1_article_0_collapse"
          >
            Accordion header #0
          </button>
          <span class="Accordion__itemSlot">
            <a href="#">Link</a>
            <span class="Pill Pill--selected">3</span>
            <svg class="Icon Accordion__itemIcon" width="24" height="24">
              <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
            </svg>
          </span>
        </h3>
        <div
          id="accordionExample1_article_0_collapse"
          class="Accordion__itemCollapse"
          data-parent="accordionExample1"
          aria-labelledby="accordionExample1_article_0_header"
        >
          <div
            class="Accordion__itemContent Collapse__content"
          >
            Accordion content #0
          </div>
        </div>
      </article>
      <article
        id="accordionExample1_article_1"
        class="Accordion__item"
      >
        <h3
          id="accordionExample1_article_1_header"
          class="Accordion__itemHeader"
        >
          <button
            type="button"
            class="Accordion__itemToggle"
            data-toggle="collapse"
            data-target="accordionExample1_article_1_collapse"
            aria-expanded="true"
          >
            Accordion header #1 (open)
          </button>
          <span class="Accordion__itemSlot">
            <svg class="Icon Accordion__itemIcon" width="24" height="24">
              <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
            </svg>
          </span>
        </h3>
        <div
          id="accordionExample1_article_1_collapse"
          class="Accordion__itemCollapse is-open"
          data-parent="accordionExample1"
          aria-labelledby="accordionExample1_article_1_header"
        >
          <div
            class="Accordion__itemContent Collapse__content"
          >
            Accordion content #1
          </div>
        </div>
      </article>
    </section>
  `;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  describe('constructor', () => {
    it('should take care of element passed as a CSS selector', () => {
      fixtureEl.innerHTML = testHTMLElement;

      const element = fixtureEl.querySelector('[data-toggle="accordion"]') as HTMLElement;
      const elementBySelector = new Accordion(element);

      expect(elementBySelector.element).toEqual(element);
    });
  });

  describe('toggle', () => {
    it('should toggle a collapse', async () => {
      fixtureEl.innerHTML = testHTMLElement;

      const toggleSpy = jest.spyOn(Collapse.prototype, 'toggle');
      const element = fixtureEl.querySelector('[data-target="accordionExample1_article_0_collapse"]') as HTMLElement;
      const collapse = new Collapse(element);

      await collapse.toggle();

      expect(toggleSpy).toHaveBeenCalled();

      await collapse.toggle();

      expect(toggleSpy).toHaveBeenCalled();
    });
  });

  describe('show', () => {
    it('should show a collapse', async () => {
      fixtureEl.innerHTML = testHTMLElement;

      const element = fixtureEl.querySelector('[data-target="accordionExample1_article_0_collapse"]') as HTMLElement;
      const target = fixtureEl.querySelector('#accordionExample1_article_0_collapse') as HTMLElement;
      const collapse = new Collapse(element);

      await collapse.show();

      expect(element.getAttribute('aria-expanded')).toBe('true');
      expect(target).toHaveClass(CLASSNAME_TRANSITION);

      triggerEvent(target, 'transitionend');
      expect(target).toHaveClass(CLASSNAME_OPEN);
    });
  });

  describe('hide', () => {
    it('should hide a collapse', async () => {
      fixtureEl.innerHTML = testHTMLElement;

      const element = fixtureEl.querySelector('[data-target="accordionExample1_article_1_collapse"]') as HTMLElement;
      const target = fixtureEl.querySelector('#accordionExample1_article_1_collapse') as HTMLElement;
      const collapse = new Collapse(element);

      await collapse.hide();

      expect(element.getAttribute('aria-expanded')).toBe('false');
      expect(target).toHaveClass(CLASSNAME_TRANSITION);

      triggerEvent(target, 'transitionend');
      expect(target).toHaveClass('Accordion__itemCollapse');
    });
  });
});
