import { renderHook } from '@testing-library/react';
import { useContext } from 'react';
import { useToast } from '../useToast';

// Mock useContext to provide a context value for testing
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

describe('useToast', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error when used outside useToast', () => {
    expect(() => {
      useToast();
    }).toThrow('useToast has to be used within <ToastProvider>');
  });

  it('should return currentToastContext when used within ToastProvider', () => {
    const contextValue = {
      color: undefined,
      iconName: undefined,
      id: '',
      isOpen: false,
      message: null,
      hide: () => {},
      show: () => {},
    };

    (useContext as jest.Mock).mockReturnValue(contextValue);

    const { result } = renderHook(() => useToast());

    expect(result.current).toEqual(contextValue);
  });
});
