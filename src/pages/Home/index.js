import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
export default function Home ({navigation}) {
    return (
        <View style={styles.view}>
            <View style={styles.logo}> 
                <Image source={require('../../../assets/logo.png')} />
            </View>

            <Text style={styles.slogan}>Organize sua vida e seu trabalho</Text>
            <Text style={styles.subtitle}>Crie diferentes tarefas para organizar sua rotina com poucos toques.</Text>

            <View style={styles.buttonView}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Register')}
                    style={styles.buttonRegister}
                >
                    <Text style={styles.txtButtonRegister}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.buttonLogin}
                >
                    <Text style={styles.txtButtonLogin}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

