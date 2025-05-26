'use client';

import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '@lmc-eu/spirit-web-react';
import React from 'react';

export const AppProvider = ({ children }) => <IconsProvider value={icons}>{children}</IconsProvider>;
