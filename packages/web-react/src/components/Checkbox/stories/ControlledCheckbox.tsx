import React from 'react';
import Checkbox from '../Checkbox';

const Story = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
      <Checkbox
        id="checkbox-controlled"
        label="Checkbox Controlled"
        name="checkbox-controlled"
        isChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </div>
  );
};

export default Story;
