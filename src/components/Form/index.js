import React from 'react';

import Input from '../Input/index';

import { FormContainer } from './styles';

const handleSubmit = () => {};

export default function Form() {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input name="name" type="text" />
    </FormContainer>
  );
}
