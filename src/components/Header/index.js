import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';

import Input from '../Input';

// import api from '../../services/api';

import { Container } from './styles';

export default function Header() {
  // const [user, setUser] = useState({});

  return (
    <Container>
      <h1>Hello World</h1>
      <Form>
        <Input name="searchCPF" type="text" id="searchCPF" />
      </Form>
    </Container>
  );
}
