import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Name, Button } from './styles';

export default function Sidebar() {
  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('name'));
    setProfile(localStorage.getItem('profile'));
  }, []);
  // async function handleDelete() {
  //   await api.delete(`/users/${cpf}`);

  //   localStorage.removeItem('id');
  //   localStorage.removeItem('name');
  //   localStorage.removeItem('cpf');
  //   localStorage.removeItem('profile');

  //   history.push('/');
  // }
  return (
    <Container>
      <img
        src={`${process.env.REACT_APP_BASE_URL}/files/${profile}`}
        alt="profile"
      />
      <Name>{name}</Name>
      <Link to="/updateuser">
        <Button
          bgc="#fff"
          color="#c753f8"
          border="#c753f8"
          width="8.3vw"
          height="3.4vh"
        >
          Editar
        </Button>
      </Link>
      <Link to="/deleteuser">
        <Button
          bgc="#ff6177"
          color="#fff"
          border="#ff6177"
          width="8.3vw"
          height="3.4vh"
        >
          Remover
        </Button>
      </Link>
    </Container>
  );
}
