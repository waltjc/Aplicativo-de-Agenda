import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect} from 'react'
import { firebase } from '../src/config'
import { useNavigation } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list';
import { Entypo } from '@expo/vector-icons';

const Home = () => {

    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();

    //Pegando os dados do firestore
    useEffect(() => {
        firebase.firestore()
        .collection('notes')
        .onSnapshot((querySnapshot) => {
            const newNotes = [];
            querySnapshot.forEach((doc) => {
                const {note, title} = doc.data();
                newNotes.push({note, title, id: doc.id});
            });
            setNotes(newNotes);
        });
    }, []);


    return (
        <View style={styles.container}>
            <FlashList
            data={notes}
            numColumns={2}
            estimatedItemSize={100}
            renderItem={({item}) => (
                <View style={styles.noteView}>
                    <Pressable
                        onPress={() => navigation.navigate('Detail', {item})}
                    >
                        <Text style={styles.noteTitle}>
                            {item.title}
                        </Text>
                        <Text style={styles.noteDescription}>
                            {item.note}
                        </Text>
                    </Pressable>
                </View>
            )}
            />
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('NoteAdd')}
        >
            <Entypo name='plus' size={45} color='#67b05b'/>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    noteView: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { Width: 0, height: 2},
        shadowOpacity: 0.8,
        elevation: 7,
        alignItems: 'center'
    },
    noteTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    noteDescription: {
        fontSize: 16,
        marginTop: 5
    },
    button: {
        position: 'absolute',
        bottom: 60,
        right: 30,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        elevation: 7
    }
})
export default Home