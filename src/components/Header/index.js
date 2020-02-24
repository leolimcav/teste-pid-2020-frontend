import React from 'react';
import { Form } from '@unform/web';
import { FaSearch } from 'react-icons/fa';

import Input from '../Input';

import { Container, InputContainer, Button } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>Contacts</h1>
      <Form>
        <InputContainer>
          <Input
            name="searchCPF"
            type="text"
            id="searchCPF"
            placeholder="Procure por CPF ou RG (ex: 000.000.000-00 ou 0000000000-0)"
          />
          <FaSearch id="icon" />
        </InputContainer>
      </Form>
      <Button>Desconectar</Button>
    </Container>
  );
}
