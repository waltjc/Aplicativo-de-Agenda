import { StyleSheet } from "react-native";

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
        borderColor: '#636AF2',
        padding: 10
    },
    inputNote:{
        fontSize: 18,
        height: 240,
        width: '95%',
        borderColor: '#636AF2',
        borderWidth: 1/2,
        borderRadius: 5,
        padding: 10,
        margin: 2
    },
    inputDate: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '97%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#636AF2',
        padding: 10
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
    buttonDate: {
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
    buttonText: {
        color: '#000',
        fontSize: 18
    }
});

export default styles;