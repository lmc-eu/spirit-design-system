import { getFixture, clearFixture } from '../../../../tests/helpers/fixture';
import InstanceMap from '../InstanceMap';

describe('InstanceMap', () => {
  const TEST_KEY = 'spirit.test';
  const UNKNOWN_KEY = 'spirit.unknown';
  const TEST_INSTANCE = {
    test: 'spiritinstance',
  };

  let fixtureEl: Element;
  let div: HTMLDivElement;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  beforeEach(() => {
    fixtureEl.innerHTML = '<div></div>';
    div = fixtureEl.querySelector('div') as HTMLDivElement;
  });

  afterEach(() => {
    InstanceMap.remove(div, TEST_KEY);
    clearFixture();
  });

  it('should return null for unknown elements', () => {
    const instance = { ...TEST_INSTANCE };

    InstanceMap.set(div, TEST_KEY, instance);

    expect(InstanceMap.get()).toBeNull();
    expect(InstanceMap.get(null)).toBeNull();
    expect(InstanceMap.get(document.createElement('div'), TEST_KEY)).toBeNull();
  });

  it('should return null for unknown keys', () => {
    const instance = { ...TEST_INSTANCE };

    InstanceMap.set(div, TEST_KEY, instance);

    expect(InstanceMap.get(div)).toBeNull();
    expect(InstanceMap.get(div, null)).toBeNull();
    expect(InstanceMap.get(div, UNKNOWN_KEY)).toBeNull();
  });

  it('should store instance for an element with a given key and return it', () => {
    const instance = { ...TEST_INSTANCE };

    InstanceMap.set(div, TEST_KEY, instance);

    expect(InstanceMap.get(div, TEST_KEY)).toEqual(instance);
  });

  it('should overwrite instance if something is already stored', () => {
    const instance = { ...TEST_INSTANCE };
    const copy = { ...instance };

    InstanceMap.set(div, TEST_KEY, instance);
    InstanceMap.set(div, TEST_KEY, copy);

    // Using `toBe` since spread creates a shallow copy
    expect(InstanceMap.get(div, TEST_KEY)).not.toBe(instance);
    expect(InstanceMap.get(div, TEST_KEY)).toBe(copy);
  });

  it('should do nothing when an element has nothing stored', () => {
    InstanceMap.remove(div, TEST_KEY);

    expect.anything();
  });

  it('should remove nothing for an unknown key', () => {
    const instance = { ...TEST_INSTANCE };

    InstanceMap.set(div, TEST_KEY, instance);
    InstanceMap.remove(div, UNKNOWN_KEY);

    expect(InstanceMap.get(div, TEST_KEY)).toEqual(instance);
  });

  it('should remove instance for a given key', () => {
    const instance = { ...TEST_INSTANCE };

    InstanceMap.set(div, TEST_KEY, instance);
    InstanceMap.remove(div, TEST_KEY);

    expect(InstanceMap.get(div, TEST_KEY)).toBeNull();
  });

  it('should console.error a message if called with multiple keys', () => {
    const consoleErrorMock = jest.spyOn(global.console, 'error').mockImplementation();

    const instance = { ...TEST_INSTANCE };
    const copy = { ...instance };

    InstanceMap.set(div, TEST_KEY, instance);
    InstanceMap.set(div, UNKNOWN_KEY, copy);

    expect(consoleErrorMock).toHaveBeenCalledWith(
      'Spirit do not allow more than one instance per element. Bound instance: spirit.test.',
    );
    expect(InstanceMap.get(div, UNKNOWN_KEY)).toBeNull();

    consoleErrorMock.mockRestore();
  });
});
