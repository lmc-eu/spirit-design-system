'use client';

import { useState } from 'react';
import { SegmentedControlMultiselectProps } from '../../types/segmentedControl';

type UseSegmentedControlProps = SegmentedControlMultiselectProps & {
  defaultSelectedValue?: string | string[];
};

export const useSegmentedControl = ({ defaultSelectedValue, isMultiselect }: UseSegmentedControlProps) => {
  let initialValue: string | string[];

  if (isMultiselect) {
    if (Array.isArray(defaultSelectedValue)) {
      initialValue = defaultSelectedValue;
    } else if (defaultSelectedValue !== undefined) {
      initialValue = [defaultSelectedValue];
    } else {
      initialValue = [];
    }
  } else {
    initialValue = defaultSelectedValue ?? '';
  }

  const [selectedValue, setSelectedValue] = useState<string | string[]>(initialValue);

  return {
    selectedValue,
    setSelectedValue,
  };
};
