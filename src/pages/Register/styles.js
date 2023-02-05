import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: '#0F0D19',
        width: '100%',
        alignItems: 'center'
    },
    header: {
        fontSize: 34,
        color: '#DDDDE1',
        fontWeight: 'bold',
        paddingTop: 120,
    },
    subHeader: {
        fontSize: 22,
        color: '#DDDDE1',
        marginBottom: 25
    },
    inputEmail: {
        fontSize: 18,
        color: '#DDDDE1',
        marginTop: 10,
        marginLeft: 5,
        width: '100%',
        height: 48,
        padding: 10,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#28DF99'
    },
    inputAll: {
        fontSize: 18,
        color: '#DDDDE1',
        marginTop: 10,
        marginLeft: 5,
        width: '100%',
        height: 48,
        padding: 10,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#3F3D47'
    },
    button: {
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DDDDE1",
        borderRadius: 15,
        marginTop: 30
    },
    txtButton: {
        color: '#0F0D19',
        fontSize: 22,
        fontWeight: 'bold'
    },
    txtFoot: {
        color: "#858587",
        fontSize: 13,
        marginTop: 15
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#636AF2",
        fontSize: 16
    }
})

export default styles;