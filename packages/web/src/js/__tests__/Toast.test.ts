import { clearFixture, getFixture } from '../../../tests/helpers/fixture';
import Toast from '../Toast';
import {
  ATTRIBUTE_ARIA_EXPANDED,
  ATTRIBUTE_DATA_TARGET,
  CLASS_NAME_HIDDEN,
  CLASS_NAME_OPEN,
  CLASS_NAME_TRANSITIONING,
} from '../constants';
import EventHandler from '../dom/EventHandler';

const testId = 'toast-test';

const toastHtmlClosed = `
  <div id="${testId}" class="ToastBar ToastBar--success ToastBar--dismissible is-hidden">
    <button type="button" data-spirit-target="#${testId}" aria-expanded="false">Close</button>
  </div>
`;

const toastHtmlOpened = `
  <div id="${testId}" class="ToastBar ToastBar--success ToastBar--dismissible is-open">
    <button type="button" data-spirit-target="#${testId}" aria-expanded="true">Close</button>
  </div>
`;

describe('Toast', () => {
  let fixtureEl: Element;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  describe('NAME', () => {
    it('should return plugin name', () => {
      expect(Toast.NAME).toEqual(expect.any(String));
    });
  });

  describe('DATA_KEY', () => {
    it('should return plugin data key', () => {
      expect(Toast.DATA_KEY).toBe('toast');
    });
  });

  describe('EVENT_KEY', () => {
    it('should return plugin event key', () => {
      expect(Toast.EVENT_KEY).toBe('.toast');
    });
  });

  describe('constructor', () => {
    it('should construct a toast', () => {
      fixtureEl.innerHTML = toastHtmlClosed;
      const element = fixtureEl.querySelector('.ToastBar') as HTMLElement;
      const toast = new Toast(element);

      expect(toast.element).toEqual(element);
    });
  });

  describe('show', () => {
    it('should show a toast', async () => {
      fixtureEl.innerHTML = toastHtmlClosed;

      const element = fixtureEl.querySelector('.ToastBar') as HTMLElement;
      const toast = new Toast(element);
      const trigger = fixtureEl.querySelector(`[${ATTRIBUTE_DATA_TARGET}="#${testId}"]`) as HTMLButtonElement;

      const showSpy = jest.spyOn(Toast.prototype, 'show');

      await toast.show();

      expect(showSpy).toHaveBeenCalled();
      expect(trigger).toHaveAttribute(ATTRIBUTE_ARIA_EXPANDED, 'true');
      expect(element).toHaveClass(CLASS_NAME_OPEN);
      expect(element).toHaveClass(CLASS_NAME_TRANSITIONING);

      EventHandler.trigger(element, 'transitionend');

      expect(element).toHaveClass(CLASS_NAME_OPEN);
      expect(element).not.toHaveClass(CLASS_NAME_HIDDEN);
      expect(element).not.toHaveClass(CLASS_NAME_TRANSITIONING);
    });
  });

  describe('hide', () => {
    it('should hide a toast', async () => {
      fixtureEl.innerHTML = toastHtmlOpened;

      const element = fixtureEl.querySelector('.ToastBar') as HTMLElement;
      const toast = new Toast(element);
      const trigger = fixtureEl.querySelector(`[${ATTRIBUTE_DATA_TARGET}="#${testId}"]`) as HTMLButtonElement;

      const hideSpy = jest.spyOn(Toast.prototype, 'hide');

      await toast.hide();

      expect(hideSpy).toHaveBeenCalled();
      expect(trigger).toHaveAttribute(ATTRIBUTE_ARIA_EXPANDED, 'false');
      expect(element).toHaveClass(CLASS_NAME_HIDDEN);
      expect(element).toHaveClass(CLASS_NAME_TRANSITIONING);

      EventHandler.trigger(element, 'transitionend');

      expect(fixtureEl.querySelector('.ToastBar')).toBeNull();
    });
  });
});
