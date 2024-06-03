import { clearFixture, getFixture } from '../../../tests/helpers/fixture';
import EventHandler from '../dom/EventHandler';
import Modal from '../Modal';

describe('Modal', () => {
  let fixtureEl: Element;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
    document.body.classList.remove('is-open');
  });

  describe('constructor', () => {
    it('should take care of element either passed as a CSS selector or DOM element', () => {
      fixtureEl.innerHTML = '<dialog class="Modal"><div class="Modal__content"></div></dialog>';

      const modalEl = fixtureEl.querySelector('.Modal') as HTMLElement;
      const modalBySelector = new Modal('.Modal');
      const modalByElement = new Modal(modalEl);

      expect(modalBySelector.element).toEqual(modalEl);
      expect(modalByElement.element).toEqual(modalEl);
    });
  });

  describe('show', () => {
    it('should do nothing if a modal is shown', () => {
      fixtureEl.innerHTML = '<dialog class="Modal"><div class="Modal__content"></div></dialog>';

      const modalEl = fixtureEl.querySelector('.Modal') as HTMLElement;
      const modal = new Modal(modalEl);

      const spy = jest.spyOn(EventHandler, 'trigger');
      modal.isShown = true;

      modal.show();

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('hide', () => {
    it('should do nothing is the modal is not shown', () => {
      fixtureEl.innerHTML = '<dialog class="Modal"><div class="Modal__content"></div></dialog>';

      const modalEl = fixtureEl.querySelector('.Modal') as HTMLElement;
      const modal = new Modal(modalEl);
      const event = new Event('keydown');
      modalEl.dispatchEvent(event);

      modal.hide(event);

      expect.anything();
    });
  });

  describe('getInstance', () => {
    it('should return modal instance', () => {
      fixtureEl.innerHTML = '<dialog class="Modal"><div class="Modal__content"></div></dialog>';

      const dialog = fixtureEl.querySelector('dialog') as HTMLElement;
      const modal = new Modal(dialog);

      expect(Modal.getInstance(dialog)).toEqual(modal);
      expect(Modal.getInstance(dialog)).toBeInstanceOf(Modal);
    });

    it('should return null when there is no modal instance', () => {
      fixtureEl.innerHTML = '<dialog class="Modal"><div class="Modal__content"></div></dialog>';

      const dialog = fixtureEl.querySelector('dialog') as HTMLElement;

      expect(Modal.getInstance(dialog)).toBeNull();
    });
  });

  describe('getOrCreateInstance', () => {
    it('should return modal instance', () => {
      fixtureEl.innerHTML = '<dialog></dialog>';

      const dialog = fixtureEl.querySelector('dialog') as HTMLElement;
      const modal = new Modal(dialog);

      expect(Modal.getOrCreateInstance(dialog)).toEqual(modal);
      expect(Modal.getInstance(dialog)).toEqual(Modal.getOrCreateInstance(dialog));
      expect(Modal.getOrCreateInstance(dialog)).toBeInstanceOf(Modal);
    });

    it('should return new instance when there is no modal instance', () => {
      fixtureEl.innerHTML = '<dialog></dialog>';

      const dialog = fixtureEl.querySelector('dialog') as HTMLElement;

      expect(Modal.getInstance(dialog)).toBeNull();
      expect(Modal.getOrCreateInstance(dialog)).toBeInstanceOf(Modal);
    });
  });

  describe('backdrop', () => {
    it('should not hide the modal when backdrop close is disabled', () => {
      fixtureEl.innerHTML = '<dialog class="Modal" data-spirit-close-on-backdrop-click="false"></dialog>';
      const dialog = fixtureEl.querySelector('dialog') as HTMLElement;
      const modal = new Modal(dialog);

      const event = new Event('click', { bubbles: true });
      const targetElement = modal.element;
      Object.defineProperty(event, 'target', { writable: false, value: targetElement });

      jest.spyOn(modal, 'hide');

      modal.onClick(event);

      expect(modal.hide).not.toHaveBeenCalled();
    });

    it('should hide the modal when backdrop close is not disabled', () => {
      fixtureEl.innerHTML = '<dialog class="Modal" data-spirit-close-on-backdrop-click="true"></dialog>';
      const dialog = fixtureEl.querySelector('dialog') as HTMLElement;
      const modal = new Modal(dialog);

      const event = new Event('click', { bubbles: true });
      const targetElement = modal.element;
      Object.defineProperty(event, 'target', { writable: false, value: targetElement });

      jest.spyOn(modal, 'hide');

      modal.onClick(event);

      expect(modal.hide).toHaveBeenCalled();
    });
  });
});
