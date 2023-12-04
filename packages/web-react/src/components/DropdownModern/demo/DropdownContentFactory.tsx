import React from 'react';
import { Item } from '../../Item';

type Props = {
  content: Content[];
};

type Content = {
  icon: string;
  text: string;
};

const DropdownContentFactory = ({ content }: Props) => {
  return (
    <>
      {content.map(({ icon, text }) => (
        <Item key={icon} label={text} elementType="a" iconName={icon} href={`#${icon}`} />
      ))}
    </>
  );
};

export default DropdownContentFactory;
