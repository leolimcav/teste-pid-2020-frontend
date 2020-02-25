import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  LoginContainer,
  Button,
  GButton,
  ButtonContainer,
} from './styles';

import Glogo from '../../assets/google-hangouts.svg';

import api from '../../services/api';

export default function Login() {
  const [url, setUrl] = useState('');
  useEffect(() => {
    async function fetchapi() {
      const { data: response } = await api.get(
        'http://localhost:3333/googlesign'
      );

      console.log(response);
      setUrl(response);
    }

    fetchapi();
  });
  return (
    <Container>
      <LoginContainer>
        <h1>Login</h1>
        <a href={url}>
          <GButton>
            <img src={Glogo} alt="Google logo" />
            Login With Google
          </GButton>
        </a>
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
