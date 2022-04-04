import React from 'react';
import { useHeaderStyleProps } from './useHeaderStylesProps';
import { filterProps } from '../../utils/filterProps';
import { SpiritHeaderProps } from '../../types';

const defaultProps = {
  isInverted: false,
  isSimple: false,
};

const Header = (props: SpiritHeaderProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useHeaderStyleProps(props);
  const { children, ...restProps } = modifiedProps;

  return (
    <header {...filterProps(restProps)} className={classProps}>
      {children}
    </header>
  );
};

Header.defaultProps = defaultProps;

export default Header;
