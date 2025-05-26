import React from 'react';
import PartnerLogo from '../PartnerLogo';
import { logo } from './PartnerLogoDemoFactory';

const PartnerLogoResponsiveSize = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
    <div
      style={{
        backgroundColor: '#F2F3F5',
        padding: '48px',
      }}
    >
      <PartnerLogo hasSafeArea={false} size={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}>
        {logo}
      </PartnerLogo>
    </div>
  </div>
);

export default PartnerLogoResponsiveSize;
