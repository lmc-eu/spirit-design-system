'use client';

import { Children, isValidElement, ReactNode, useState, useMemo } from 'react';
import { ChildrenProps } from '../../types';

type UseSegmentedControlProps = ChildrenProps & {
  hasMultipleSelection: boolean;
};

export const useSegmentedControl = ({ children, hasMultipleSelection }: UseSegmentedControlProps) => {
  const getChildrenValues = (nodes: ReactNode): string[] => {
    const values: string[] = [];

    Children.forEach(nodes, (child) => {
      if (isValidElement(child)) {
        if (child.props?.value) {
          values.push(child.props.value);
        }
        if (child.props?.children) {
          values.push(...getChildrenValues(child.props.children));
        }
      }
    });

    return values;
  };

  const getSelectedValues = (nodes: ReactNode): string[] => {
    const values: string[] = [];

    Children.forEach(nodes, (child) => {
      if (isValidElement(child)) {
        if (child.props?.isDefaultSelected && child.props?.value) {
          values.push(child.props.value);
        }
        if (child.props?.children) {
          values.push(...getSelectedValues(child.props.children));
        }
      }
    });

    return values;
  };

  const getFirstEnabledValue = (nodes: ReactNode): string | undefined => {
    let firstEnabled: string | undefined;

    Children.forEach(nodes, (child) => {
      if (isValidElement(child)) {
        if (!child.props?.isDisabled && child.props?.value && firstEnabled === undefined) {
          firstEnabled = child.props.value;
        }
        if (child.props?.children && firstEnabled === undefined) {
          const nestedEnabled = getFirstEnabledValue(child.props.children);
          if (nestedEnabled !== undefined) {
            firstEnabled = nestedEnabled;
          }
        }
      }
    });

    return firstEnabled;
  };

  const childrenValues = useMemo(() => getChildrenValues(children), [children]);
  const selectedValues = useMemo(() => getSelectedValues(children), [children]);

  let initialSelectedValues: string[];
  if (selectedValues?.length > 0) {
    initialSelectedValues = selectedValues;
  } else {
    const firstEnabled = getFirstEnabledValue(children);
    initialSelectedValues = firstEnabled ? [firstEnabled] : [];
  }

  const [selectedValue, setSelectedValue] = useState<string[]>(initialSelectedValues);

  const handleSetSelectedValue = (value: string) => {
    if (hasMultipleSelection) {
      setSelectedValue((prev) =>
        prev.includes(value) ? prev.filter((prevValue) => prevValue !== value) : [...prev, value],
      );
    } else {
      setSelectedValue([value]);
    }
  };

  const highlightedPosition = useMemo(() => {
    if (hasMultipleSelection || !selectedValue.length || !childrenValues.includes(selectedValue[0])) {
      return undefined;
    }

    return selectedValue ? childrenValues.length - childrenValues.indexOf(selectedValue[0]) - 1 : 0;
  }, [childrenValues, selectedValue, hasMultipleSelection]);

  return {
    selectedValue,
    setSelectedValue: handleSetSelectedValue,
    highlightedPosition,
  };
};
