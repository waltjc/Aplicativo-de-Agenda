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

    // PARTE DO DATEPICKER
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const userID = firebase.auth().currentUser.uid;

    function handleAdd() {
        firebase.firestore()
        .collection(userID)
        .add({
            title, note, noteDate,
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

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = tempDate.getHours()+ 'h' + ':' + tempDate.getMinutes() + 'm';
        setText(fDate + '\n' + fTime);
        setNoteDate(fDate);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
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
            
            <TouchableOpacity
                style={styles.buttonData}
                onPress={() => showMode('date')}
            >
                <Text style={styles.buttonTextData}>
                    Adicionar data
                </Text>
            
                {show && (
                <DateTimePicker
                testID='dateTimePicker'
                locale="pt-BR"
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
            />)}
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