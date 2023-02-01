//import liraries
import React, { useState} from 'react';
import { View, Text, Keyboard, TextInput, TouchableOpacity, Platform} from 'react-native';

import styles from './styles';
import { firebase } from '../../config/config';
import DateTimePicker from '@react-native-community/datetimepicker';

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

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Título'
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.inputTitle}
                placeholderTextColor="#636AF2"
            />
            <TextInput 
                placeholder='Descrição'
                value={note}
                onChangeText={(text) => setNote(text)}
                style={styles.inputNote}
                multiline={true}
                placeholderTextColor="#636AF2"
            />

            <TextInput 
                placeholder='Data'
                value={noteDate}
                onChangeText={(text) => setNoteDate(text)}
                style={styles.inputDate}
                multiline={true}
                placeholderTextColor="#636AF2"
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
        
        </View>
    )
};