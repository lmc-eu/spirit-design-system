/* eslint-disable no-console */
import '@testing-library/jest-dom';

jest.mock('../../src/context/IconsContext', () => {
  // Provide a default icon map for all unit tests (as-if IconsProvider was used globally).
  // Individual tests can still override this via <IconsProvider value={...}>.
  type ReactLike = {
    createContext: <T>(defaultValue: T) => {
      Provider: unknown;
      Consumer: unknown;
    };
  };

  const React = jest.requireActual('react') as ReactLike;

  const icons = new Proxy(
    {},
    {
      get: (_target, prop) => {
        if (typeof prop !== 'string' || prop.length === 0) return undefined;

        return '<svg viewBox="0 0 24 24" aria-hidden="true"></svg>';
      },
    },
  );

  const IconsContext = React.createContext(icons);

  return {
    __esModule: true,
    default: IconsContext,
    IconsProvider: IconsContext.Provider,
    IconsConsumer: IconsContext.Consumer,
  };
});

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
