import React from 'react';
import { Link } from 'react-router-dom';

import { Container, LoginContainer, Button, ButtonContainer } from './styles';

export default function Login() {
  return (
    <Container>
      <LoginContainer>
        <h1>Login</h1>
        <ButtonContainer>
          <Link to="/signin">
            <Button>Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
}
