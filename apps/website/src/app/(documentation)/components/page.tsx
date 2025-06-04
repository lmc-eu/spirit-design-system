import { Container, Grid } from '@lmc-eu/spirit-web-react';
import { fetchAllComponents } from '@local/features/components/repositories/componentsRepository';
import ComponentCard from '@local/features/components/ui/ComponentCard';
import React from 'react';

const ComponentsPage = () => {
  const components: string[] = fetchAllComponents();

  return (
    <Container>
      <Grid cols={{ mobile: 2, tablet: 3 }}>
        {components.map((component) => (
          <ComponentCard key={component} component={component} />
        ))}
      </Grid>
    </Container>
  );
};

export default ComponentsPage;
