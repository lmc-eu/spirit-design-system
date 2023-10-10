import React from 'react';
import { Button, Checkbox, Container, Grid, GridItem, Stack, TextField } from '../../../src/components';

export default {
  title: 'Examples/Forms',
};

export const LoginForm = () => (
  <Container>
    <Grid>
      <GridItem columnStart={{ mobile: 1, tablet: 5 }} columnEnd={{ mobile: -1, tablet: 9 }}>
        <Stack hasSpacing>
          <TextField type="text" id="name" label="Name" isFluid />
          <TextField type="password" id="password" label="Password" isFluid />
          <Checkbox id="keep-logged" label="Stay Logged In" />
          <Button isBlock>Login</Button>
        </Stack>
      </GridItem>
    </Grid>
  </Container>
);
