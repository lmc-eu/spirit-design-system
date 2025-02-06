import { FormValidationsElement, Params } from './types';

export const findAncestor = (
  element: HTMLElement | null | undefined,
  selector: string,
): HTMLElement | null | undefined => {
  // from bottom up find the element with the className
  // eslint-disable-next-line no-cond-assign, no-param-reassign
  while ((element = element?.parentElement) && !element.matches(selector));

  return element;
};

export const fillTemplate = (message: string, params: Params) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore No index signature with a parameter of type 'string' was found on type 'Params'.
  message.replace(/\${([^{}]*)}/g, (_: string, paramIndex: string) => params[paramIndex]);

export const groupedElemCount = (input: FormValidationsElement) =>
  input.formValidations.self.form.querySelectorAll(`input[name="${input.getAttribute('name')}"]:checked`).length;

export const mergeConfig = (obj1: Record<string, unknown>, obj2: Record<string, unknown>) => {
  for (const attr in obj2) {
    if (!(attr in obj1)) {
      obj1[attr] = obj2[attr];
    }
  }

  return obj1;
};
