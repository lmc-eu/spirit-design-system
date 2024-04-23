import { useContext } from 'react';
import warning from '../common/utilities/warning';
import IconsContext from '../context/IconsContext';

export const useIcon = (name: string) => {
  const icons = useContext(IconsContext);

  if (icons != null && icons[name] != null) {
    return icons[name];
  }

  warning(
    false,
    `The ${name} icon is missing from your assets or icon map provided by the IconsProvider. Please make sure you have provided all icons needed by used components.`,
  );

  return '';
};
