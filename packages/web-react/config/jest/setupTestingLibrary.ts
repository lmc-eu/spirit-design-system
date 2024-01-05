/* eslint-disable no-console */
import '@testing-library/jest-dom';

const originalError = console.error;
let originalScrollTo: typeof window.scrollTo;

beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };

  originalScrollTo = window.scrollTo;
  window.scrollTo = jest.fn();
});

afterAll(() => {
  console.error = originalError;
  window.scrollTo = originalScrollTo;
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
