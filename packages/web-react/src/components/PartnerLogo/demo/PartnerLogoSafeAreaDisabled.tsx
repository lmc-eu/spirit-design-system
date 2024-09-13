import React from 'react';
import PartnerLogoDemoFactory from './PartnerLogoDemoFactory';

const PartnerLogoSafeAreaDisabled = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
    <PartnerLogoDemoFactory hasSafeArea={false} />
  </div>
);

export default PartnerLogoSafeAreaDisabled;
