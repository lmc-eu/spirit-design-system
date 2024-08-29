import React from 'react';
import { Icon } from '../../Icon';
import { DEMO_SIZES } from '../constants';
import { UNSTABLE_Avatar } from '../UNSTABLE_Avatar';

const AvatarIcon = () => (
  <>
    <div className="d-flex" style={{ gap: 'var(--spirit-space-500)' }}>
      {DEMO_SIZES.map(({ size, boxSize }) => (
        <UNSTABLE_Avatar key={`${size}`} elementType="a" href="#" size={size} aria-label="Profile of Jiří Bárta">
          <Icon name="profile" boxSize={boxSize} />
        </UNSTABLE_Avatar>
      ))}
    </div>
    <div className="d-flex" style={{ gap: 'var(--spirit-space-500)' }}>
      {DEMO_SIZES.map(({ size, boxSize }) => (
        <UNSTABLE_Avatar
          key={`${size}`}
          isSquare
          elementType="a"
          href="#"
          size={size}
          aria-label="Profile of Jiří Bárta"
        >
          <Icon name="profile" boxSize={boxSize} />
        </UNSTABLE_Avatar>
      ))}
    </div>
  </>
);

export default AvatarIcon;
