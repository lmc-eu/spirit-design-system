import React from 'react';

export type WithChildren<T = unknown> = T & { children?: React.ReactNode };
