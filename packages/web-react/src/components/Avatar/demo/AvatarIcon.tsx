import React from 'react';
import { Icon } from '../../Icon';
import Avatar from '../Avatar';
import { DEMO_SIZES } from '../constants';

const AvatarIcon = () => (
  <>
    <div className="d-flex" style={{ gap: 'var(--spirit-space-500)' }}>
      {DEMO_SIZES.map(({ size, boxSize }) => (
        <Avatar key={size} elementType="a" href="#" size={size} aria-label="Profile of Jiří Bárta">
          <Icon name="profile" boxSize={boxSize} />
        </Avatar>
      ))}
    </div>
    <div className="d-flex" style={{ gap: 'var(--spirit-space-500)' }}>
      {DEMO_SIZES.map(({ size, boxSize }) => (
        <Avatar key={size} isSquare elementType="a" href="#" size={size} aria-label="Profile of Jiří Bárta">
          <Icon name="profile" boxSize={boxSize} />
        </Avatar>
      ))}
    </div>
  </>
);

export default AvatarIcon;
