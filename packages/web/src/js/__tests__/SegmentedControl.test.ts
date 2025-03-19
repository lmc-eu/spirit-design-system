import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import { clearFixture, getFixture } from '../../../tests/helpers/fixture';
import SegmentedControl from '../SegmentedControl';

const calculateExpectedOffset = (
  fixtureControl: HTMLElement,
  fixtureControlPadding: number,
  fixtureActiveLabel: HTMLElement,
) => {
  const parentWidth = fixtureControl ? fixtureControl.clientWidth - fixtureControlPadding * 2 : 0;
  const expectedOffsetRight = parentWidth - (fixtureActiveLabel.offsetLeft + fixtureActiveLabel.offsetWidth);

  return -expectedOffsetRight - fixtureControlPadding;
};

describe('SegmentedControl', () => {
  let fixtureEl: HTMLElement;
  let fixtureControl: HTMLElement;
  let fixtureActiveLabel: HTMLElement;
  let fixtureControlPadding: number;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  beforeEach(() => {
    fixtureEl.innerHTML = `
      <fieldset class="SegmentedControl SegmentedControl--filled" data-spirit-toggle="segmentedControl">
        <legend class="accessibility-hidden">Label</legend>
        ${[1, 2, 3]
          .map(
            (i) => `
            <input type="radio" id="segmentedControl-label-filled-${i}" name="segmented-filled" value="value-${i}" class="SegmentedControl__input" ${i === 1 ? 'checked' : ''}>
            <label for="segmentedControl-label-filled-${i}" class="SegmentedControl__label">Label Title</label>
        `,
          )
          .join('')}
      </fieldset>`;

    fixtureControl = fixtureEl.querySelector('fieldset') as HTMLElement;
    fixtureControl.style.padding = '5px';
    fixtureControlPadding = parseFloat(getComputedStyle(fixtureControl).getPropertyValue('padding')) || 0;
    fixtureActiveLabel = fixtureControl.querySelector('.SegmentedControl__label:first-of-type') as HTMLElement;

    // Manually set the initial offsetLeft and width to simulate the actual behavior
    Object.defineProperty(fixtureControl, 'clientWidth', { value: 322, configurable: true });
    Object.defineProperty(fixtureActiveLabel, 'offsetLeft', { value: 5, configurable: true });
    Object.defineProperty(fixtureActiveLabel, 'offsetWidth', { value: 100, configurable: true });
  });

  describe('NAME', () => {
    it('should return plugin name', () => {
      expect(SegmentedControl.NAME).toBe('segmentedControl');
    });
  });

  describe('DATA_KEY', () => {
    it('should return DATA_KEY', () => {
      expect(SegmentedControl.DATA_KEY).toBe('segmentedControl');
    });
  });

  describe('constructor', () => {
    it('should set initial position on construction', () => {
      const expectedOffset = calculateExpectedOffset(fixtureControl, fixtureControlPadding, fixtureActiveLabel);

      const instance = new SegmentedControl(fixtureControl);

      expect(instance.parent.style.getPropertyValue(`--${cssVariablePrefix}segmented-control-highlight-x-pos`)).toBe(
        `${expectedOffset}px`,
      );
    });

    it('should update active position on change event', () => {
      const input = fixtureActiveLabel.nextElementSibling as HTMLElement;

      // On change event, simulate the offsetLeft change
      input?.addEventListener('change', () => {
        Object.defineProperty(fixtureActiveLabel, 'offsetLeft', { value: 111, configurable: true });
      });

      const instance = new SegmentedControl(fixtureControl);

      // Trigger the input change
      instance.parent.querySelector('input')?.dispatchEvent(new Event('change'));

      const expectedOffset = calculateExpectedOffset(fixtureControl, fixtureControlPadding, fixtureActiveLabel);

      expect(instance.parent.style.getPropertyValue(`--${cssVariablePrefix}segmented-control-highlight-x-pos`)).toBe(
        `${expectedOffset}px`,
      );
    });

    it('should update active position on resize window', () => {
      // On change event, simulate the offsetLeft change
      window.addEventListener('resize', () => {
        Object.defineProperty(fixtureActiveLabel, 'offsetLeft', { value: 111, configurable: true });
      });

      // Trigger the window resize event
      window.dispatchEvent(new Event('resize'));

      const instance = new SegmentedControl(fixtureControl);

      const expectedOffset = calculateExpectedOffset(fixtureControl, fixtureControlPadding, fixtureActiveLabel);

      expect(instance.parent.style.getPropertyValue(`--${cssVariablePrefix}segmented-control-highlight-x-pos`)).toBe(
        `${expectedOffset}px`,
      );
    });

    it('add initialized class after 300ms', () => {
      jest.useFakeTimers();
      const instance = new SegmentedControl(fixtureControl);

      instance.onInit();

      jest.advanceTimersByTime(300);

      expect(instance.parent.classList.contains('is-initialized')).toBe(true);

      jest.useRealTimers();
    });
  });
});
