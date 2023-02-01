import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: '#E9E9F2',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS == "ios" ? 0 : 50
    },
    header: {
        fontSize: 50,
        color: '#636AF2',
        fontWeight: 'bold'
    },
    input: {
        fontSize: 20,
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#636AF2',
        marginLeft: "auto",
        marginRight: "auto",
        color:"#636AF2"
    },
    button: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#636AF2",
        borderRadius: 50,
        marginTop: 30
    },
    txtButton: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    txtFoot: {
        color: "#636AF2",
        fontSize: 12,
        marginTop: 25
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