import { useContext } from 'react';
import ClassNamePrefixContext from '../context/ClassNamePrefixContext';
import { applyClassNamePrefix } from '../utils/classname';

export const useClassNamePrefix = (className: string): string => {
  const classNamePrefix = useContext(ClassNamePrefixContext);
  let prefixedClassName = className;

  if (className && classNamePrefix) {
    prefixedClassName = applyClassNamePrefix(classNamePrefix)(className);
  } else if (classNamePrefix) {
    prefixedClassName = classNamePrefix;
  }

  return prefixedClassName;
};
