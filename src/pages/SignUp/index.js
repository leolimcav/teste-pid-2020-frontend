import React from 'react';
import { Form } from '@unform/web';

import FileInput from '../../components/FileInput';
import Input from '../../components/Input';

import {
  Container,
  FormContainer,
  FormFooter,
  FormRow,
  FormCol,
  InputRow,
  InputContainer,
  Button,
} from './styles';

export default function SignUp() {
  return (
    <Container>
      <Form>
        <FormContainer>
          <h1>Sign Up</h1>
          <FormRow>
            <InputContainer width="40%" height="50%">
              <FileInput name="profile" id="file" />
            </InputContainer>
            <FormCol>
              <InputContainer width="56%" height="7.1%">
                <Input name="name" type="text" placeholder="Seu nome" />
              </InputContainer>
              <InputContainer width="56%" height="7.1%">
                <Input
                  name="cpf"
                  type="text"
                  placeholder="Seu CPF sem pontuação"
                />
              </InputContainer>
              <InputContainer width="56%" height="7.1%">
                <Input
                  name="rg"
                  type="text"
                  placeholder="Seu RG sem pontuação"
                />
              </InputContainer>
              <InputContainer width="56%" height="7.1%">
                <Input
                  name="mother_name"
                  type="text"
                  placeholder="Nome da Mãe"
                />
              </InputContainer>
              <InputContainer width="56%" height="7.1%">
                <Input
                  name="father_name"
                  type="text"
                  placeholder="Nome do Pai"
                />
              </InputContainer>
            </FormCol>
          </FormRow>
          <FormFooter>
            <Button>Cadastrar</Button>
          </FormFooter>
        </FormContainer>
      </Form>
    </Container>
  );
}
