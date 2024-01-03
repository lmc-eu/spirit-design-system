import { useEffect, useState } from 'react';
import { ChildrenProps } from '../../types';

interface NoSsrProps extends ChildrenProps {}

const NoSsr = ({ children }: NoSsrProps): JSX.Element => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  // @ts-expect-error Type 'ReactNode' is not assignable to type 'Element'.
  return isMounted ? children : null;
};

export default NoSsr;
