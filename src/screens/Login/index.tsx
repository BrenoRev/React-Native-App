import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import style from './styles';

const metodo = () => {
  console.log('teste');
};

const Login = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello World</Text>
      <Button title="Click Me" onPress={() => metodo()} />
    </View>
  );
};


export default Login;
