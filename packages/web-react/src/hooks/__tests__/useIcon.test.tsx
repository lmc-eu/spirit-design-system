import { renderHook } from '@testing-library/react-hooks';
import React, { ReactNode } from 'react';
import warning from '../../common/utilities/warning';
import { IconsProvider } from '../../context/IconsContext';
import { useIcon } from '../useIcon';

jest.mock('../../common/utilities/warning', () => jest.fn());

describe('useIcon', () => {
  const mockedWarning = warning as jest.MockedFunction<typeof warning>;
  const icons = { warning: '<path d="ERRW ADSFDSFDS"></path>' };
  const wrapper = ({ children }: { children: ReactNode }) => <IconsProvider value={icons}>{children}</IconsProvider>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return empty string', () => {
    const { result } = renderHook(() => useIcon(''));

    expect(result.current).toBe('');
  });

  it('should raise warning when icon name is missing from the assets', () => {
    renderHook(() => useIcon('warning'), {
      wrapper: ({ children }: { children: ReactNode }) => <IconsProvider value={{}}>{children}</IconsProvider>,
    });

    expect(mockedWarning).toHaveBeenCalled();
  });

  it('should return icon path', () => {
    const { result } = renderHook(() => useIcon('warning'), { wrapper });

    expect(result.current).toBe('<path d="ERRW ADSFDSFDS"></path>');
  });

  it('should return icon path based on fallback icon', () => {
    const { result } = renderHook(() => useIcon('danger'), { wrapper });

    expect(result.current).toBe('<path d="ERRW ADSFDSFDS"></path>');
  });

  it('should raise warning when fallback icon name is used', () => {
    renderHook(() => useIcon('danger'), { wrapper });

    expect(mockedWarning).toHaveBeenCalled();
  });
});
