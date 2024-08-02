import classNames from 'classnames';
import { useClassNamePrefix, useSpacingStyle } from '../../hooks';
import { SpacingCSSProperties, SpiritTabsProps } from '../../types';
import { useTabContext } from './TabContext';

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
  styleProps: TabsCSSProperties;
}

interface TabsCSSProperties extends SpacingCSSProperties {}

export function useTabsStyleProps(props: SpiritTabsProps = { selectedId: '', forTabPane: '', id: '' }): TabsStyles {
  const { spacing } = useTabContext();
  const { selectedId, forTabPane, id, ...modifiedProps } = props;

  const tabsClass = useClassNamePrefix('Tabs');
  const tabsItemClass = `${tabsClass}__item`;
  const tabsLinkClass = `${tabsClass}__link`;
  const tabsPaneClass = `${tabsClass}Pane`;
  const tabsSelectedClass = 'is-selected';

  const tabsStyle = useSpacingStyle(spacing, 'tabs');

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
    styleProps: tabsStyle,
  };
}
