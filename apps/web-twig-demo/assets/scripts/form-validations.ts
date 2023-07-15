// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions, no-unused-vars
import FormValidations from '@lmc-eu/spirit-form-validations/src';

window.onload = () => {
  FormValidations.addValidator(
    'my-range',
    (value, param1, param2) => {
      return parseInt(param1, 10) <= value && value <= parseInt(param2, 10);
    },
    'The value (${0}) must be between ${1} and ${2}',
    5,
    false,
  );

  const specificElement = document.getElementById('custom-field-specific-validator');

  const demoFormIds = ['form1'];

  demoFormIds.forEach((id) => {
    const form = document.getElementById(id);
    // create the form validations instance
    const formValidations = new FormValidations(form);
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // check if the form is valid
      formValidations.validate(); // returns true or false
    });
  });

  FormValidations.addElementValidator(
    specificElement,
    (value, element) => {
      if (value.length && value[0] === value[0].toUpperCase()) {
        return true;
      }

      return false;
    },
    'The first character must be capitalized',
    2,
    false,
  );
};
