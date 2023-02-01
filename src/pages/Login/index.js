import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {firebase} from '../../config/config'
import styles from './styles';

export default function Login({navigation}) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorLogin, setErrorLogin ] = useState('');

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate('Task');
            errorLogin = false;
        })
        .catch((error) => {
            setErrorLogin(true);
            let errorCode = error.code;
            let errorMessage = error.message;
        })
    }
    //Verificando se existe um usuário conectado
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if(user){
                navigation.navigate("Task", { idUser: user.uid});
            }
        })
    }, [])

 return (
    <View style={styles.view}>
        <Text style={styles.header}>Login</Text>

        <TextInput 
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Digite o email"
            placeholderTextColor="#636AF2"
        />
        
        <TextInput 
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Digite a senha"
            placeholderTextColor="#636AF2"
            secureTextEntry={true}
        />

        {errorLogin == true
        ?
            <View style={styles.contentAlert}> 
                <MaterialCommunityIcons
                    name='alert-circle'
                    size={24}
                    color="#636AF2"
                />
                <Text style={styles.warningAlert}>Email ou senha inválidos</Text>
            </View>
        :
           <View/>
            
        }

        {email == "" || password == ""
        ?
            <TouchableOpacity
                disabled={true}
                style={styles.button}
            >
                
                <Text style={styles.txtButton}>Entrar</Text>
            </TouchableOpacity>
        :
            <TouchableOpacity
                onPress={() => loginFirebase(email, password)}
                style={styles.button}
            >
                <Text style={styles.txtButton}>Entrar</Text>
            </TouchableOpacity>
        }


        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.txtFoot}>Não possui conta? Cadastre-se</Text>
        </TouchableOpacity>
    </View>
  );
}