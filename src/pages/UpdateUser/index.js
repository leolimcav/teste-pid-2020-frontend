import React, { useRef } from 'react';

import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import FileInput from '../../components/FileInput';

import { Container, Wrapper, InputContainer, Button } from './styles';

import api from '../../services/api';

export default function UpdateUser() {
  const history = useHistory();
  const formRef = useRef(null);

  async function handleSubmit() {
    const profile = new FormData();
    profile.append('profile', formRef.current.getFieldRef('profile').files[0]);

    const { data: picture } = await api.post(`/files`, profile);
    console.log(picture);
    const { data: response } = await api.put(
      `/users/${localStorage.getItem('id')}`,
      { photo: picture.file._id }
    );
    console.log(response);

    localStorage.removeItem('profile');
    localStorage.setItem('profile', response.photo?.path);
    history.push('/dashboard');
  }
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Wrapper>
          <span>Atualizar Usuario</span>
          <Form
            ref={formRef}
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <InputContainer>
              <FileInput name="profile" />
            </InputContainer>
            <Button type="submit">Atualizar</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}
