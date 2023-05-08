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
});
