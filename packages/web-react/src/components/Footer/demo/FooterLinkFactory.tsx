import React from 'react';
import { Link } from '../../Link';

type FooterLinkFactoryProps = {
  items: number;
  label: string;
};

const FooterLinkFactory = ({ items, label }: FooterLinkFactoryProps) => (
  <>
    {Array.from({ length: items }, (_, index) => (
      <li key={`${label}-${index}`}>
        <Link href="https://www.example.com">{label}</Link>
      </li>
    ))}
  </>
);

export default FooterLinkFactory;
