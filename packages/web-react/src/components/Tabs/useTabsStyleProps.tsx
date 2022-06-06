import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { SpiritTabsProps } from '../../types';

export interface TabsStyles {
  /** className props */
  classProps: {
    root: string;
    item: string;
    pane: string;
    content: string;
    link: string;
  };
  /** props to be passed to the element */
  props: unknown;
}

export function useTabsStyleProps(props: SpiritTabsProps = { selectedTabId: '', forTab: '', tabId: '' }): TabsStyles {
  const { selectedTabId, forTab, tabId, ...modifiedProps } = props;

  const tabsClass = useClassNamePrefix('Tabs');
  const tabsItemClass = `${tabsClass}__item`;
  const tabsContentClass = `${tabsClass}-content`;
  const tabsPaneClass = `${tabsClass}-pane`;
  const tabsLinkClass = `${tabsClass}__link`;
  const tabsSelectedClass = `is-selected`;

  return {
    classProps: {
      root: tabsClass,
      item: tabsItemClass,
      pane: classNames(tabsPaneClass, {
        [tabsSelectedClass]: !!tabId && !!selectedTabId && selectedTabId === tabId,
      }),
      content: tabsContentClass,
      link: classNames(tabsLinkClass, {
        [tabsSelectedClass]: !!forTab && !!selectedTabId && selectedTabId === forTab,
      }),
    },
    props: modifiedProps,
  };
}
