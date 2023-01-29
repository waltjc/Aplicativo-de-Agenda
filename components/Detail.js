import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from '../src/config';
import { useNavigation } from '@react-navigation/native';


const Detail = ({route}) => {
    const navigation = useNavigation();
    const [noteText, setNoteText] = useState(route.params.item.note);
    const [noteTitle, setNoteTitle] = useState(route.params.item.title);

    const handleUpdate = () => {
        if (noteTitle && noteTitle.length > 0){
            firebase.firestore()
            .collection('notes')
            .doc(route.params.item.id)
            .update({
                title: noteTitle,
                note: noteText,
            })
            .then(() => {
                navigation.navigate('Home');
            })
            .catch((error) => {
                alert(error);
            })
        }
    }

    //DELETAR A NOTA
    const handleDelete = () => {
        firebase.firestore()
        .collection('notes')
        .doc(route.params.item.id)
        .delete()
        .then(() => {
            navigation.navigate('Home');
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '95%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#67b05b',
        padding: 10
    },
    inputNote:{
        fontSize: 18,
        height: 240,
        width: '95%',
        borderColor: '#67b05b',
        borderWidth: 1/2,
        borderRadius: 5,
        padding: 10,
        margin: 2
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '95%'
    },
    button:{
        flex: 1,
        backgroundColor: 'white',
        margin: 18,
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { Width: 0, height: 2},
        shadowOpacity: 0.8,
        elevation: 7,
        alignItems: 'center'
    },
    buttonText: {
        color: '#000',
        fontSize: 18
    }
});

export default Detail;
