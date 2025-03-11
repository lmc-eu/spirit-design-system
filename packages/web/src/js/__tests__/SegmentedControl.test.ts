import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import { fireEvent } from '@testing-library/dom';
import { clearFixture, getFixture } from '../../../tests/helpers/fixture';
import SegmentedControl from '../SegmentedControl';

describe('SegmentedControl', () => {
  let fixtureEl: HTMLElement;
  let fixtureControl: HTMLElement;
  let fixtureActiveItem: HTMLElement;
  let fixtureControlPaddingLeft: number;

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
          <div class="SegmentedControl__item">
            <input type="radio" id="segmentedControl-label-filled-${i}" name="segmented-filled" value="value-${i}" class="SegmentedControl__input" ${i === 1 ? 'checked' : ''}>
            <label for="segmentedControl-label-filled-${i}" class="SegmentedControl__label">Label Title</label>
          </div>
        `,
          )
          .join('')}
      </fieldset>`;

    fixtureControl = fixtureEl.querySelector('fieldset') as HTMLElement;
    fixtureControl.style.paddingLeft = '5px';
    fixtureControlPaddingLeft = parseFloat(getComputedStyle(fixtureControl).getPropertyValue('padding-left')) || 0;
    fixtureActiveItem = fixtureControl.querySelector('.SegmentedControl__item') as HTMLElement;

    // Manually set the initial offsetLeft to simulate the actual behavior
    Object.defineProperty(fixtureActiveItem, 'offsetLeft', { value: 5, configurable: true });
  });

  describe('NAME', () => {
    it('should return plugin name', () => {
      expect(SegmentedControl.NAME).toBe('segmentedControl');
    });
  });

  describe('constructor', () => {
    it('should set initial position on construction', () => {
      const expectedOffsetLeft = fixtureActiveItem.offsetLeft - fixtureControlPaddingLeft;
      const instance = new SegmentedControl(fixtureControl);

      expect(instance.parent.style.getPropertyValue(`--${cssVariablePrefix}segmented-control-highlight-x-pos`)).toBe(
        `${expectedOffsetLeft}px`,
      );
    });

    it('should update active position on change event', () => {
      const input = fixtureEl.querySelector('.SegmentedControl__input') as HTMLElement;

      // On change event, simulate the offsetLeft change
      input.addEventListener('change', () => {
        Object.defineProperty(fixtureActiveItem, 'offsetLeft', { value: 105, configurable: true });
      });

      // Trigger the change event
      fireEvent.change(input);

      const expectedOffsetLeft = fixtureActiveItem.offsetLeft - fixtureControlPaddingLeft;
      const instance = new SegmentedControl(fixtureControl);

      expect(instance.parent.style.getPropertyValue(`--${cssVariablePrefix}segmented-control-highlight-x-pos`)).toBe(
        `${expectedOffsetLeft}px`,
      );
    });

    it('should update active position on resize window', () => {
      // On change event, simulate the offsetLeft change
      window.addEventListener('resize', () => {
        Object.defineProperty(fixtureActiveItem, 'offsetLeft', { value: 105, configurable: true });
      });

      // Trigger the window resize event
      window.dispatchEvent(new Event('resize'));

      const expectedOffsetLeft = fixtureActiveItem.offsetLeft - fixtureControlPaddingLeft;
      const instance = new SegmentedControl(fixtureControl);

      expect(instance.parent.style.getPropertyValue(`--${cssVariablePrefix}segmented-control-highlight-x-pos`)).toBe(
        `${expectedOffsetLeft}px`,
      );
    });
  });
});
