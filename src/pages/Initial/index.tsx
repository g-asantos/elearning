/* eslint-disable global-require */
import React from 'react';
import { useFonts } from '@expo-google-fonts/rubik';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ImageContainer,
  EImage,
  StudentImage,
  LearnText,
  LearnContainer,
  PlatformText,
  PlatformContainer,
  Button,
  ButtonText,
} from './styles';
import eImage from '../../../assets/e.learning.png';
import studentImage from '../../../assets/Vector.png';

const Initial: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular: require('../../../assets/fonts/Rubik-Regular.ttf'),
    Roboto_400Regular: require('../../../assets/fonts/Roboto-Regular.ttf'),
    Roboto_500Medium: require('../../../assets/fonts/Roboto-Medium.ttf'),
  });

  const navigate = useNavigation();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <ImageContainer>
        <EImage source={eImage} />
      </ImageContainer>

      <StudentImage source={studentImage} />

      <LearnContainer>
        <LearnText style={{ fontFamily: 'Rubik_400Regular' }}>
          Aprenda da melhor forma
        </LearnText>
      </LearnContainer>

      <PlatformContainer>
        <PlatformText style={{ fontFamily: 'Roboto_400Regular' }}>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
        </PlatformText>
      </PlatformContainer>

      <Button onPress={() => navigate.navigate('Choice')}>
        <ButtonText style={{ fontFamily: 'Roboto_500Medium' }}>
          Começar os estudos
        </ButtonText>
      </Button>
    </Container>
  );
};

export default Initial;
