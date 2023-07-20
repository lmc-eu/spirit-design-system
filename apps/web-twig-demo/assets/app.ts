/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import '@lmc-eu/spirit-web/src/js/index.esm';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions, no-unused-vars
import FormValidations from '@lmc-eu/spirit-form-validations/src';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions, no-unused-vars
import FileUploader from '@lmc-eu/spirit-web/src/js/FileUploader';

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

  const demoFormIds = ['form1', 'form2', 'form3', 'form4', 'form5'];

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

const form = document.querySelector('#form-example') as HTMLFormElement;
const uploader = document.querySelector('#example-composition');
const fileUploader = FileUploader.createInstance(uploader) as FileUploader;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log('form element', form);
  console.log('form data', formData);
  console.log('file queue', fileUploader.getFileQueue);

  // Clear after submit
  setTimeout(() => {
    fileUploader.clearFileQueue();
    console.log('file queue after submit', fileUploader.getFileQueue);
  }, 250);
});
