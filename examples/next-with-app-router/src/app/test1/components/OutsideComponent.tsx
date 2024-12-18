'use client';

import React from 'react';

const OutsideComponent = (props: any) => {
  return <p {...props}>{props.children}</p>;
};

export default OutsideComponent;
