/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import eImage from '../../../assets/e.learning.png';


export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #6548a3;
`;

export const ImageContainer = styled.View`
position: absolute;
left: -12.27%;
right: -12.27%;
top: 3.69%;
bottom: 33.99%;
width: 467px;
height: 506px;
`

export const EImage = styled.Image`
  width: 100%;
  border-width: 4px;
  border-color: #5E4399;



`;

export const StudentImage = styled.Image`

position: absolute;
left: 9.6%;
right: 36.27%;
top: 16.13%;
bottom: 46.43%;

`;
export const LearnContainer = styled.View`
position: absolute;
width: 225px;
height: 86px;
left: 40px;
top: 499px;


`

export const LearnText = styled.Text`
font-size: 36px;
line-height: 43px;
color: #FF6680;
width: 120%;


`;


export const PlatformContainer = styled.View`
position: absolute;
width: 217px;
height: 75px;
left: 40px;
top: 601px;

`

export const PlatformText = styled.Text`

font-size: 15px;
line-height: 25px;
text-align: auto;
color: #EDEBF5;

`;

export const Button = styled.TouchableOpacity`
position: absolute;
width: 303px;
height: 56px;
left: 36px;
top: 716px;
display: flex;
align-items: center;
justify-content: center;

background: #FF6680;
border-radius: 100px;
`


export const ButtonText = styled.Text`
color: #FFFFFF;
font-size: 15px;
line-height: 18px;
`

