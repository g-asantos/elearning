import React from 'react';
import { Container, Image } from './styles';
import logo from '../../../assets/logotipo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
};

export default Header;
