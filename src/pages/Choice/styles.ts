import styled from 'styled-components/native';
import { string } from 'yup';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #6548a3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.Image`
  position: absolute;
  width: 160px;
  height: 32px;

  top: 264px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  top: 364px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff6680;
  border-radius: 100px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
`;
