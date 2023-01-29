import React, { useState } from 'react';
import { Image, TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebase } from '../src/config';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login({navigation}) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const Stack = createNativeStackNavigator;

    loginUser = async (email, password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(value => {
                navigation.navigate('Home');
            })
        } catch (error){
            alert(error.message)
        }
    }

 return (
    <View style={styles.view}>
        <Text style={styles.header}>Login</Text>

        <TextInput 
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Digite seu email..."
            placeholderTextColor="#FFF"
        />
        
        <TextInput 
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Digite seu password..."
            placeholderTextColor="#FFF"
        />

        <TouchableOpacity
            onPress={() => loginUser(email, password)}
            style={styles.button}
        >
            <Text style={styles.txtButton}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.txtFoot}>Não possui conta?</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 15,
    },
    header: {
        fontSize: 34,
        color: '#67b05b',
        fontWeight: 'bold'
    },
    input: {
        width: '90%',
        height: 50,
        
        padding: 15,
        marginVertical: 10,
        
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        
        backgroundColor: '#67b05b',
        color: '#FFF',
        fontSize: 20
    },
    button: {
        backgroundColor: '#67b05b',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10
    },
    txtButton: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    txtFoot: {
        color: "#67b05b",
        fontSize: 14,
        marginTop: 25
    }
})