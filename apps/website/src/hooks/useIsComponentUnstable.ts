const useIsComponentUnstable = (componentName: string): boolean => {
  return componentName.startsWith('unstable');
};

export default useIsComponentUnstable;
