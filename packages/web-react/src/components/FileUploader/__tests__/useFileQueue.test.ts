import { act, renderHook } from '@testing-library/react-hooks';
import { useFileQueue } from '../useFileQueue';

describe('useFileQueue', () => {
  const file1 = new File([''], 'test1.txt', { type: 'text/plain', lastModified: Date.now() });
  const file2 = new File([''], 'test1.txt', { type: 'text/plain', lastModified: Date.now() });

  it('should return defaults', () => {
    const { result } = renderHook(() => useFileQueue());

    expect(result.current.fileQueue).toBeDefined();
    expect(result.current.onDismiss).toBeDefined();
    expect(result.current.addToQueue).toBeDefined();
    expect(result.current.clearQueue).toBeDefined();
  });

  it('should add files to queue', () => {
    const { result } = renderHook(() => useFileQueue());

    act(() => {
      result.current.addToQueue('test1_txt', file1);
      result.current.addToQueue('test2_txt', file2);
    });

    expect(result.current.fileQueue.size).toBe(2);
  });

  it('should add and remove from queue', () => {
    const { result } = renderHook(() => useFileQueue());

    act(() => {
      result.current.addToQueue('test1_txt', file1);
      result.current.addToQueue('test2_txt', file2);
    });

    expect(result.current.fileQueue.size).toBe(2);

    act(() => {
      result.current.onDismiss('test1_txt');
      result.current.onDismiss('test2_txt');
    });

    expect(result.current.fileQueue.size).toBe(0);
  });

  it('should add and clear queue', () => {
    const { result } = renderHook(() => useFileQueue());

    act(() => {
      result.current.addToQueue('test1_txt', file1);
      result.current.addToQueue('test2_txt', file2);
    });

    expect(result.current.fileQueue.size).toBe(2);

    act(() => {
      result.current.clearQueue();
    });

    expect(result.current.fileQueue.size).toBe(0);
  });
});
