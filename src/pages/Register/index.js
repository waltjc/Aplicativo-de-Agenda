import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, Alert } from 'react-native';

import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { firebase, db } from '../../config/config';
import styles from './styles';

export default function Register({navigation}) {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ password, setPassword ] = useState('');

    const registerFirebase = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            firebase.firestore()
            .collection('users')
            .add({
                name, email, phone, password
            })
        })
        .catch((error) => {
            alert(error)
        })
    }

 return (
    <View style={styles.view}>
        <Text style={styles.header}>Olá, seja bem vindo!</Text>
        <Text style={styles.subHeader}>É bom te ver aqui.</Text>
        <TextInput 
            value={name}
            onChangeText={setName}
            style={styles.inputEmail}
            placeholder="Digite o usuário"
            placeholderTextColor="#858587"
        />

        <TextInput 
            value={email}
            onChangeText={setEmail}
            style={styles.inputAll}
            placeholder="Digite o email"
            placeholderTextColor="#858587"
        />

        <TextInput 
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={styles.inputAll}
            placeholder="Digite o telefone"
            placeholderTextColor="#858587"
        />
        
        <TextInput 
            value={password}
            onChangeText={setPassword}
            style={styles.inputAll}
            placeholder="Digite a senha"
            placeholderTextColor="#858587"
            secureTextEntry={true}
        />

        <TouchableOpacity
            style={styles.button}
            onPress={() => registerFirebase(name, email, phone, password )}
        >
            <Text style={styles.txtButton}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.txtFoot}>Já possui conta? Entre aqui</Text>
        </TouchableOpacity>
    </View>
  );
}