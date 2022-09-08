import React from 'react';
import { TextField, CheckboxField, Button, Container, Grid, Stack } from '../../../src/components';

export default {
  title: 'Examples/Forms',
};

export const LoginForm = () => (
  <Container>
    <Stack>
      <TextField type="text" id="name" label="Name" isFluid />
      <TextField type="password" id="password" label="Password" isFluid />
      <CheckboxField label="Stay Logged In" />
      <Button isBlock>Login</Button>
    </Stack>
  </Container>
);
