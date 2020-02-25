import React, { useState, useRef } from 'react';
import { Form } from '@unform/web';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import {
  Container,
  DashContainer,
  InputContainer,
  List,
  ListRow,
  ListItem,
  ItemTitle,
} from './styles';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const formRef = useRef(null);

  async function handleSearch(_, { reset }) {
    const { data: response } = await api.get(
      `/users?name=${formRef.current.getFieldValue('name')}`
    );

    setUsers(response);

    reset();
  }

  async function handleSearchByCPF(data, { reset }) {
    const { data: response } = await api.get(`/users/${data.searchCPF}`);

    setUsers(response);

    reset();
  }

  console.log(users);
  return (
    <>
      <Header searchCPF={handleSearchByCPF} />
      <Container>
        <Sidebar />
        <DashContainer>
          <h3>Pessoas</h3>
          <Form ref={formRef} onSubmit={handleSearch}>
            <InputContainer>
              <Input name="name" type="text" placeholder="Procure por nome" />
              <FaSearch />
            </InputContainer>
          </Form>
          <List>
            {users[0]?.photo_id ? (
              <ListRow>
                {users.map(user => (
                  <ListItem key={user.user_id?._id}>
                    {console.log(user.photo_id)}
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/files/${user.photo_id?.path}`}
                      alt="profile"
                      key={user.photo_id?._id}
                    />
                  </ListItem>
                ))}
              </ListRow>
            ) : (
              <ListRow>
                {users.map(user => {
                  return (
                    <ListItem key={user._id}>
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/files/${user.photo?.path}`}
                        alt="profile"
                        key={user.photo}
                      />
                      <ItemTitle key={user._id}>
                        <span key={user._id}>{user.name}</span>
                      </ItemTitle>
                    </ListItem>
                  );
                })}
              </ListRow>
            )}
          </List>
        </DashContainer>
      </Container>
    </>
  );
}
