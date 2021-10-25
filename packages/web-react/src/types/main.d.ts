import React from 'react';

type WithChildren<T = {}> = T & { children?: React.ReactNode };
