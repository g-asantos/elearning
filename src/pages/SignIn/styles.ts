import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #6548a3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.View`
  position: absolute;
  top: 320px;
`;

export const Image = styled.Image`
  position: absolute;
  width: 160px;
  height: 32px;

  top: 264px;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  width: 203px;
  height: 56px;

  top: 480px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff6680;
  border-radius: 100px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  line-height: 18px;
`;

export const ForgotAccButton = styled.TouchableOpacity`
  position: absolute;
  width: 180px;
  height: 20px;

  top: 570px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ForgotAccButtonText = styled.Text`
  color: #ff6680;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  width: 180px;
  height: 20px;

  top: 670px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountButtonText = styled.Text`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
