import { useContext } from 'react';
import IconsContext from '../context/IconsContext';

export const useIcon = (name: string) => {
  const icons = useContext(IconsContext);

  return icons != null ? icons[name] : '';
};
