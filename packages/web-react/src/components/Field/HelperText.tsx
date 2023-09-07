import React, { ElementType } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  elementType?: ElementType;
  id?: string;
}

const defaultProps = {
  className: undefined,
  elementType: 'div',
  id: undefined,
};

const HelperText = (props: Props) => {
  const { children, className, elementType: ElementTag = 'div', id } = props;

  return (
    <ElementTag className={className} id={id}>
      {children}
    </ElementTag>
  );
};

HelperText.defaultProps = defaultProps;

export default HelperText;
