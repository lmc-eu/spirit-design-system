import { useClassNamePrefix } from '../../hooks';
import { SpiritGridProps } from '../../types';
import { SpiritGalleryProps } from '../../types/gallery';

export interface UseGalleryStylesProps extends Partial<SpiritGalleryProps>, SpiritGridProps {}

export interface UseGalleryStylesReturn {
  /** className props */
  classProps: {
    root: string;
    item: string;
  };
}

export const useGalleryStyleProps = (props: UseGalleryStylesProps): UseGalleryStylesReturn => {
  const galleryClass = useClassNamePrefix('Gallery');
  const galleryClassItem = useClassNamePrefix('GalleryItem');

  const classProps = {
    root: galleryClass,
    item: galleryClassItem,
  };

  return {
    classProps,
  };
};
