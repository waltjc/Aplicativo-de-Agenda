//import liraries
import React, { useState} from 'react';
import { View, Text, Keyboard, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import { firebase } from '../../config';
import { Header } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NewTask({ navigation, route }, props) {
    // PARTE DE AUTENTICAÇÕES
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [noteDate, setNoteDate] = useState('');
    const [uid, setUid] = useState(firebase.auth().currentUser.uid);

    function handleAdd() {
        firebase.firestore()
        .collection('tasks')
        .add({
            title, note, noteDate, uid
        })
        .then(() => {
            setTitle('')
            setNote('')
            setNoteDate('')
            Keyboard.dismiss(); //Oculta o teclado
            navigation.navigate("Task");
        })
        .catch((error) => {
            alert(error)
        });
    }

    const isNumber = () => {
        if (isNaN(inputValue)) {
          alert('Não é um número');
        } else {
          alert('É um número');
        }
      };

    return (
        <View style={styles.container}>
            <Header
                placement="center"
                centerComponent={{ text: 'Adicionar Tarefa', style: { color: '#fff', fontSize: 22 } }}
                backgroundColor='#0F0D19'
            />

            <TextInput 
                placeholder='Título'
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.inputTitle}
                placeholderTextColor="#858587"
            />
            <TextInput 
                placeholder='Descrição: reunião às 16h'
                value={note}
                onChangeText={(text) => setNote(text)}
                style={styles.inputNote}
                multiline={true}
                placeholderTextColor="#858587"
            />

            <TextInput 
                placeholder='Data: xx/xx/xxxx'
                value={noteDate}
                onChangeText={(text) => setNoteDate(text)}
                style={styles.inputDate}
                multiline={true}
                placeholderTextColor="#858587"
            />
            
            <TouchableOpacity
                style={styles.buttonData}
                onPress={() => showMode('date')}
            >

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={handleAdd}
            >
                <Text style={styles.buttonText}>
                    Adicionar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.navigate('Task')}
            >
                <Text style={styles.iconButtonBack}>
                    <MaterialCommunityIcons 
                        name='keyboard-backspace'
                        size={30}
                        color="#FFF"
                    />
                </Text>
            </TouchableOpacity>
        
        </View>
    )
};