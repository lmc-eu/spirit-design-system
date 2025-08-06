import { ChildrenProps } from './shared';

export type GalleryVariantType = 'grid' | 'bnb' | 'masonry';

export interface GalleryBaseProps extends ChildrenProps {
  variant: GalleryVariantType;
}

export interface SpiritGalleryProps extends GalleryBaseProps {}
