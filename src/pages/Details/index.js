import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Header } from 'react-native-elements';
import { firebase } from '../../config';
import styles from './styles';

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
            <Header
                placement="center"
                centerComponent={{ text: 'Editar Tarefa', style: { color: '#fff', fontSize: 22 } }}
                backgroundColor='#0F0D19'
            />

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
            <TouchableOpacity
                style={styles.buttonBack}
                onPress={() => navigation.navigate('Task')}
                >
                    <Text style={styles.iconButtonBack}>
                        <MaterialCommunityIcons 
                            name='keyboard-backspace'
                            size={30}
                            color="white"
                        />
                    </Text>
                </TouchableOpacity>

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
