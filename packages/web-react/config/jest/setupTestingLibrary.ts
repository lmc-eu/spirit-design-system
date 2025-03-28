/* eslint-disable no-console */
import '@testing-library/jest-dom';

const originalError = console.error;

beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);

    const testName = expect.getState().currentTestName;

    // Replace placeholders in the error message with the actual arguments values
    // For example, the message "React does not recognize the '%s' prop on a DOM element" will be replaced with the actual attribute name
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const replacePlaceholdersInErrorMessage = (message: string, messageArgs: any[]) => {
      let count = 1;

      return message.replace(/%s/g, () => {
        const result = messageArgs[count] || '%s';
        count += 1;

        return result;
      });
    };

    // Format the error message
    const formattedArgs = args.map((arg) => {
      if (typeof arg === 'string') {
        return replacePlaceholdersInErrorMessage(arg, args);
      }

      return arg;
    });

    throw new Error(`[${testName}] contains unexpected console.error. Error log details: \n${formattedArgs.join(' ')}`);
  };
});

afterAll(() => {
  console.error = originalError;
});

// jsdom not support dialog events
// @see https://github.com/jsdom/jsdom/issues/3294
beforeAll(() => {
  HTMLDialogElement.prototype.show = jest.fn(function mock(this: HTMLDialogElement) {
    this.open = true;
  });

  HTMLDialogElement.prototype.showModal = jest.fn(function mock(this: HTMLDialogElement) {
    this.open = true;
  });

  HTMLDialogElement.prototype.close = jest.fn(function mock(this: HTMLDialogElement) {
    this.open = false;
  });
});
