import { renderHook } from '@testing-library/react-hooks';
import { SpiritLinkProps } from '../../../types';
import { useLinkStyleProps } from '../useLinkStyleProps';
import linkPropsDataProvider from './linkPropsDataProvider';

describe('useLinkStyleProps', () => {
  it.each(linkPropsDataProvider)('should return classname', (color, isUnderlined, isDisabled, expectedClassName) => {
    const props = { color, isUnderlined, isDisabled } as SpiritLinkProps;
    const { result } = renderHook(() => useLinkStyleProps(props));

    expect(result.current.classProps).toBe(expectedClassName);
  });
});
