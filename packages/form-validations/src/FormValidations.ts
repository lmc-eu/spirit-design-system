import { lang } from './lang';
import { fillTemplate, findAncestor, groupedElemCount, mergeConfig } from './utils';

type Config = {
  formFieldSelector: string;
  errorClass: string;
  successClass: string;
  validationTextParentSelector: string;
  validationTextTag: string;
  validationTextClass: string;
  dataElementMessage: string;
};

const defaultConfig: Config = {
  formFieldSelector: '[data-spirit-validate]',
  errorClass: 'has-danger',
  successClass: 'has-success',
  validationTextParentSelector: '[data-spirit-validate]',
  validationTextTag: 'div',
  validationTextClass: '',
  dataElementMessage: 'validator_message',
};

const VALIDATIONS_ERROR = 'form-validations-message';
const SELECTOR = 'input:not([type^=hidden]):not([type^=submit]), select, textarea';
const ALLOWED_ATTRIBUTES = ['required', 'min', 'max', 'minlength', 'maxlength', 'pattern'];
// const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const MESSAGE_REGEX = /-message(?:-([a-z]{2}(?:_[A-Z]{2})?))?/; // matches, -message, -message-en, -message-en_US
let currentLocale = 'en';
const validators: Record<string, Validator> = {};

type Validator = {
  fn: (value: string) => boolean;
  name?: string;
  priority: number;
  halt: boolean;
  msg?: string;
};

type Message = {
  [locale: string]: {
    required: string;
    default: string;
  };
};

type Field = {
  errorElements?: HTMLElement[];
  errors?: string[];
  input: HTMLInputElement;
  messages: Message[];
  params: any;
  validators: Validator[];
};

interface FormValidationsHTMLElement extends HTMLInputElement {
  formValidations: Field;
}

type HTMLAttribute = {
  name: string;
  value: string;
};

const validate = (name: string, validator: Validator) => {
  validator.name = name;

  if (validator.priority === undefined) {
    validator.priority = 1;
  }

  validators[name] = validator;
};

// validate('text', { fn: (val) => true, priority: 0 });
validate('required', {
  fn: function (value) {
    return this.type === 'radio' || this.type === 'checkbox'
      ? groupedElemCount(this)
      : value !== undefined && value.trim() !== '';
  },
  priority: 99,
  halt: true,
});
// validate('email', { fn: (val) => !val || EMAIL_REGEX.test(val)});
// validate('number', { fn: (val) => !val || !isNaN(parseFloat(val)), priority: 2 });
// validate('integer', { fn: (val) => !val || /^\d+$/.test(val) });
// validate('minlength', { fn: (val, length) => !val || val.length >= parseInt(length) });
// validate('maxlength', { fn: (val, length) => !val || val.length <= parseInt(length) });
// validate('min', { fn: function(val, limit){ return !val || (this.type === 'checkbox' ? groupedElemCount(this) >= parseInt(limit) : parseFloat(val) >= parseFloat(limit)); } });
// validate('max', { fn: function(val, limit){ return !val || (this.type === 'checkbox' ? groupedElemCount(this) <= parseInt(limit) : parseFloat(val) <= parseFloat(limit)); } });
// validate('pattern', { fn: (val, pattern) => { let m = pattern.match(new RegExp('^/(.*?)/([gimy]*)$')); return !val || (new RegExp(m[1], m[2])).test(val);} });
// validate('equals', { fn: (val, otherFieldSelector) => { let other = document.querySelector(otherFieldSelector); return (other) && ((!val && !other.value) || (other.value === val)); } });

class FormValidations {
  config: Config;
  form: HTMLElement;
  live: boolean;
  fields: Field[];

  constructor(form: HTMLElement, config: Config, live: boolean) {
    form.setAttribute('novalidate', 'true');

    this.form = form;
    this.config = mergeConfig(config || {}, defaultConfig) as Config;
    this.live = !(live === false);
    // @ts-ignore Type 'Element' is missing the following properties from type 'HTMLInputElement': accept, align, alt, autocomplete, and 173 more.
    this.fields = Array.from(form.querySelectorAll(SELECTOR)).map((input) => {
      let fns = [] as Validator[];
      let params = {};
      let messages = {} as Message[];

      [].forEach.call(input.attributes, (attr: HTMLAttribute) => {
        if (/^data-spirit-/.test(attr.name)) {
          let name = attr.name.substr(14);
          let messageMatch = name.match(MESSAGE_REGEX);

          if (messageMatch !== null) {
            let locale = messageMatch[1] === undefined ? 'en' : messageMatch[1];

            if (!messages.hasOwnProperty(locale)) {
              // @ts-ignore index type
              messages[locale] = {};
            }

            // @ts-ignore index type
            messages[locale][name.slice(0, name.length - messageMatch[0].length)] = attr.value;

            return;
          }

          if (name === 'type') {
            name = attr.value;
          }

          this.addValidatorToField(fns, params, name, attr.value);
        } else if (~ALLOWED_ATTRIBUTES.indexOf(attr.name)) {
          this.addValidatorToField(fns, params, attr.name, attr.value);
        } else if (attr.name === 'type') {
          this.addValidatorToField(fns, params, attr.value);
        }
      });

      fns.sort((a, b) => b.priority - a.priority);

      this.live &&
        input.addEventListener(
          !~['radio', 'checkbox'].indexOf(input.getAttribute('type') || '') ? 'input' : 'change',
          (event) => {
            // @ts-ignore Argument of type 'EventTarget | null' is not assignable to parameter of type 'string | FormValidationsHTMLElement | null'.
            this.validate(event.target);
          },
        );

      // @ts-ignore Property 'formValidations' does not exist on type 'Element'.
      return (input.formValidations = { input, validators: fns, params, messages });
    });
  }

  private addValidatorToField(fns: Validator[], params: any, name: string, value: string | null = null) {
    let validator = validators[name];
    if (validator) {
      fns.push(validator);
      if (value) {
        let valueParams = name === 'pattern' ? [value] : value.split(',');
        valueParams.unshift(''); // placeholder for input's value
        params[name] = valueParams;
      }
    }
  }

  /***
   * Checks whether the form/input elements are valid
   * @param input => input element(s) or a jquery selector, null for full form validation
   * @param silent => do not show error messages, just return true/false
   * @returns {boolean} return true when valid false otherwise
   */
  public validate(input: FormValidationsHTMLElement | string | null, silent: boolean = false): boolean {
    // @ts-ignore
    silent = (input && silent === true) || input === true;
    let { fields } = this;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (input !== true && input !== false) {
      if (input instanceof HTMLElement) {
        fields = [input.formValidations];
        // @ts-ignore
      } else if (input instanceof NodeList || input instanceof Array) {
        fields = Array.from(input).map((el) => el.formValidations);
      }
    }

    let valid = true;

    for (let i = 0; fields[i]; i++) {
      const field = fields[i];

      if (FormValidations.validateField(field)) {
        // valid
        !silent && this.showSuccess(field);
      } else {
        // invalid
        valid = false;
        !silent && this.showError(field);
      }
    }
    return valid;
  }

  /***
   * Get errors of a specific field or the whole form
   * @param input
   * @returns {Array|*}
   */
  // getErrors = function (input) {
  //   if (!input) {
  //     let erroneousFields = [];
  //     for (let i = 0; i < this.fields.length; i++) {
  //       let field = this.fields[i];
  //       if (field.errors.length) {
  //         erroneousFields.push({ input: field.input, errors: field.errors });
  //       }
  //     }
  //     return erroneousFields;
  //   }
  //   if (input.tagName && input.tagName.toLowerCase() === 'select') {
  //     return input.formValidations.errors;
  //   }
  //   return input.length ? input[0].formValidations.errors : input.formValidations.errors;
  // };

  /***
   * Validates a single field, all validator functions are called and error messages are generated
   * when a validator fails
   * @param field
   * @returns {boolean}
   * @private
   */
  validateField(field: Field): boolean {
    let errors = [];
    let valid = true;

    for (let i = 0; field.validators[i]; i++) {
      let validator = field.validators[i];
      // @ts-ignore index type
      let params = field.params[validator.name] ? field.params[validator.name] : [];
      params[0] = field.input.value;

      if (!validator.fn.apply(field.input, params)) {
        valid = false;

        if (typeof validator.msg === 'function') {
          // @ts-ignore
          errors.push(validator.msg(field.input.value, params));
        } else if (typeof validator.msg === 'string') {
          errors.push(fillTemplate(validator.msg, params));
        } else if (validator.msg && validator.msg === Object(validator.msg) && validator.msg[currentLocale]) {
          // typeof generates unnecessary babel code
          errors.push(fillTemplate(validator.msg[currentLocale], params));
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore index type
        } else if (field.messages[currentLocale] && field.messages[currentLocale][validator.name]) {
          // @ts-ignore index type
          errors.push(fillTemplate(field.messages[currentLocale][validator.name], params));
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore index type
        } else if (lang[currentLocale] && lang[currentLocale][validator.name]) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore index type
          errors.push(fillTemplate(lang[currentLocale][validator.name], params));
        } else {
          // @ts-ignore index type
          errors.push(fillTemplate(lang[currentLocale].default, params));
        }

        if (validator.halt === true) {
          break;
        }
      }
    }

    field.errors = errors;

    return valid;
  }

  /***
   * Add a validator to a specific dom element in a form
   * @param elem => The dom element where the validator is applied to
   * @param fn => validator function
   * @param msg => message to show when validation fails. Supports templating. ${0} for the input's value, ${1} and
   * so on are for the attribute values
   * @param priority => priority of the validator function, higher valued function gets called first.
   * @param halt => whether validation should stop for this field after current validation function
   */
  // addValidator = function (elem, fn, msg, priority, halt) {
  //   if (elem instanceof HTMLElement) {
  //     elem.formValidations.validators.push({ fn, msg, priority, halt });
  //     elem.formValidations.validators.sort((a, b) => b.priority - a.priority);
  //   } else {
  //     console.warn('The parameter elem must be a dom element');
  //   }
  // };

  /***
   * An utility function that returns a 2-element array, first one is the element where error/success class is
   * applied. 2nd one is the element where error message is displayed. 2nd element is created if doesn't exist and cached.
   * @param field
   * @returns {*}
   * @private
   */
  private getErrorElements(field: Field) {
    if (field.errorElements) {
      return field.errorElements;
    }
    const errorClassElement = findAncestor(field.input, this.config.formFieldSelector);
    let validationTextParent = null;
    let validationTextElement = null;
    if (this.config.formFieldSelector === this.config.validationTextParentSelector) {
      validationTextParent = errorClassElement;
    } else {
      validationTextParent = errorClassElement?.querySelector<HTMLElement>(this.config.validationTextParentSelector);
    }
    if (validationTextParent) {
      validationTextElement = validationTextParent.querySelector<HTMLElement>(`.${VALIDATIONS_ERROR}`);

      if (!validationTextElement) {
        validationTextElement = document.createElement(this.config.validationTextTag);
        validationTextElement.className = `${VALIDATIONS_ERROR} ${this.config.validationTextClass}`;
        validationTextElement.dataset.element = this.config.dataElementMessage;
        validationTextParent.appendChild(validationTextElement);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore Property 'formValidationsDisplay' does not exist on type 'HTMLElement'.
        validationTextElement.formValidationsDisplay = validationTextElement.style.display;
      }
    }

    // @ts-ignore Type 'HTMLElement | null' is not assignable to type 'HTMLElement'.
    // eslint-disable-next-line no-return-assign
    return (field.errorElements = [errorClassElement, validationTextElement]);
  }

  showError(field: Field) {
    const errorElements = this.getErrorElements(field);
    const errorClassElement = errorElements[0];
    const validationTextElement = errorElements[1] as HTMLElement;

    const { input } = field;
    const inputId = input.id || Math.floor(new Date().valueOf() * Math.random());
    const errorId = `error-${inputId}`;

    if (errorClassElement) {
      if (this.config.successClass !== '') {
        errorClassElement.classList.remove(this.config.successClass);
      }
      errorClassElement.classList.add(this.config.errorClass);
      input.setAttribute('aria-describedby', errorId);
      input.setAttribute('aria-invalid', 'true');
    }
    if (validationTextElement) {
      validationTextElement.setAttribute('id', errorId);
      validationTextElement.setAttribute('role', 'alert');
      validationTextElement.innerHTML = field.errors?.join('<br/>') || '';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore Property 'formValidationsDisplay' does not exist on type 'HTMLElement'.
      validationTextElement.style.display = validationTextElement.formValidationsDisplay || '';
    }
  }

  /***
   * Adds error to a specific field
   * @param input
   * @param error
   */
  // addError = function (input, error) {
  //   input = input.length ? input[0] : input;
  //   input.formValidations.errors.push(error);
  //   this.showError(input.formValidations);
  // };

  private removeError(field: Field) {
    const errorElements = this.getErrorElements(field);
    const errorClassElement = errorElements[0];
    const validationTextElement = errorElements[1] as HTMLElement;
    const { input } = field;

    if (errorClassElement) {
      // IE > 9 doesn't support multiple class removal
      errorClassElement.classList.remove(this.config.errorClass);
      if (this.config.successClass !== '') {
        errorClassElement.classList.remove(this.config.successClass);
      }
      input.removeAttribute('aria-describedby');
      input.removeAttribute('aria-invalid');
    }
    if (validationTextElement) {
      validationTextElement.removeAttribute('id');
      validationTextElement.removeAttribute('role');
      validationTextElement.innerHTML = '';
      validationTextElement.style.display = 'none';
    }
    return errorElements;
  }

  private showSuccess(field: Field): void {
    let errorClassElement = this.removeError(field)[0];
    if (this.config.successClass !== '' && errorClassElement) {
      errorClassElement.classList.add(this.config.successClass);
    }
  }

  /***
   * Resets the errors
   */
  // reset = function () {
  //   for (let i = 0; this.fields[i]; i++) {
  //     this.fields[i].errorElements = null;
  //   }
  //   Array.from(this.form.querySelectorAll('.' + VALIDATIONS_ERROR)).map(function (elem) {
  //     elem.parentNode.removeChild(elem);
  //   });
  //   Array.from(this.form.querySelectorAll('.' + this.config.classTo)).map(function (elem) {
  //     elem.classList.remove(this.config.successClass);
  //     elem.classList.remove(this.config.errorClass);
  //   });
  // };

  /***
   * Resets the errors and deletes all formValidations fields
   */
  // destroy = () => {
  //   this.reset();
  //   this.fields.forEach(function (field) {
  //     delete field.input.formValidations;
  //   });
  //   this.fields = [];
  // };

  // setGlobalConfig = (config) => {
  //   defaultConfig = config;
  // };
}

/***
 *
 * @param name => Name of the global validator
 * @param fn => validator function
 * @param msg => message to show when validation fails. Supports templating. ${0} for the input's value, ${1} and
 * so on are for the attribute values
 * @param priority => priority of the validator function, higher valued function gets called first.
 * @param halt => whether validation should stop for this field after current validation function
 */
// FormValidations.addValidator = function (name, fn, msg, priority, halt) {
//   _(name, { fn, msg, priority, halt });
// };

// FormValidations.addMessages = function (locale, messages) {
//   let langObj = lang.hasOwnProperty(locale) ? lang[locale] : (lang[locale] = {});

//   Object.keys(messages).forEach(function (key, index) {
//     langObj[key] = messages[key];
//   });
// };

// FormValidations.setLocale = function (locale) {
//   currentLocale = locale;
// };

export default FormValidations;
