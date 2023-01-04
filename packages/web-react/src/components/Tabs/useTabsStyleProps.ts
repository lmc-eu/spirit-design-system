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

export function useTabsStyleProps(props: SpiritTabsProps = { selectedTabId: '', forTab: '', tabId: '' }): TabsStyles {
  const { selectedTabId, forTab, tabId, ...modifiedProps } = props;

  const tabsClass = useClassNamePrefix('Tabs');
  const tabsItemClass = `${tabsClass}__item`;
  const tabsLinkClass = `${tabsClass}__link`;
  const tabsPaneClass = `${tabsClass}Pane`;
  const tabsSelectedClass = 'is-selected';

  return {
    classProps: {
      item: tabsItemClass,
      link: classNames(tabsLinkClass, {
        [tabsSelectedClass]: !!forTab && !!selectedTabId && selectedTabId === forTab,
      }),
      pane: classNames(tabsPaneClass, {
        [tabsSelectedClass]: !!tabId && !!selectedTabId && selectedTabId === tabId,
      }),
      root: tabsClass,
    },
    props: modifiedProps,
  };
}
