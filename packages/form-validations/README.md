# @lmc-eu/spirit-form-validations

> Form validations for Web and Web-Twig packages of the Spirit Design System.

## Install

```shell
yarn add @lmc-eu/spirit-form-validations
```

or

```shell
npm install --save @lmc-eu/spirit-form-validations
```

## Usage

Include the JavaScript file in your HTML `<head>` or just before the closing `<body>` tag.

```html
<script src="dist/bundles/umd/spirit-form-validations.min.js"></script>
```

Or

```html
<script src="dist/bundles/esm/spirit-form-validations.js" type="module"></script>
```

Now create a form:

```html
<form id="form1">
  <label for="email">Email</label>
  <input type="email" id="email" required />
  <button>Subscribe</button>
</form>
```

… and validate it:

```
window.onload = () => {
    const form = document.getElementById("form1");

    // create the FormValidations instance
    const formValidations = new FormValidations(form);

    form.addEventListener('submit', function (event) {
       event.preventDefault();

       // check if the form is valid
       const valid = formValidations.validate(); // returns true or false
    });
};
```

**Profit**

It automatically validates `required`, `min`, `max`, `minlength`, `maxlength` attributes and the value of type attributes like `email`, `number` and more…
The library is built on top of native validation attributes as replace for native browser validation, not a progressive enhancement.
Using the `novalidate` attribute the library is turning off the browser validations and does the heavy lifting itself.

FormValidations takes 3 parameters:

- **form** - The form element

- **config** - An object containing the configuration. Default is Spirit's configuration which is

<a name="default-config"></a>

```js
const defaultConfig = {
  formFieldSelector: '[data-spirit-validate]',
  errorClass: 'has-danger',
  successClass: 'has-success',
  validationTextParentSelector: '[data-spirit-validate]',
  validationTextTag: 'div',
  validationTextClass: '',
  dataElementMessage: 'validation-text',
};
```

- **live** - A boolean value indicating whether FormValidations should validate as you type, default is `true`

## Built-in validators

| Name      | Usage                                                                                                           | Description                     |
| --------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| required  | `required` or `data-form-validations-required`                                                                  | Validates required fields       |
| email     | `type="email"` or `data-form-validations-type="email"`                                                          | Validates email                 |
| number    | `type="number"` or `data-form-validations-type="number"`                                                        |                                 |
| integer   | `data-form-validations-type="integer"`                                                                          |                                 |
| minlength | `minlength="10"` or `data-form-validations-minlength="10"`                                                      |                                 |
| maxlength | `maxlength="10"` or `data-form-validations-maxlength="10"`                                                      |                                 |
| min       | `min="20"` or `data-form-validations-min="20"`                                                                  |                                 |
| max       | `max="100"` or `data-form-validations-max="100"`                                                                |                                 |
| pattern   | `pattern="/[a-z]+$/i"` or `data-form-validations-pattern="/[a-z]+$/i"`, `\` must be escaped (replace with `\\`) |                                 |
| equals    | `data-form-validations-equals="#field-selector"`                                                                | Check that two fields are equal |

## API

**FormValidations(form, config, live)**

_Constructor_

| Parameter | Default                      | Required? | Description                                         |
| --------- | ---------------------------- | --------- | --------------------------------------------------- |
| form      | -                            | ✔         | The form element                                    |
| config    | [See above](#default-config) | ✕         | The config object                                   |
| live      | `true`                       | ✕         | Whether FormValidations should validate as you type |

**FormValidations.validate(inputs, silent)**

_Validate the form or field(s)_

| Parameter | Default | Required? | Description                                                                                                                                                                      |
| --------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| inputs    | -       | ✕         | When not given, the entire form is validated. Inputs can either be one DOM element or a collection of DOM elements returned by `document.getElement…`, `document.querySelector…` |
| silent    | false   | ✕         | Does not show error messages when `silent` is `true`                                                                                                                             |

**FormValidations.getErrors(input)**

_Get the errors of the form or a specific field_

| Parameter | Default | Required? | Description                                                                                                                                                                                                                                                            |
| --------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input     | -       | ✕         | When `input` is given, it returns the errors of that input element, otherwise returns all errors of the form as an object, using input element as key and corresponding errors as value. `validate()` must be called before expecting this method to return correctly. |
