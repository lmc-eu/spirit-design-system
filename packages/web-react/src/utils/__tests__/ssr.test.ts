/* eslint-disable @typescript-eslint/no-explicit-any -- We are using custom global object */
describe('isSSR', () => {
  it('should return true when running on the server', async () => {
    const originalWindow = global.window;
    // Simulate server environment
    delete (global as any).window;

    // Dynamically import isSSR after modifying the environment
    const { isSSR } = await import('../ssr');

    expect(isSSR).toBeTruthy();

    // Restore original window object
    global.window = originalWindow;
  });

  it('should return false when running in the browser', async () => {
    // Simulate browser environment
    (global as any).window = {};

    // Clear the module cache to ensure fresh import
    jest.resetModules();

    // Dynamically import isSSR after modifying the environment
    const { isSSR } = await import('../ssr');

    expect(isSSR).toBeFalsy();

    // Clean up the simulated browser environment
    delete (global as any).window;
  });
});
