import { SpiritGridProps } from './grid';
import { ChildrenProps } from './shared';

export type GalleryVariantType = 'grid' | 'bnb' | 'masonry';

export interface GalleryBaseProps extends ChildrenProps {
  variant: GalleryVariantType;
}

export interface SpiritGalleryProps extends SpiritGridProps, GalleryBaseProps {}
export interface SpiritGalleryItemProps extends ChildrenProps {
  isFirst?: boolean;
}
