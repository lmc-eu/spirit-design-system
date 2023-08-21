import React from 'react';

export default (props: { isDisabledPlaceholder?: boolean; showPlaceholder?: boolean; showSubOption?: boolean }) => {
  const { isDisabledPlaceholder = false, showPlaceholder = false, showSubOption = false } = props;

  return (
    <>
      {showPlaceholder && (
        <option value="" selected disabled={isDisabledPlaceholder}>
          Select an option {isDisabledPlaceholder && '[selected & disabled]'}
        </option>
      )}
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      {showSubOption && (
        <optgroup label="Sub options">
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </optgroup>
      )}
    </>
  );
};
