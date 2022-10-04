import * as React from 'react';
import { TextField, CheckboxField, Button, Container, Stack } from '../../../src/components';

export default {
  title: 'Examples/Forms',
};

export const LoginForm = () => (
  <Container>
    <Stack>
      <TextField type="text" id="name" label="Name" isFluid />
      <TextField type="password" id="password" label="Password" isFluid />
      <CheckboxField id="stayLogged" label="Stay Logged In" />
      <Button isBlock>Login</Button>
    </Stack>
  </Container>
);
