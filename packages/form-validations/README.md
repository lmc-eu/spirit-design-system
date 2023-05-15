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

````js
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

## Custom Validator

```javascript
FormValidations.addValidator(nameOrElem, handler, errorMessage, priority, halt);
````

### Add a custom validator to a field

```javascript
var formValidations = new FormValidations(document.getElementById('form1'));

var elem = document.getElementById('email');

// A validator to check if the first letter is capitalized
formValidations.addElementValidator(
  elem,
  function (value) {
    // here `this` refers to the respective input element
    if (value.length && value[0] === value[0].toUpperCase()) {
      return true;
    }
    return false;
  },
  'The first character must be capitalized',
  2,
  false,
);
```

### Add a global custom validator

```javascript
// A validator to check if the input value is within a specified range
// Global validators must be added before creating the FormValidations instance

FormValidations.addValidator(
  'my-range',
  function (value, param1, param2) {
    // here `this` refers to the respective input element
    return parseInt(param1) <= value && value <= parseInt(param2);
  },
  'The value (${0}) must be between ${1} and ${2}',
  5,
  false,
);
```

Now you can assign it to your inputs like this

```html
<input type="text" class="form-control" data-spirit-my-range="10,30" />
```

### Add custom error messages

```html
<input required data-spirit-required-message="My custom message" />
```

Add an attribute like `data-spirit-<ValidatorName>-message`with the custom message as value to show custom error messages.
You can add custom messages like this for as many validators as you need. Here `ValidatorName` means `required`, `email`, `min`, `max` etc.

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

**FormValidations.setLocale(locale)**

_Set the current locale globally_

| Parameter | Default | Required? | Description                                                                     |
| --------- | ------- | --------- | ------------------------------------------------------------------------------- |
| `locale`  | -       | ✔         | Error messages on new FormValidations forms will be displayed according to this locale |

**FormValidations.addMessages(locale, messages)**

_Set the current locale globally_

| Parameter  | Default | Required? | Description                                                         |
| ---------- | ------- | --------- | ------------------------------------------------------------------- |
| `locale`   | -       | ✔         | The corresponding locale                                            |
| `messages` | -       | ✔         | Object containing validator names as keys and error texts as values |

**FormValidations.addValidator(elem, fn, msg, priority, halt)**

_Add a custom validator_

| Parameter | Default  | Required? | Description|
| ---       | ----     |   -----   | ---        |
| `elem`| - | ✔ | The dom element where validator is applied to.|
| `fn`| - | ✔ | The function that validates the field. Value of the input field gets passed as the first parameter, and the attribute value (split using comma) as the subsequent parameters. For example, for `<input data-spirit-my-validator="10,20,dhaka" value="myValue"/>`, validator function get called like `fn("myValue", 10, 20, "dhaka")`. Inside the function `this` refers to the input element|
| `message`| - | ✔ | The message to show when the validation fails. It supports simple templating. `${0}` for the input's value, `${1}` and so on are for the attribute values. For the above example, `${0}` will get replaced by `myValue`, `${1}` by `10`, `${2}` by `20`, `${3}` by `dhaka`. It can also be a function which should return the error string. The values and inputs are available as function arguments|
| `priority`| 1 | ✕ | Priority of the validator function. The higher the value, the earlier it gets called when there are multiple validators on one field. |
| `halt`| `false` | ✕ | Whether to halt validation on the current field after this validation. When `true` after validating the current validator, rest of the validators are ignored on the current field.|

<br/>

**FormValidations.addValidator(name, fn, msg, priority, halt)**

_Add a global custom validator_

| Parameter | Default  | Required? | Description|
| ---       | ----     |   -----   | ---        |
| `name`| - | ✔ | A string, the name of the validator, you can then use `data-spirit-<NAME>` attribute in form fields to apply this validator|
| `....`| - | - | Other parameters same as above |
```
