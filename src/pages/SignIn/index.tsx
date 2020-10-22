import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import firebase from 'firebase';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Image,
  InputContainer,
  Button,
  ButtonText,
  CreateAccountButton,
  CreateAccountButtonText,
  ForgotAccButton,
  ForgotAccButtonText,
} from './styles';
import logo from '../../../assets/logotipo.png';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigation();

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail valido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);

      navigate.navigate('Home');
    } catch (err) {
      console.log(err);
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais',
      );
    }
  }, []);

  return (
    <Container>
      <Image source={logo} />
      <InputContainer>
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="Email" />
          <Input name="Password" />
        </Form>
      </InputContainer>
      <Button
        onPress={() => {
          formRef.current?.submitForm();
        }}
      >
        <ButtonText>Entrar</ButtonText>
      </Button>

      <ForgotAccButton onPress={() => navigate.navigate('ForgotPass')}>
        <ForgotAccButtonText>Esqueci minha senha</ForgotAccButtonText>
      </ForgotAccButton>

      <CreateAccountButton onPress={() => navigate.navigate('CreateAcc')}>
        <Icon
          name="log-in"
          size={20}
          color="black"
          style={{ marginRight: 20 }}
        />
        <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
      </CreateAccountButton>
    </Container>
  );
};

export default SignIn;
