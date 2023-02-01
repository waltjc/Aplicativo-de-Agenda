import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '97%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#636AF2',
        padding: 10
    },
    inputNote: {
        fontSize: 18,
        height: 240,
        width: '97%',
        borderColor: '#636AF2',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 2
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        height: 55,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        shadowColor: 'black'
    },
    buttonData: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        height: 55,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        shadowColor: 'black'
    },
    buttonText: {
        color: 'black',
        fontSize: 19,
    },
    buttonTextData: {
        color: 'black',
        fontSize: 16,
    }
})

export default styles;