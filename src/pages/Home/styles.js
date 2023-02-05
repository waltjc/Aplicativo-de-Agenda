import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: '#0F0D19',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        top: 100,
        paddingHorizontal: 25
    },
    slogan: {
        flex: 1,
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        top: 120,
        marginLeft: 10, 
        paddingHorizontal: 20
    },
    subtitle: {
        flex: 1,
        color: '#B2B2B2B2',
        fontSize: 17,
        bottom: 15,
        marginLeft: 10,
        paddingHorizontal: 20
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 10
    },
    buttonRegister: {
        width: 150,
        height: 65,
        borderRadius: 16,
        backgroundColor: '#DDDDE1',
        alignItems: 'center',
        justifyContent: 'center',
        right: 15,
        overflow: 'hidden'
    },
    txtButtonRegister: {
        color: '#111',
        fontSize: 22
    },
    buttonLogin: {
        width: 150,
        height: 65,
        borderRadius: 16,
        backgroundColor: '#272530',
        alignItems: 'center',
        justifyContent: 'center',
        left: 5
    },
    txtButtonLogin: {
        color: '#FFF',
        fontSize: 22
    }
})

export default styles;