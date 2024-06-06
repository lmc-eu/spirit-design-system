import Offcanvas from '../Offcanvas';
import EventHandler from '../dom/EventHandler';
import { clearFixture, getFixture } from '../../../tests/helpers/fixture';

describe('Offcanvas', () => {
  let fixtureEl: HTMLElement;

  beforeAll(() => {
    fixtureEl = getFixture();
    // Dialog element do not work in Jest tests due to issue in jsdom
    // `TypeError: this.element.showModal is not a function`
    // @see: https://github.com/jsdom/jsdom/issues/3294
    HTMLDialogElement.prototype.show = jest.fn();
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
  });

  afterEach(() => {
    clearFixture();
    jest.clearAllMocks();
  });

  describe('toggle', () => {
    it('should call show method if show class is not present', () => {
      fixtureEl.innerHTML = [
        '<button id="btn" data-spirit-toggle="offcanvas"></button>',
        '<dialog class="offcanvas"></dialog>',
      ].join('');

      const offCanvasEl = fixtureEl.querySelector('.offcanvas') as HTMLElement;
      const triggerEl = fixtureEl.querySelector('button') as HTMLElement;
      const offCanvas = new Offcanvas(offCanvasEl);

      const spy = jest.spyOn(offCanvas, 'show');

      offCanvas.toggle(triggerEl);

      expect(spy).toHaveBeenCalled();
    });

    it('should call hide method if show class is present', async () => {
      fixtureEl.innerHTML = [
        '<button id="btn" data-spirit-toggle="offcanvas"></button>',
        '<dialog class="offcanvas"></dialog>',
      ].join('');

      const offCanvasEl = fixtureEl.querySelector('.offcanvas') as HTMLElement;
      const triggerEl = fixtureEl.querySelector('button') as HTMLElement;
      const offCanvas = new Offcanvas(offCanvasEl);

      offCanvasEl.addEventListener('shown.offcanvas', () => {
        expect(offCanvasEl).toHaveClass('is-open');
        const spy = jest.spyOn(offCanvas, 'hide');

        offCanvas.toggle(triggerEl);

        expect(spy).toHaveBeenCalled();
      });

      await offCanvas.show(triggerEl);
    });
  });

  describe('show', () => {
    it('should do nothing if already shown', async () => {
      fixtureEl.innerHTML = [
        '<button id="btn" data-spirit-toggle="offcanvas""></button>',
        '<dialog class="offcanvas"></dialog>',
      ].join('');

      const offCanvasEl = fixtureEl.querySelector('.offcanvas') as HTMLElement;
      const triggerEl = fixtureEl.querySelector('button') as HTMLElement;
      const offCanvas = new Offcanvas(offCanvasEl);
      await offCanvas.show(triggerEl);

      expect(offCanvasEl).toHaveClass('is-open');

      const spyShow = jest.spyOn(offCanvas, 'show');
      const spyTrigger = jest.spyOn(EventHandler, 'trigger');
      await offCanvas.show(triggerEl);

      expect(spyTrigger).not.toHaveBeenCalled();
      expect(spyShow).toHaveBeenCalled();
    });

    it('should show a hidden element', async () => {
      fixtureEl.innerHTML = [
        '<button id="btn" data-spirit-toggle="offcanvas"></button>',
        '<dialog class="offcanvas"></dialog>',
      ].join('');

      const offCanvasEl = fixtureEl.querySelector('.offcanvas') as HTMLElement;
      const triggerEl = fixtureEl.querySelector('button') as HTMLElement;
      const offCanvas = new Offcanvas(offCanvasEl);
      const spy = jest.spyOn(offCanvas, 'show');

      offCanvasEl.addEventListener('shown.offcanvas', () => {
        expect(offCanvasEl).toHaveClass('is-open');
        expect(spy).toHaveBeenCalled();
      });

      await offCanvas.show(triggerEl);
    });

    it('should not fire shown when show is prevented', async () => {
      fixtureEl.innerHTML = [
        '<button id="btn" data-spirit-toggle="offcanvas"></button>',
        '<dialog class="offcanvas"></dialog>',
      ].join('');

      const offCanvasEl = fixtureEl.querySelector('.offcanvas') as HTMLElement;
      const triggerEl = fixtureEl.querySelector('button') as HTMLElement;
      const offCanvas = new Offcanvas(offCanvasEl);
      const spy = jest.spyOn(offCanvas, 'show');

      const expectEnd = () => {
        setTimeout(() => {
          expect(spy).not.toHaveBeenCalled();
        }, 10);
      };

      offCanvasEl.addEventListener('show.offcanvas', (event) => {
        event.preventDefault();
        expectEnd();
      });

      offCanvasEl.addEventListener('shown.offcanvas', () => {
        return new Error('should not fire shown event');
      });

      await offCanvas.show(triggerEl);
    });
  });

  describe('hide', () => {
    it('should add `hiding` class during closing and remover `show` & `hiding` classes on end', async () => {
      fixtureEl.innerHTML = [
        '<button id="btn" data-spirit-toggle="offcanvas"></button>',
        '<dialog class="offcanvas"></dialog>',
      ].join('');

      const offCanvasEl = fixtureEl.querySelector('.offcanvas') as HTMLElement;
      const triggerEl = fixtureEl.querySelector('button') as HTMLElement;
      const offCanvas = new Offcanvas(offCanvasEl);

      offCanvasEl.addEventListener('hide.offcanvas', () => {
        expect(offCanvasEl).not.toHaveClass('showing');
        expect(offCanvasEl).toHaveClass('show');
      });

      offCanvasEl.addEventListener('hidden.offcanvas', () => {
        expect(offCanvasEl).not.toHaveClass('hiding');
        expect(offCanvasEl).not.toHaveClass('show');
      });

      await offCanvas.show(triggerEl);
      offCanvasEl.addEventListener('shown.offcanvas', () => {
        offCanvas.hide();
        expect(offCanvasEl).not.toHaveClass('showing');
        expect(offCanvasEl).toHaveClass('hiding');
      });
    });

    it('should do nothing if already shown', () => {
      fixtureEl.innerHTML = '<dialog class="offcanvas"></dialog>';

      const spyTrigger = jest.spyOn(EventHandler, 'trigger');

      const offCanvasEl = fixtureEl.querySelector('dialog') as HTMLElement;
      const offCanvas = new Offcanvas(offCanvasEl);
      const spyHide = jest.spyOn(offCanvas, 'hide');

      offCanvas.hide();
      expect(spyHide).toHaveBeenCalled();
      expect(spyTrigger).not.toHaveBeenCalled();
    });

    it('should hide a shown element', async () => {
      fixtureEl.innerHTML = [
        '<button id="btn" data-spirit-toggle="offcanvas"></button>',
        '<dialog class="offcanvas"></dialog>',
      ].join('');

      const offCanvasEl = fixtureEl.querySelector('dialog') as HTMLElement;
      const triggerEl = fixtureEl.querySelector('button') as HTMLElement;
      const offCanvas = new Offcanvas(offCanvasEl);
      const spy = jest.spyOn(offCanvas, 'hide');
      await offCanvas.show(triggerEl);

      offCanvasEl.addEventListener('hidden.offcanvas', () => {
        expect(offCanvasEl).not.toHaveClass('show');
        expect(spy).toHaveBeenCalled();
      });

      await offCanvas.hide();
    });

    it('should not fire hidden when hide is prevented', async () => {
      fixtureEl.innerHTML = [
        '<button id="btn" data-spirit-toggle="offcanvas"></button>',
        '<dialog class="offcanvas"></dialog>',
      ].join('');

      const offCanvasEl = fixtureEl.querySelector('dialog') as HTMLElement;
      const triggerEl = fixtureEl.querySelector('button') as HTMLElement;
      const offCanvas = new Offcanvas(offCanvasEl);
      const spy = jest.spyOn(offCanvas, 'hide');

      await offCanvas.show(triggerEl);

      const expectEnd = () => {
        setTimeout(() => {
          expect(spy).not.toHaveBeenCalled();
        }, 10);
      };

      offCanvasEl.addEventListener('hide.offcanvas', (event) => {
        event.preventDefault();
        expectEnd();
      });

      offCanvasEl.addEventListener('hidden.offcanvas', () => {
        return new Error('should not fire hidden event');
      });

      await offCanvas.hide();
    });
  });

  describe('data-spirit-api', () => {
    it('should not prevent event for input', async () => {
      fixtureEl.innerHTML = [
        '<input type="checkbox" data-spirit-toggle="offcanvas" data-spirit-target="#offcanvas-div-1">',
        '<dialog id="offcanvas-div-1" class="offcanvas"></dialog>',
      ].join('');

      const target = fixtureEl.querySelector('input') as HTMLInputElement;
      const offCanvasEl = fixtureEl.querySelector('#offcanvas-div-1') as HTMLElement;

      offCanvasEl.addEventListener('shown.offcanvas', () => {
        expect(offCanvasEl).toHaveClass('show');
        expect(target.checked).toBeTruthy();
      });

      await target.click();
    });

    it('should not call toggle on disabled elements', () => {
      fixtureEl.innerHTML = [
        '<a href="#" data-spirit-toggle="offcanvas" data-spirit-target="#offcanvas-div-1" class="disabled"></a>',
        '<div id="offcanvas-div-1" class="offcanvas"></div>',
      ].join('');

      const target = fixtureEl.querySelector('a') as HTMLElement;

      const spy = jest.spyOn(Offcanvas.prototype, 'toggle');

      target.click();

      expect(spy).not.toHaveBeenCalled();
    });

    it('should call hide first, if another offcanvas is open', async () => {
      fixtureEl.innerHTML = [
        '<button id="btn-2" data-spirit-toggle="offcanvas" data-spirit-target="#offcanvas-2"></button>',
        '<dialog id="offcanvas-1" class="offcanvas"></dialog>',
        '<dialog id="offcanvas-2" class="offcanvas"></dialog>',
      ].join('');

      const trigger2 = fixtureEl.querySelector('#btn-2') as HTMLElement;
      const offcanvasEl1 = document.querySelector('#offcanvas-1') as HTMLElement;
      const offcanvasEl2 = document.querySelector('#offcanvas-2') as HTMLElement;
      const offcanvas1 = new Offcanvas(offcanvasEl1);

      offcanvasEl1.addEventListener('shown.offcanvas', () => {
        trigger2.click();
      });
      offcanvasEl1.addEventListener('hidden.offcanvas', () => {
        expect(Offcanvas.getInstance(offcanvasEl2)).not.toBeNull();
      });

      await offcanvas1.show(trigger2);
    });

    it('should focus on trigger element after closing offcanvas', async () => {
      fixtureEl.innerHTML = [
        '<button id="btn" data-spirit-toggle="offcanvas" data-spirit-target="#offcanvas"></button>',
        '<div id="offcanvas" class="offcanvas"></div>',
      ].join('');

      const trigger = fixtureEl.querySelector('#btn') as HTMLElement;
      const offcanvasEl = fixtureEl.querySelector('#offcanvas') as HTMLElement;
      const offcanvas = new Offcanvas(offcanvasEl);
      const spy = jest.spyOn(trigger, 'focus');

      offcanvasEl.addEventListener('shown.offcanvas', () => {
        offcanvas.hide();
      });
      offcanvasEl.addEventListener('hidden.offcanvas', () => {
        setTimeout(() => {
          expect(spy).toHaveBeenCalled();
        }, 5);
      });

      await trigger.click();
    });

    it('should not focus on trigger element after closing offcanvas, if it is not visible', async () => {
      fixtureEl.innerHTML = [
        '<button id="btn" data-spirit-toggle="offcanvas" data-spirit-target="#offcanvas"></button>',
        '<div id="offcanvas" class="offcanvas"></div>',
      ].join('');

      const trigger = fixtureEl.querySelector('#btn') as HTMLElement;
      const offcanvasEl = fixtureEl.querySelector('#offcanvas') as HTMLElement;
      const offcanvas = new Offcanvas(offcanvasEl);
      const spy = jest.spyOn(trigger, 'focus');

      offcanvasEl.addEventListener('shown.bs.offcanvas', () => {
        trigger.style.display = 'none';
        offcanvas.hide();
      });
      offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
        setTimeout(() => {
          expect(spy).not.toHaveBeenCalled();
        }, 5);
      });

      await trigger.click();
    });
  });

  describe('getInstance', () => {
    it('should return offcanvas instance', () => {
      fixtureEl.innerHTML = '<div></div>';

      const div = fixtureEl.querySelector('div') as HTMLElement;
      const offCanvas = new Offcanvas(div);

      expect(Offcanvas.getInstance(div)).toEqual(offCanvas);
      expect(Offcanvas.getInstance(div)).toBeInstanceOf(Offcanvas);
    });

    it('should return null when there is no offcanvas instance', () => {
      fixtureEl.innerHTML = '<div></div>';

      const div = fixtureEl.querySelector('div') as HTMLElement;

      expect(Offcanvas.getInstance(div)).toBeNull();
    });
  });

  describe('getOrCreateInstance', () => {
    it('should return offcanvas instance', () => {
      fixtureEl.innerHTML = '<div></div>';

      const div = fixtureEl.querySelector('div') as HTMLElement;
      const offcanvas = new Offcanvas(div);

      expect(Offcanvas.getOrCreateInstance(div)).toEqual(offcanvas);
      expect(Offcanvas.getInstance(div)).toEqual(Offcanvas.getOrCreateInstance(div));
      expect(Offcanvas.getOrCreateInstance(div)).toBeInstanceOf(Offcanvas);
    });

    it('should return new instance when there is no Offcanvas instance', () => {
      fixtureEl.innerHTML = '<div></div>';

      const div = fixtureEl.querySelector('div') as HTMLElement;

      expect(Offcanvas.getInstance(div)).toBeNull();
      expect(Offcanvas.getOrCreateInstance(div)).toBeInstanceOf(Offcanvas);
    });
  });
});
