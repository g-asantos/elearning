/* eslint-disable react/prop-types */
import React, { useEffect, useRef, forwardRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  containerStyle?: {};
}

interface InputValueReference {
  value: string;
}

const Input: React.RefForwardingComponent<InputProps> = (
  { name, containerStyle = {}, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container style={containerStyle}>
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder={name}
        returnKeyType="next"
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
      />
    </Container>
  );
};

export default forwardRef(Input);
