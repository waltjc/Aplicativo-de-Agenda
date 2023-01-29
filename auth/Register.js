import React, { useState } from 'react';
import { Image, TextInput, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { doc, setDoc, collection, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import {firebase, auth, db} from '../src/config';

export default function Register({ navigation }) {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    registerUser = async (email, password, name) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebase.firestore.collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
                name,
                email,
                password,
            })
            .catch((error) => {
                alert(error.message)
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    function updateData() {
        updateDoc(doc(db, "users", "1"), {
            name: name,
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
        <Text style={styles.header}>Cadastro de usuário</Text>

        <TextInput 
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder="Digite seu nome..."
            placeholderTextColor="#FFF"
        />

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
            placeholder="Digite sua senha..."
            placeholderTextColor="#FFF"
        />

        <TouchableOpacity
            style={styles.button}
            onPress={() => registerUser(email, password)}
        >
            <Text style={styles.txtButton}>Cadastrar</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: '#FFF',
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
        
        borderColor: '#67b05b',
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
    }
})