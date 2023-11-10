import React, { useContext } from 'react';
import { Grid, Text, Icon } from '../../components';
import IconsContext, { IconsContextType } from '../../context/IconsContext';

const Icons = () => {
  let icons;
  const iconsContext: IconsContextType = useContext(IconsContext);

  if (iconsContext !== null && iconsContext !== undefined) {
    icons = Object.keys(iconsContext);
  }

  return (
    <Grid
      elementType="ul"
      cols={{ mobile: 2, tablet: 4, desktop: 6 }}
      UNSAFE_className="text-center my-1000 list-unstyled"
    >
      {icons?.map((icon) => (
        <li key={icon} className="mb-600">
          <Icon name={icon} />
          <Text UNSAFE_className="mt-500" emphasis="bold">
            {icon}
          </Text>
        </li>
      ))}
    </Grid>
  );
};

export default Icons;
