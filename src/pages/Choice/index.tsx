/* eslint-disable global-require */
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Image,
  Button,
  ButtonText,
  ButtonContainer,
} from './styles';
import logo from '../../../assets/logotipo.png';

const Choice: React.FC = () => {
  const navigate = useNavigation();

  return (
    <Container>
      <Image source={logo} />
      <ButtonContainer>
        <Button
          style={{ marginRight: 20 }}
          onPress={() => navigate.navigate('Home')}
        >
          <ButtonText>Student</ButtonText>
        </Button>
        <Button
          style={{ backgroundColor: '#F0EDF5' }}
          onPress={() => navigate.navigate('SignIn')}
        >
          <ButtonText style={{ color: '#6C6C80' }}>Mentor</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Choice;
