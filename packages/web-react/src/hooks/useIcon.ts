import { useContext } from 'react';
import warning from '../common/utilities/warning';
import IconsContext from '../context/IconsContext';

export const useIcon = (name: string) => {
  const icons = useContext(IconsContext);

  /**
   * @todo Remove this block when DS-1177 is resolved and return the previous code
   *
   * @see { @link https://jira.almacareer.tech/browse/DS-1177 }
   *
   * Previous code: return icons != null ? icons[name] : '';
   */
  const iconFallbacks: { [key: string]: string } = {
    danger: 'warning',
  };

  if (icons != null && icons[name] != null) {
    return icons[name];
  }

  if (icons != null && icons[name] == null) {
    if (name === 'danger' && iconFallbacks[name] === 'warning') {
      warning(
        false,
        'The "danger" icon is missing from your assets. It will be required in the next major version. Using "warning" as a fallback.',
      );

      return icons[iconFallbacks[name]];
    }
  }

  warning(
    false,
    `The ${name} icon is missing from your assets or icon map provided by the IconsProvider. Please make sure you have provided all icons needed by used components.`,
  );

  return '';
};
