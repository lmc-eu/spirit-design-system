import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import { clearFixture, getFixture } from '../../../tests/helpers/fixture';
import { CLASS_NAME_TRANSITIONING } from '../constants';
import SegmentedControl from '../SegmentedControl';

describe('SegmentedControl', () => {
  let fixtureEl: HTMLElement;
  let fixtureControl: HTMLElement;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  beforeEach(() => {
    fixtureEl.innerHTML = `
      <fieldset data-spirit-toggle="segmentedControl">
        ${[1, 2, 3]
          .map(
            (i) => `
            <input type="radio" id="segmentedControl-label-filled-${i}" name="segmented-filled" value="value-${i}" ${i === 1 ? 'checked' : ''}>
            <label for="segmentedControl-label-filled-${i}">Label Title</label>
        `,
          )
          .join('')}
      </fieldset>`;

    fixtureControl = fixtureEl.querySelector('fieldset') as HTMLElement;
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
      const instance = new SegmentedControl(fixtureControl);

      expect(instance.parent.style.getPropertyValue(`--${cssVariablePrefix}segmented-control-highlight-pos`)).toBe('2');
    });

    it('should update active position on event change', () => {
      const instance = new SegmentedControl(fixtureControl);
      const secondInput = instance.parent.querySelector('input:nth-child(3)') as HTMLElement;

      secondInput.setAttribute('checked', 'checked');
      secondInput.dispatchEvent(new Event('change'));

      expect(instance.parent.style.getPropertyValue(`--${cssVariablePrefix}segmented-control-highlight-pos`)).toBe('1');
    });

    it('should add transition class on change', () => {
      const instance = new SegmentedControl(fixtureControl);
      const secondInput = instance.parent.querySelector('input:nth-child(3)') as HTMLElement;

      secondInput.setAttribute('checked', 'checked');
      secondInput.dispatchEvent(new Event('change'));

      expect(instance.parent.classList.contains(CLASS_NAME_TRANSITIONING)).toBe(true);
    });

    it('should add init class on initialization', () => {
      const instance = new SegmentedControl(fixtureControl);

      expect(instance.parent.classList.contains('is-initialized')).toBe(true);
    });
  });
});
