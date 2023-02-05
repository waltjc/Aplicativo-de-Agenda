import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0F0D19'
    },
    inputTitle: {
        fontSize: 18,
        color: '#FFF',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '97%',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#28DF99',
        padding: 10
    },
    inputNote: {
        fontSize: 18,
        color: '#FFF',
        height: 150,
        width: '97%',
        borderColor: '#3F3D47',
        borderWidth: 1,
        borderRadius: 12,
        padding: 10,
        margin: 2
    },
    inputDate: {
        fontSize: 18,
        color: '#FFF',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '97%',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#3F3D47',
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
    },
    buttonBack: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 40,
        left: 10,
        justifyContent: "center",
        alignItems:"center"
    },
    iconButtonBack: {
        color: "#fffff",
        fontSize: 25,
        fontWeight:"bold"
    }
});

export default styles;