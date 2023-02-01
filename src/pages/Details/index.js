import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from '../../config/config';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Details ({ navigation, route }) {
    const [noteText, setNoteText] = useState(route.params.item.note);
    const [noteTitle, setNoteTitle] = useState(route.params.item.title);
    const [noteDate, setNoteDate] = useState(route.params.item.noteDate);

    const userID = firebase.auth().currentUser.uid;
    
    const handleUpdate = () => {
        if (noteTitle && noteTitle.length > 0){
            firebase.firestore()
            .collection('tasks')
            .doc(route.params.item.id)
            .update({
                title: noteTitle,
                note: noteText,
                noteDate: noteDate,
            })
            .then(() => {
                navigation.navigate('Task');
            })
            .catch((error) => {
                alert(error);
            })
        }
    }

    //DELETAR A NOTA
    const handleDelete = () => {
        firebase.firestore()
        .collection('tasks')
        .doc(route.params.item.id)
        .delete()
        .then(() => {
            navigation.navigate('Task');
        })
        .catch((error) => {
            alert(error);
        })
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Titulo'
                value={noteTitle}
                onChangeText={(text) => setNoteTitle(text)}
                style={styles.inputTitle}
            />
            <TextInput
                placeholder='Descrição'
                value={noteText}
                onChangeText={(text) => setNoteText(text)}
                style={styles.inputNote}
                multiline={true}
            />

            <TextInput 
                placeholder='Data dd/mm/aaaa'
                value={noteDate}
                onChangeText={(text) => setNoteDate(text)}
                style={styles.inputDate}
                placeholderTextColor="#636AF2"
            />

            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleDelete}
                >
                    <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleUpdate}
                >
                    <Text style={styles.buttonText}>Atualizar</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
};
