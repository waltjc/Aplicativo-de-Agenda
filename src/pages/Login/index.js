import { MaterialCommunityIcons } from '@expo/vector-icons';
import { collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {TextInput, View, Text, TouchableOpacity } from 'react-native';

import {firebase} from '../../config/config'
import styles from './styles';

export default function Login({navigation}) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorLogin, setErrorLogin ] = useState('');

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            navigation.navigate('Task');
            setErrorLogin(false);
        })
        .catch((error) => {
            setErrorLogin(true);
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
        <Text style={styles.header}>Bem vindo de volta!</Text>
        <Text style={styles.subHeader}>É bom te rever.</Text>

        <TextInput 
            value={email}
            onChangeText={setEmail}
            style={styles.inputEmail}
            placeholder="Email"
            placeholderTextColor="#858587"
        />
        
        <TextInput 
            value={password}
            onChangeText={setPassword}
            style={styles.inputPassword}
            placeholder="Senha"
            placeholderTextColor="#858587"
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
            <Text style={styles.txtFoot}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
    </View>
  );
}