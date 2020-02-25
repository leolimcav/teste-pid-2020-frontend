import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input';

import { Container, InputContainer, Button } from './styles';

import api from '../../services/api';

export default function SignIn() {
  const history = useHistory();
  async function handleLogin(data) {
    const { data: response } = await api.post('/signin', {
      rg_cpf: data.rg_cpf,
    });

    localStorage.setItem('id', response._id);
    localStorage.setItem('name', response.name);
    localStorage.setItem('cpf', response.cpf);
    localStorage.setItem('profile', response?.photo.path);

    history.push('/dashboard');
  }
  return (
    <Container>
      <span>Login</span>
      <Form onSubmit={handleLogin}>
        <InputContainer>
          <Input name="rg_cpf" type="text" placeholder="Insira RG ou CPF" />
        </InputContainer>
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}
