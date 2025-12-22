/* eslint-disable no-console */
import '@testing-library/jest-dom';

const originalError = console.error;
const originalWarn = console.warn;

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

  console.warn = (...args) => {
    // Silence noisy warnings caused by missing IconsProvider in unit tests.
    // We intentionally do not require consumers to provide real icon assets in unit tests.
    if (
      typeof args[0] === 'string' &&
      /Warning:\s+The\s+.+\s+icon\s+is\s+missing\s+from\s+your\s+assets\s+or\s+icon\s+map\s+provided\s+by\s+the\s+IconsProvider\./.test(
        args[0],
      )
    ) {
      return;
    }

    originalWarn.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});
