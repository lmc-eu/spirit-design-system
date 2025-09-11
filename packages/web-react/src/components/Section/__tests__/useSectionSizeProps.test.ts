import { renderHook } from '@testing-library/react';
import { type SizeExtendedDictionaryType, type SpiritSectionProps } from '../../../types';
import { useSectionSizeProps } from '../useSectionSizeProps';
import sectionSizeDataProvider from './sectionSizeDataProvider';

describe('useSectionSizeProps', () => {
  it('should return defaults', () => {
    const props: SpiritSectionProps = {};
    const { result } = renderHook(() => useSectionSizeProps(props));

    expect(result.current.modifiedProps).toStrictEqual({});
  });

  it('should return size paddings', () => {
    const props: SpiritSectionProps = {
      size: 'small',
    };
    const { result } = renderHook(() => useSectionSizeProps(props));

    expect(result.current.modifiedProps).toStrictEqual({
      paddingY: sectionSizeDataProvider.find((data) => data[0] === 'small')![1],
      size: 'small',
    });
  });

  it('should return paddingY', () => {
    const props: SpiritSectionProps = {
      paddingY: { mobile: 'space-100', tablet: 'space-200' },
    };
    const { result } = renderHook(() => useSectionSizeProps(props));

    expect(result.current.modifiedProps).toStrictEqual({
      paddingY: { mobile: 'space-100', tablet: 'space-200' },
    });
  });

  it('should return paddingY over size', () => {
    const props: SpiritSectionProps = {
      size: 'small',
      paddingY: { mobile: 'space-100', tablet: 'space-200' },
    };
    const { result } = renderHook(() => useSectionSizeProps(props));

    expect(result.current.modifiedProps).toStrictEqual({
      paddingY: { mobile: 'space-100', tablet: 'space-200' },
      size: 'small',
    });
  });

  it('should return paddingTop and paddingBottom', () => {
    const props: SpiritSectionProps = {
      paddingTop: { mobile: 'space-100', tablet: 'space-200' },
      paddingBottom: 'space-300',
    };
    const { result } = renderHook(() => useSectionSizeProps(props));

    expect(result.current.modifiedProps).toStrictEqual({
      paddingTop: { mobile: 'space-100', tablet: 'space-200' },
      paddingBottom: 'space-300',
    });
  });

  it('should return paddingTop and paddingBottom with size', () => {
    const props: SpiritSectionProps = {
      paddingTop: { mobile: 'space-100', tablet: 'space-200' },
      paddingBottom: 'space-300',
      size: 'large',
    };
    const { result } = renderHook(() => useSectionSizeProps(props));

    expect(result.current.modifiedProps).toStrictEqual({
      paddingTop: { mobile: 'space-100', tablet: 'space-200' },
      paddingBottom: 'space-300',
      paddingY: sectionSizeDataProvider.find((data) => data[0] === 'large')![1],
      size: 'large',
    });
  });

  it.each(sectionSizeDataProvider)('should return paddingY for size %s', (size, expectedPaddingY) => {
    const props: SpiritSectionProps = {
      size: size as SizeExtendedDictionaryType<never>,
    };
    const { result } = renderHook(() => useSectionSizeProps(props));

    expect(result.current.modifiedProps.paddingY).toStrictEqual(expectedPaddingY);
  });
});
