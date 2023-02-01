import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, Alert } from 'react-native';

import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { firebase, db } from '../../config/config';
import styles from './styles';

export default function Register() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const registerFirebase = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
        })
        .catch((error) => {
            alert()
        })
    }

    function updateData() {
        updateDoc(doc(db, "users", "1"), {
            email: email,
            password: password
        }).then(() => {
            Alert.alert("Usuário alterado com sucesso");
        }).catch((error) => {
            Alert.alert("Deu erro: " + error);
        })
    }
        
    function deleteData() {
        deleteDoc(doc(db, "users", "1"));
    }

 return (
    <View style={styles.view}>
        <Text style={styles.header}>Cadastro</Text>

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

        <TouchableOpacity
            style={styles.button}
            onPress={() => registerFirebase(email, password)}
        >
            <Text style={styles.txtButton}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
  );
}