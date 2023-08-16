import React from 'react';
import { TextField, Checkbox, Button, Container, Stack } from '../../../src/components';

export default {
  title: 'Examples/Forms',
};

export const LoginForm = () => (
  <Container>
    <Stack hasSpacing>
      <TextField type="text" id="name" label="Name" isFluid />
      <TextField type="password" id="password" label="Password" isFluid />
      <Checkbox id="keep-logged" label="Stay Logged In" />
      <Button isBlock>Login</Button>
    </Stack>
  </Container>
);
