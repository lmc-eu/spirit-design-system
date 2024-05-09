import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritTabsProps } from '../../types';

export interface TabsStyles {
  /** className props */
  classProps: {
    item: string;
    link: string;
    pane: string;
    root: string;
  };
  /** props to be passed to the element */
  props: unknown;
}

export function useTabsStyleProps(props: SpiritTabsProps = { selectedId: '', forTabPane: '', id: '' }): TabsStyles {
  const { selectedId, forTabPane, id, ...modifiedProps } = props;

  const tabsClass = useClassNamePrefix('Tabs');
  const tabsItemClass = `${tabsClass}__item`;
  const tabsLinkClass = `${tabsClass}__link`;
  const tabsPaneClass = `${tabsClass}Pane`;
  const tabsSelectedClass = 'is-selected';

  return {
    classProps: {
      item: tabsItemClass,
      link: classNames(tabsLinkClass, {
        [tabsSelectedClass]: !!forTabPane && !!selectedId && selectedId === forTabPane,
      }),
      pane: classNames(tabsPaneClass, {
        [tabsSelectedClass]: !!id && !!selectedId && selectedId === id,
      }),
      root: tabsClass,
    },
    props: modifiedProps,
  };
}
