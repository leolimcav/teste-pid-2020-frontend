import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  LoginContainer,
  Button,
  GButton,
  ButtonContainer,
} from './styles';

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
