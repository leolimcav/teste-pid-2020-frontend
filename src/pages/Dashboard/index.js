import React from 'react';
import { Form } from '@unform/web';
import { FaSearch } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import profile from '../../assets/12.png';

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
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <DashContainer>
          <h3>Pessoas</h3>
          <Form>
            <InputContainer>
              <Input
                name="searchCPF"
                type="text"
                id="searchCPF"
                placeholder="Procure por nome"
              />
              <FaSearch />
            </InputContainer>
          </Form>
          <List>
            <ListRow>
              <ListItem>
                <img src={profile} alt="profile" />
                <ItemTitle>
                  <span>Carla Almeida</span>
                  <MdModeEdit />
                </ItemTitle>
              </ListItem>
              <ListItem>
                <img src={profile} alt="profile" />
                <ItemTitle>
                  <span>Carla Almeida</span>
                  <MdModeEdit />
                </ItemTitle>
              </ListItem>
              <ListItem>
                <img src={profile} alt="profile" />
                <ItemTitle>
                  <span>Carla Almeida</span>
                  <MdModeEdit />
                </ItemTitle>
              </ListItem>
              <ListItem>
                <img src={profile} alt="profile" />
                <ItemTitle>
                  <span>Carla Almeida</span>
                  <MdModeEdit />
                </ItemTitle>
              </ListItem>
            </ListRow>
            <ListRow>
              <ListItem>
                <img src={profile} alt="profile" />
                <ItemTitle>
                  <span>Carla Almeida</span>
                  <MdModeEdit />
                </ItemTitle>
              </ListItem>
              <ListItem>
                <img src={profile} alt="profile" />
                <ItemTitle>
                  <span>Carla Almeida</span>
                  <MdModeEdit />
                </ItemTitle>
              </ListItem>
              <ListItem>
                <img src={profile} alt="profile" />
                <ItemTitle>
                  <span>Carla Almeida</span>
                  <MdModeEdit />
                </ItemTitle>
              </ListItem>
              <ListItem>
                <img src={profile} alt="profile" />
                <ItemTitle>
                  <span>Carla Almeida</span>
                  <MdModeEdit />
                </ItemTitle>
              </ListItem>
            </ListRow>
          </List>
        </DashContainer>
      </Container>
    </>
  );
}
