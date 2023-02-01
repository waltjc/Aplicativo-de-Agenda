import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect} from 'react'

import {firebase} from '../../config/config'

import styles from './styles';
import { FlashList } from '@shopify/flash-list';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Task({ navigation, route }) {

    const [notes, setNotes] = useState([]);
    const userID = firebase.auth().currentUser.uid;

    function logout(){
        firebase.auth().signOut()
        .then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
        })
    }
    //Pegando os dados do firestore
    useEffect(() => {
        firebase.firestore()
        .collection(userID)
        .onSnapshot((querySnapshot) => {
            const newNotes = [];
            querySnapshot.forEach((doc) => {
                const {note, title, noteDate} = doc.data();
                newNotes.push({note, title, noteDate, id: doc.id});
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
                        onPress={() => navigation.navigate('Details', {item})}
                    >
                        <Text style={styles.noteTitle}>
                            {item.title}
                        </Text>

                        <Text style={styles.noteDescription}>
                            {item.note}
                        </Text>

                        <Text style={styles.noteDate}>
                            {item.noteDate}
                        </Text>
                    </Pressable>
                </View>
            )}
            />
        <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={() => navigation.navigate('NewTask')}
        >
            <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonLogout}
                onPress={logout}
            >
                <Text style={styles.iconButtonLogout}>
                    <MaterialCommunityIcons 
                        name='location-exit'
                        size={30}
                        color="#636AF2"
                    />
                </Text>
                
            </TouchableOpacity>
        </View>
    )
}