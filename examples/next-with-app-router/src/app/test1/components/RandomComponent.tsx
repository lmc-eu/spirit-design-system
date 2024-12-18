'use client';

import React from 'react';

const RandomComponent = (props: any) => {
  return <p {...props}>{props.children}</p>;
};

export default RandomComponent;
