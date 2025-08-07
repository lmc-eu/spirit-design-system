'use client';

import { createContext, useContext } from 'react';
import { GalleryVariantType } from '../../types/gallery';

export type GalleryContextProps = {
  variant: GalleryVariantType;
};

const defaultContext: GalleryContextProps = {
  variant: 'grid',
};

const GalleryContext = createContext<GalleryContextProps>(defaultContext);
const GalleryProvider = GalleryContext.Provider;
const useGalleryContext = (): GalleryContextProps => useContext(GalleryContext);

export default GalleryContext;
export { GalleryProvider, useGalleryContext };
