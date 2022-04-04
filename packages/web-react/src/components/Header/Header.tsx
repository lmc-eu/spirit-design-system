import React from 'react';
import { useHeaderStyleProps } from './useHeaderStylesProps';
import { filterProps } from '../../utils/filterProps';
import { SpiritHeaderProps } from '../../types';
import { HeaderProvider } from './HeaderContext';

const defaultProps = {
  isInverted: false,
  isSimple: false,
};

const Header = (props: SpiritHeaderProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useHeaderStyleProps(props);
  const { children, id, ...restProps } = modifiedProps;

  return (
    <HeaderProvider value={{ headerClass: classProps.root, id }}>
      <header {...filterProps(restProps)} className={classProps.header}>
        {children}
      </header>
    </HeaderProvider>
  );
};

Header.defaultProps = defaultProps;

export default Header;
