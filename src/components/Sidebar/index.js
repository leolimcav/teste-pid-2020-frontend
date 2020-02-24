import React from 'react';

import { Container, Name, Button, Gallery } from './styles';

import profile from '../../assets/10.png';

export default function Sidebar() {
  return (
    <Container>
      <img src={profile} alt="profile" />
      <Name>Júlia Amélia</Name>
      <Button
        bgc="#fff"
        color="#c753f8"
        border="#c753f8"
        width="8.3vw"
        height="3.4vh"
      >
        Editar
      </Button>
      <Button
        bgc="#25cb88"
        color="#fff"
        border="#25cb88"
        width="8.3vw"
        height="3.4vh"
      >
        Adicionar
      </Button>
      <Button
        bgc="#ff6177"
        color="#fff"
        border="#ff6177"
        width="8.3vw"
        height="3.4vh"
      >
        Remover
      </Button>
      <h2>Minhas Fotos</h2>
      <Gallery>
        <img src={profile} alt="gallery" />
        <img src={profile} alt="gallery" />
        <img src={profile} alt="gallery" id="third" />
        <img src={profile} alt="gallery" id="fourth" />
      </Gallery>
      <span>See more...</span>
    </Container>
  );
}
