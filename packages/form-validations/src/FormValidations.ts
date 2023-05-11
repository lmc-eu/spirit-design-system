// Allow use of bitwise not in this case only, other solutions do not work
/* eslint no-bitwise: ["error", { "allow": ["~"] }] */
import { lang } from './lang';
import { fillTemplate, findAncestor, groupedElemCount, mergeConfig } from './utils';
import {
  NamedValidator,
  Validator,
  Field,
  FormValidationsElement,
  FormValidationsFieldElement,
  Languages,
  ValidationTextElement,
  Params,
} from './types';

const VALIDATIONS_ERROR = 'form-validations-message';
const SELECTOR = 'input:not([type^=hidden]):not([type^=submit]), select, textarea';
const ALLOWED_ATTRIBUTES = ['required', 'min', 'max', 'minlength', 'maxlength', 'pattern'];
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const MESSAGE_REGEX = /-message(?:-([a-z]{2}(?:_[A-Z]{2})?))?/; // matches, -message, -message-en, -message-en_US
const currentLocale = 'en';
const validators: Record<string, NamedValidator> = {};
const DATA_ATTR_PREFIX = 'data-spirit';

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
  formFieldSelector: `[${DATA_ATTR_PREFIX}-validate]`,
  errorClass: 'has-danger',
  successClass: 'has-success',
  validationTextParentSelector: `[${DATA_ATTR_PREFIX}-validate]`,
  validationTextTag: 'div',
  validationTextClass: '',
  dataElementMessage: 'validator_message',
};

type HTMLAttribute = {
  name: string;
  value: string;
};

const validate = (name: string, validator: Validator) => {
  const namedValidator = { ...validator, name };

  if (namedValidator.priority == null) {
    namedValidator.priority = 1;
  }

  validators[name] = namedValidator;
};

// validate('text', { fn: (val) => true, priority: 0 });
validate('required', {
  fn(value) {
    return this.type === 'radio' || this.type === 'checkbox'
      ? groupedElemCount(this)
      : value != null && value.trim() !== '';
  },
  priority: 99,
  halt: true,
});
validate('email', { fn: (val) => !val || EMAIL_REGEX.test(val) });
validate('number', { fn: (val) => !val || !Number.isNaN(parseFloat(val)), priority: 2 });
validate('integer', { fn: (val) => !val || /^\d+$/.test(val) });
validate('minlength', { fn: (val, length) => !val || val.length >= parseInt(length, 10) });
validate('maxlength', { fn: (val, length) => !val || val.length <= parseInt(length, 10) });
validate('min', {
  fn(value: string, limit: string) {
    return (
      !value ||
      (this.type === 'checkbox'
        ? groupedElemCount(this) >= parseInt(limit, 10)
        : parseFloat(value) >= parseFloat(limit))
    );
  },
});
validate('max', {
  fn(value: string, limit: string) {
    return (
      !value ||
      (this.type === 'checkbox'
        ? groupedElemCount(this) <= parseInt(limit, 10)
        : parseFloat(value) <= parseFloat(limit))
    );
  },
});
validate('pattern', {
  fn: (value, pattern) => {
    const matched = pattern.match(/^\/(.*?)\/([gimy]*)$/) || [];

    return !value || new RegExp(matched[1], matched[2]).test(value);
  },
});
validate('equals', {
  fn: (value: string, otherFieldSelector: string) => {
    const other = document.querySelector(otherFieldSelector) as HTMLInputElement;

    return other && ((!value && !other.value) || other.value === value);
  },
});

class FormValidations {
  config: Config;
  form: HTMLElement;
  live: boolean;
  fields: Field[];

  constructor(form: HTMLElement, config?: Config, live?: boolean) {
    form.setAttribute('novalidate', 'true');

    this.form = form;
    this.config = mergeConfig(config || {}, defaultConfig) as Config;
    this.live = !(live === false);
    this.fields = this.parseFieldValidators(form);
  }

  /**
   * Checks whether the form/input elements are valid
   *
   * @param input => input element(s) or a jquery selector, null for full form validation
   * @param silent => do not show error messages, just return true/false
   * @returns {boolean} return true when valid false otherwise
   */
  public validate(input: FormValidationsElement | EventTarget | string | null, silent = false): boolean {
    const isSilent = input && silent === true;

    let { fields } = this;
    if (Boolean(input) !== true && Boolean(input) !== false) {
      if (input instanceof HTMLElement) {
        fields = [input.formValidations];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter.
      } else if (input instanceof NodeList || input instanceof Array) {
        fields = Array.from(input).map((el) => el.formValidations);
      }
    }

    let valid = true;

    for (let i = 0; fields[i]; i++) {
      const field = fields[i];

      if (FormValidations.validateField(field)) {
        // valid
        !isSilent && this.showSuccess(field);
      } else {
        // invalid
        valid = false;
        !isSilent && this.showError(field);
      }
    }

    return valid;
  }

  private parseFieldValidators(form: HTMLElement): Field[] {
    return Array.from(form.querySelectorAll(SELECTOR) as unknown as FormValidationsElement[]).map(
      (input: FormValidationsElement) => {
        const validatorCallbacks = [] as NamedValidator[];
        const params = {};
        const messages = {} as Languages;

        Array.from(input.attributes).forEach((attribute: HTMLAttribute) => {
          if (/^data-spirit-/.test(attribute.name)) {
            let name = attribute.name.replace(`${DATA_ATTR_PREFIX}-`, '');
            const messageMatch = name.match(MESSAGE_REGEX);

            if (messageMatch !== null) {
              const locale = messageMatch[1] == null ? 'en' : messageMatch[1];

              // eslint-disable-next-line no-prototype-builtins
              if (!messages.hasOwnProperty(locale)) {
                messages[locale] = {};
              }

              messages[locale][name.slice(0, name.length - messageMatch[0].length)] = attribute.value;

              return;
            }

            if (name === 'type') {
              name = attribute.value;
            }

            FormValidations.addValidatorToField(validatorCallbacks, params, name, attribute.value);
          } else if (~ALLOWED_ATTRIBUTES.indexOf(attribute.name)) {
            FormValidations.addValidatorToField(validatorCallbacks, params, attribute.name, attribute.value);
          } else if (attribute.name === 'type') {
            FormValidations.addValidatorToField(validatorCallbacks, params, attribute.value);
          }
        });

        validatorCallbacks.sort((a, b) => b.priority - a.priority);

        this.addLiveEventListener(input);

        input.formValidations = { input, validators: validatorCallbacks, params, messages, self: this };

        return input.formValidations;
      },
    );
  }

  private static addValidatorToField(fns: NamedValidator[], params: Params, name: string, value: string | null = null) {
    const validator = validators[name];
    if (validator) {
      fns.push(validator);
      if (value) {
        const valueParams = name === 'pattern' ? [value] : value.split(',');
        valueParams.unshift(''); // placeholder for input's value
        // params[name] = valueParams;
        if (typeof params === 'object' && !Array.isArray(params)) {
          const updatedParams = params as Record<string, string[] | string>;
          updatedParams[name] = valueParams;
        }
      }
    }
  }

  private addLiveEventListener(input: FormValidationsFieldElement) {
    this.live &&
      input.addEventListener(
        !~['radio', 'checkbox'].indexOf(input.getAttribute('type') || '') ? 'input' : 'change',
        (event) => {
          this.validate(event.target);
        },
      );
  }

  /**
   * Get errors of a specific field or the whole form
   *
   * @param input
   * @returns {Array|*}
   */
  public getErrors(input?: HTMLInputElement) {
    if (!input) {
      const erroneousFields = [];
      for (let i = 0; i < this.fields.length; i++) {
        const field = this.fields[i];
        if (field.errors?.length) {
          erroneousFields.push({ input: field.input, errors: field.errors });
        }
      }

      return erroneousFields;
    }
    if (input.tagName && input.tagName.toLowerCase() === 'select') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore Property 'formValidationsDisplay' does not exist on type 'HTMLElement'.
      return input.formValidations.errors;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Property 'formValidationsDisplay' does not exist on type 'HTMLElement'.
    return input.length ? input[0].formValidations.errors : input.formValidations.errors;
  }

  /**
   * Validates a single field, all validator functions are called and error messages are generated
   * when a validator fails
   *
   * @param field
   * @returns {boolean}
   * @private
   */
  static validateField(field: Field): boolean {
    const errors = [];
    let valid = true;

    for (let i = 0; field.validators[i]; i++) {
      const validator = field.validators[i];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore index type
      const params = field.params[validator.name] ? field.params[validator.name] : [];
      params[0] = field.input.value;

      if (!validator.fn.apply(field.input, params)) {
        valid = false;

        if (typeof validator.msg === 'function') {
          errors.push(validator.msg(field.input.value, params));
        } else if (typeof validator.msg === 'string') {
          errors.push(fillTemplate(validator.msg, params));
        } else if (validator.msg && validator.msg === Object(validator.msg) && validator.msg[currentLocale]) {
          // typeof generates unnecessary babel code
          errors.push(fillTemplate(validator.msg[currentLocale], params));
        } else if (field.messages?.[currentLocale]?.[validator.name]) {
          errors.push(fillTemplate(field.messages[currentLocale][validator.name], params));
        } else if (lang[currentLocale] && lang[currentLocale][validator.name]) {
          errors.push(fillTemplate(lang[currentLocale][validator.name], params));
        } else {
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

  /**
   * Add a validator to a specific dom element in a form
   *
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

  /**
   * An utility function that returns a 2-element array, first one is the element where error/success class is
   * applied. 2nd one is the element where error message is displayed. 2nd element is created if doesn't exist and cached.
   *
   * @param field Field
   * @returns {*} ErrorElement[]
   */
  private getErrorElements(field: Field) {
    if (field.errorElements) {
      return field.errorElements;
    }
    const errorClassElement = findAncestor(field.input, this.config.formFieldSelector);
    let validationTextParent = null;
    let validationTextElement: ValidationTextElement | null = null;
    if (this.config.formFieldSelector === this.config.validationTextParentSelector) {
      validationTextParent = errorClassElement;
    } else {
      validationTextParent = errorClassElement?.querySelector<HTMLElement>(this.config.validationTextParentSelector);
    }
    if (validationTextParent) {
      validationTextElement = validationTextParent.querySelector<ValidationTextElement>(`.${VALIDATIONS_ERROR}`);

      if (!validationTextElement) {
        validationTextElement = document.createElement(this.config.validationTextTag) as ValidationTextElement;
        validationTextElement.className = `${VALIDATIONS_ERROR} ${this.config.validationTextClass}`;
        validationTextElement.dataset.element = this.config.dataElementMessage;
        validationTextParent.appendChild(validationTextElement);
        validationTextElement.formValidationsDisplay = validationTextElement.style.display;
      }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Type 'HTMLElement | null | undefined' is not assignable to type 'undefined'. Type 'null' is not assignable to type 'undefined'.ts(2322)
    field.errorElements = [errorClassElement, validationTextElement];

    return field.errorElements;
  }

  showError(field: Field) {
    const errorElements = this.getErrorElements(field);
    const hasErrorElements = Array.isArray(errorElements);
    const errorClassElement = hasErrorElements ? errorElements[0] : null;
    const validationTextElement = hasErrorElements ? (errorElements[1] as ValidationTextElement) : null;

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
      validationTextElement.style.display = validationTextElement.formValidationsDisplay || '';
    }
  }

  /**
   * Adds error to a specific field
   *
   * @param input
   * @param error
   * @param field
   */
  // addError = function (input, error) {
  //   input = input.length ? input[0] : input;
  //   input.formValidations.errors.push(error);
  //   this.showError(input.formValidations);
  // };

  private removeError(field: Field) {
    const errorElements = this.getErrorElements(field);
    const hasErrorElements = Array.isArray(errorElements);
    const errorClassElement = hasErrorElements ? errorElements[0] : null;
    const validationTextElement = hasErrorElements ? (errorElements[1] as ValidationTextElement) : null;
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
    const errorElements = this.removeError(field);
    const errorClassElement = Array.isArray(errorElements) ? errorElements[0] : null;
    if (this.config.successClass !== '' && errorClassElement) {
      errorClassElement.classList.add(this.config.successClass);
    }
  }

  /**
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

  /**
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

/**
 *
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
