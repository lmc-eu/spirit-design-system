import { Languages } from './types';

export const lang: Languages = {
  en: {
    required: 'This field is required',
    default: 'Please enter a correct value',
    email: 'This field requires a valid e-mail address',
    number: 'This field requires a number',
    integer: 'This field requires an integer value',
    url: 'This field requires a valid website URL',
    tel: 'This field requires a valid telephone number',
    maxlength: `This fields length must be < ${1}`,
    minlength: `This fields length must be > ${1}`,
    min: `Minimum value for this field is ${1}`,
    max: `Maximum value for this field is ${1}`,
    pattern: 'Please match the requested format',
    equals: 'The two fields do not match',
  },
};
