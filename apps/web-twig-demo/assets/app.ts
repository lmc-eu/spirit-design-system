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
import FileUploader from '@lmc-eu/spirit-web/src/js/FileUploader';

const form = document.querySelector('#form-example') as HTMLFormElement;
const uploader = document.querySelector('#example-composition');

if (form && uploader) {
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
}
