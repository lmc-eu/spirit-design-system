import React from 'react';
import { DEMO_SIZES } from '../constants';
import UNSTABLE_Avatar from '../UNSTABLE_Avatar';

const AvatarImage = () => (
  <>
    <div className="d-flex" style={{ gap: 'var(--spirit-space-400)' }}>
      {DEMO_SIZES.map(({ size }) => (
        <UNSTABLE_Avatar key={`${size}`} elementType="a" href="#" size={size} aria-label="Profile of Jiří Bárta">
          <img src="https://picsum.photos/id/823/162/162" alt="Jiří Bárta" aria-hidden="true" />
        </UNSTABLE_Avatar>
      ))}
    </div>
    <div className="d-flex" style={{ gap: 'var(--spirit-space-400)' }}>
      {DEMO_SIZES.map(({ size }) => (
        <UNSTABLE_Avatar
          key={`${size}`}
          isSquare
          elementType="a"
          href="#"
          size={size}
          aria-label="Profile of Jiří Bárta"
        >
          <img src="https://picsum.photos/id/823/162/162" alt="Jiří Bárta" aria-hidden="true" />
        </UNSTABLE_Avatar>
      ))}
    </div>
  </>
);

export default AvatarImage;
