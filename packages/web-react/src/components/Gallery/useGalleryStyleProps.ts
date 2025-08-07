import classNames from 'classnames';
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
  const { variant } = props;

  const galleryClass = useClassNamePrefix('Gallery');
  const galleryClassItem = useClassNamePrefix('GalleryItem');
  const galleryClassMasonry = useClassNamePrefix('Gallery--masonry');

  const galleryClassProps = classNames(galleryClass, {
    [galleryClassMasonry]: variant === 'masonry',
  });

  const classProps = {
    root: galleryClassProps,
    item: galleryClassItem,
  };

  return {
    classProps,
  };
};
