import React from 'react';

export default (props: { isDisabledPlaceholder?: boolean }) => {
  const { isDisabledPlaceholder = false } = props;

  return (
    <>
      <option value="" selected disabled={isDisabledPlaceholder}>
        Placeholder
      </option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <optgroup label="Sub options">
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </optgroup>
    </>
  );
};
