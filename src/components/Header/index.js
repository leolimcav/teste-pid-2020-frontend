import React from 'react';
import { Form } from '@unform/web';

import Input from '../Input';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>Contacts</h1>
      <Form>
        <Input name="searchCPF" type="text" id="searchCPF" placeholder="Procure por CPF ou RG (ex: 000.000.000-00 ou 0000000000-0)"/>
      </Form>
      {/* <img src="" alt="" /> */}
    </Container>
  );
}
