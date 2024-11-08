import React from 'react';
import { DEMO_SIZES } from '../constants';
import UNSTABLE_Avatar from '../UNSTABLE_Avatar';

const AvatarText = () => (
  <>
    <div className="d-flex" style={{ gap: 'var(--spirit-space-500)' }}>
      {DEMO_SIZES.map(({ size }) => (
        <UNSTABLE_Avatar key={`${size}`} elementType="a" href="#" size={size} aria-label="Profile of Jiří Bárta">
          <span aria-hidden="true">JB</span>
        </UNSTABLE_Avatar>
      ))}
    </div>
    <div className="d-flex" style={{ gap: 'var(--spirit-space-500)' }}>
      {DEMO_SIZES.map(({ size }) => (
        <UNSTABLE_Avatar
          key={`${size}`}
          isSquare
          elementType="a"
          href="#"
          size={size}
          aria-label="Profile of Jiří Bárta"
        >
          <span aria-hidden="true">JB</span>
        </UNSTABLE_Avatar>
      ))}
    </div>
  </>
);

export default AvatarText;
