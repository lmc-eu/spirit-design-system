import { useContext } from 'react';
import ClassNamePrefixContext from '../context/ClassNamePrefixContext';

export const useClassNamePrefix = () => {
  const classNamePrefixContext = useContext(ClassNamePrefixContext);

  return classNamePrefixContext || null;
};
