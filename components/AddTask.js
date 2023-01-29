//import liraries
import React, { useState} from 'react';
import { View, Text, Keyboard, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import  { firebase } from '../src/config';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const handleAdd = () => {
        firebase.firestore()
        .collection('notes')
        .add({
            title, note,
        })
        .then(() => {
            setTitle('')
            setNote('')
            Keyboard.dismiss(); //Oculta o teclado
        })
        .catch((error) => {
            alert(error)
        });
    }
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Título'
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.inputTitle}
            />
            <TextInput 
                placeholder='Descrição'
                value={note}
                onChangeText={(text) => setNote(text)}
                style={styles.inputNote}
                multiline={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleAdd}
            >
                <Text style={styles.buttonText}>
                    Adicionar
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default AddTask

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputTitle: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '97%',
        borderBottomWidth: 1/2,
        borderBottomColor: '#000',
        padding: 10
    },
    inputNote: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
        height: 200,
        width: '97%',
        borderBottomWidth: 1/2,
        borderBottomColor: '#000',
        padding: 10
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        height: 55,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        shadowColor: 'black'
    },
    buttonText: {
        color: 'black',
        fontSize: 19,
    }
})