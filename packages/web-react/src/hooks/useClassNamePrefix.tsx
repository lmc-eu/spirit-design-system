import { useContext } from 'react';
import ClassNamePrefixContextContext from '../context/ClassnamePrefixContext';

export const useClassNamePrefix = () => {
  const classNamePrefixContext = useContext(ClassNamePrefixContextContext);

  return classNamePrefixContext || null;
};
