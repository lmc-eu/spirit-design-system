import NextLink from 'next/link';
import React from 'react';
import styles from './ComponentCard.module.scss';

interface ComponentCardProps {
  component: string;
}

const ComponentCard = ({ component }: ComponentCardProps) => {
  return (
    <li className="d-grid">
      <NextLink href={`/components/${component.toLowerCase()}`} className={`${styles.ComponentCard} text-truncate`}>
        {component}
      </NextLink>
    </li>
  );
};

export default ComponentCard;
