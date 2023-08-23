import { act, renderHook } from '@testing-library/react-hooks';
import { useFileQueue } from '../useFileQueue';

describe('useFileQueue', () => {
  const file1 = new File([''], 'test1.txt', { type: 'text/plain', lastModified: 123456789 });
  const file2 = new File([''], 'test1.txt', { type: 'text/plain', lastModified: 123456789 });

  it('should return defaults', () => {
    const { result } = renderHook(() => useFileQueue());

    expect(result.current.fileQueue).toBeDefined();
    expect(result.current.onDismiss).toBeDefined();
    expect(result.current.addToQueue).toBeDefined();
    expect(result.current.clearQueue).toBeDefined();
    expect(result.current.findInQueue).toBeDefined();
    expect(result.current.updateQueue).toBeDefined();
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

  it('should find in queue', () => {
    const { result } = renderHook(() => useFileQueue());

    act(() => {
      result.current.addToQueue('test1_txt', file1);
      result.current.addToQueue('test2_txt', file2);
    });

    expect(result.current.fileQueue.size).toBe(2);

    act(() => {
      result.current.findInQueue('test1_txt');
      result.current.findInQueue('test2_txt');
    });

    expect(result.current.fileQueue.size).toBe(2);
  });

  it('should update queue', () => {
    const { result } = renderHook(() => useFileQueue());

    act(() => {
      result.current.addToQueue('test1_txt', file1);
      result.current.addToQueue('test2_txt', file2);
    });

    expect(result.current.fileQueue.size).toBe(2);

    act(() => {
      result.current.updateQueue('test1_txt', file2);
      result.current.updateQueue('test2_txt', file1);
    });

    expect(result.current.fileQueue.size).toBe(2);
    expect(result.current.fileQueue.get('test1_txt')).toBe(file2);
    expect(result.current.fileQueue.get('test2_txt')).toBe(file1);
  });
});
