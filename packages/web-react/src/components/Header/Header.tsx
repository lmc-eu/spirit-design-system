import React from 'react';
import { useHeaderStyleProps } from './useHeaderStyleProps';
import { filterProps } from '../../utils/filterProps';
import { SpiritHeaderProps } from '../../types';
import { HeaderProvider } from './HeaderContext';
import { useToggle } from '../../hooks';

const defaultProps = {
  isInverted: false,
  isSimple: false,
};

const Header = (props: SpiritHeaderProps): JSX.Element => {
  const [isExpanded, handleToggle] = useToggle(false);
  const { classProps, props: modifiedProps } = useHeaderStyleProps(props);
  const { children, id, ...restProps } = modifiedProps;

  const handleEscape = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (isExpanded && (event.key === 'Esc' || event.key === 'Escape')) {
      event.preventDefault();
      event.stopPropagation();

      handleToggle();
    }
  };

  return (
    <HeaderProvider value={{ headerClass: classProps.root, id, isExpanded, handleToggle }}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <header {...filterProps(restProps)} className={classProps.header} onKeyUp={handleEscape}>
        {children}
      </header>
    </HeaderProvider>
  );
};

Header.defaultProps = defaultProps;

export default Header;
