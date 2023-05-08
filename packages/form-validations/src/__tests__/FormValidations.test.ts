import FormValidations, { FormValidationsHTMLElement } from '../FormValidations';

describe('FormValidations', () => {
  describe('required', () => {
    beforeEach(() => {
      const fixture = `
      <div id="fixture">
        <form id="form" novalidate method="post">
          <div class="form-group" data-spirit-validate>
            <input id="input" type="text" required class="form-control" />
            <textarea id="textarea" required class="form-control" ></textarea>
            <select id="select" required class="form-control">
              <option value="">-----</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
            </select>

            <input id="checkbox" type="checkbox" name="future" required />
            <input id="ch2" type="checkbox" name="future" required />
            <input id="ch3" type="checkbox" name="future" required />
          </div>
        </form>
      </div>`;

      document.body.insertAdjacentHTML('afterbegin', fixture);
    });

    afterEach(() => {
      document.body.removeChild(document.getElementById('fixture') as HTMLDivElement);
    });

    for (const id of ['input', 'textarea', 'select']) {
      it(`should validate required attribute on ${id}`, () => {
        const form = document.getElementById('fixture') as HTMLElement;
        const input = document.getElementById(id) as FormValidationsHTMLElement;
        const formValidations = new FormValidations(form);

        expect(formValidations.validate(input)).toBe(false);

        expect(formValidations.getErrors(input)).toHaveLength(1);
        expect(formValidations.getErrors(input)[0]).toBe('This field is required');

        input.value = 'bangladesh';
        expect(formValidations.validate(input)).toBe(true);
      });
    }

    it(`should validate required attribute on checkbox`, () => {
      const form = document.getElementById('fixture') as HTMLElement;
      const input = document.getElementById('checkbox') as FormValidationsHTMLElement;
      const formValidations = new FormValidations(form);

      expect(formValidations.validate(input)).toBe(false);

      expect(formValidations.getErrors(input)).toHaveLength(1);
      expect(formValidations.getErrors(input)[0]).toBe('This field is required');

      input.checked = true;
      expect(formValidations.validate(input)).toBe(true);

      input.checked = false;
      expect(formValidations.validate(input)).toBe(false);

      (document.getElementById('checkbox') as HTMLInputElement).checked = true;
      expect(formValidations.validate(input)).toBe(true);
    });
  });

  describe('max/min', () => {
    beforeEach(() => {
      const fixture = `
        <div id="fixture">
          <form id="form" novalidate method="post">
            <div class="form-group" data-spirit-validate>
              <input id="min-input" min="10" type="number" class="form-control" />
              <input id="max-input" max="100" type="number" class="form-control" />
              <input id="min-max-input" min="10" max="100" type="number" class="form-control" />
            </div>
          </form>
        </div>`;

      document.body.insertAdjacentHTML('afterbegin', fixture);
    });

    afterEach(() => {
      document.body.removeChild(document.getElementById('fixture') as HTMLDivElement);
    });

    it('should validate min (max) when empty', () => {
      const form = document.getElementById('fixture') as HTMLDivElement;
      const formValidations = new FormValidations(form);

      expect(formValidations.validate()).toBe(true);
    });

    it('should validate min value', () => {
      const form = document.getElementById('fixture') as HTMLDivElement;
      const input = document.getElementById('min-input') as HTMLInputElement;
      const formValidations = new FormValidations(form);

      input.value = '9';
      expect(formValidations.validate()).toBe(false);
      expect(formValidations.getErrors()[0].errors).toHaveLength(1);

      input.value = '10';
      expect(formValidations.validate()).toBe(true);

      input.value = '11';
      expect(formValidations.validate()).toBe(true);
    });

    it('should validate the max value', () => {
      const form = document.getElementById('fixture') as HTMLDivElement;
      const input = document.getElementById('max-input') as FormValidationsHTMLElement;
      const formValidations = new FormValidations(form);

      for (const item of [
        [99, true],
        [100, true],
        [101, false],
      ]) {
        input.value = item[0].toString();

        expect(formValidations.validate(input, true)).toBe(item[1]);
      }
    });
  });
});
