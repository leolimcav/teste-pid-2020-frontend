import React from 'react';

import { Container, LoginContainer, Button, GButton } from './styles';
import Glogo from '../../assets/google-hangouts.svg';

export default function Login() {
  return (
    <Container>
      <LoginContainer>
        <h1>Login</h1>
        <GButton>
          <img src={Glogo} alt="Google logo" />
          Login With Google
        </GButton>
        <Button>Sign In</Button>
      </LoginContainer>
    </Container>
  );
}
