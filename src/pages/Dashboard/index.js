import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { Container, DashContainer } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <DashContainer>
          <h1>Dashboard</h1>
        </DashContainer>
      </Container>
    </>
  );
}
