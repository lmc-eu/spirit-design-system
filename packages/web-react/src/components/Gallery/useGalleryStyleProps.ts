import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { DrawerAlignmentXType, DrawerPanelProps } from '../../types';
import { DRAWER_ALIGNMENT_DEFAULT } from './constants';

export interface UseDrawerStylesProps extends DrawerPanelProps {
  drawerAlignmentX?: DrawerAlignmentXType;
}

export interface UseDrawerStylesReturn {
  /** className props */
  classProps: {
    root: string;
    item: string;
  };
}

export const useGalleryStyleProps = (props: UseDrawerStylesProps = {}): UseDrawerStylesReturn => {
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
