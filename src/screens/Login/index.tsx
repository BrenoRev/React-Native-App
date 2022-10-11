import React, { useState } from 'react';
import { SafeAreaView, Image, TextInput, Text, Alert, TouchableOpacity, View, ScrollView } from 'react-native';
import style from './styles';
import imageLogo from '../../assets/img-logo.png';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        Alert.alert('Seja bem vindo, ' + email);
        console.log(email, password);
        if(email.length < 6) {
            Alert.alert('Email inválido');
        }

        if(password.length < 6) {
            Alert.alert('Senha inválida');
        }
    } 
    return (
        <ScrollView style={style.scroll}>
        <SafeAreaView style={style.container}>
            <Image source={imageLogo} style={style.image} resizeMode="contain"/>
            <View style={style.content}>
                <TextInput 
                    placeholder="Email"
                    style={style.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                <TextInput 
                    placeholder="Senha" 
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={style.input}/>
                <TouchableOpacity style={style.button}>
                    <Text 
                        onPress={() => handleLogin()}
                        style={style.textButton}> 
                            Entrar 
                    </Text>
                </TouchableOpacity>
                <Text 
                    style={style.text}> 
                        Esqueci Minha Senha 
                </Text>
            </View>
        </SafeAreaView>
        </ScrollView>
    );
};


export default Login;
