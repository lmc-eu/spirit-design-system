export const findAncestor = (
  element: HTMLElement | null | undefined,
  selector: string,
): HTMLElement | null | undefined => {
  // from bottom up find the element with the className
  // eslint-disable-next-line no-cond-assign, no-param-reassign
  while ((element = element?.parentElement) && !element.matches(selector));

  return element;
};

export const fillTemplate = (message: string, params: Record<string, string>) =>
  message.replace(/\${([^{}]*)}/g, (a: string, b: string) => params[b]);

export const groupedElemCount = (input: any) => {
  return input.formValidations.self.form.querySelectorAll(`input[name="${input.getAttribute('name')}"]:checked`).length;
};

export const mergeConfig = (obj1: Record<string, unknown>, obj2: Record<string, unknown>) => {
  for (const attr in obj2) {
    if (!(attr in obj1)) {
      obj1[attr] = obj2[attr];
    }
  }

  return obj1;
};
