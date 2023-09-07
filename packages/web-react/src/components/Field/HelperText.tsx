import React, { ElementType, useEffect } from 'react';
import { RegisterType } from './useAriaIds';

interface Props {
  helperText: React.ReactNode;
  className?: string;
  elementType?: ElementType;
  id?: string;
  registerAria?: RegisterType;
}

const defaultProps = {
  className: undefined,
  elementType: 'div',
  id: undefined,
  registerAria: undefined,
};

const HelperText = (props: Props) => {
  const { helperText, className, elementType: ElementTag = 'div', id, registerAria } = props;

  useEffect(() => {
    registerAria?.({ add: id });

    return () => {
      registerAria?.({ remove: id });
    };
  }, [id, registerAria]);

  if (helperText) {
    return (
      <ElementTag className={className} id={id}>
        {helperText}
      </ElementTag>
    );
  }

  return null;
};

HelperText.defaultProps = defaultProps;

export default HelperText;
