import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import FileInput from '../../components/FileInput';
import Input from '../../components/Input';
import api from '../../services/api';

import {
  Container,
  FormContainer,
  FormFooter,
  FormRow,
  FormCol,
  InputContainer,
  Button,
} from './styles';

export default function SignUp() {
  const history = useHistory();
  const formRef = useRef(null);

  async function handleSubmit(user) {
    const profile = new FormData();
    profile.append('profile', formRef.current?.getFieldRef('profile').files[0]);
    const photo = await api.post('/files', profile);
    const { name, cpf, rg, birth_date, mother_name, father_name } = user;
    const response = await api.post('/users', {
      name,
      cpf,
      rg,
      birth_date,
      mother_name,
      father_name,
      photo: photo.data?.file._id,
    });

    localStorage.setItem('id', response.data._id);
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('cpf', response.data.cpf);
    localStorage.setItem('profile', response.data?.photo.path);

    formRef.current.setErrors({});

    history.push('/dashboard');
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit} encType="multipart/form-data" ref={formRef}>
        <FormContainer>
          <h1>Sign Up</h1>
          <FormRow>
            <InputContainer width="40%" height="50%">
              <FileInput name="profile" />
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
                <Input name="birth_date" defaultValue="" type="date" />
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
            <Button type="submit">Cadastrar</Button>
          </FormFooter>
        </FormContainer>
      </Form>
    </Container>
  );
}
