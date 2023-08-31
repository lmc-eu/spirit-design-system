import React from 'react';
import { Icon } from '../../Icon';

type Props = {
  content: Content[];
};

type Content = {
  icon: string;
  text: string;
};

const DropdownContentFactory = ({ content }: Props) => {
  const lastRow = content.length - 1;

  return (
    <>
      {content.map(({ icon, text }, index) => (
        <a href={`#${icon}`} className={`d-flex ${index !== lastRow && 'mb-400'}`} key={icon}>
          <Icon name={icon} UNSAFE_className="mr-400" />
          <span>{text}</span>
        </a>
      ))}
    </>
  );
};

export default DropdownContentFactory;
