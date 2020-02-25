import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import { Container, Wrapper, InputContainer, Button } from './styles';

import api from '../../services/api';

export default function DeleteUser() {
  const history = useHistory();

  async function handleSubmit(data) {
    await api.delete(`/users/${data.rg_cpf}`);

    localStorage.clear();
    history.push('/');
  }
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Wrapper>
          <span>Remover Usuario</span>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Input
                name="rg_cpf"
                type="text"
                placeholder="Insira o RG ou CPF"
              />
            </InputContainer>
            <Button type="submit">Remover</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
