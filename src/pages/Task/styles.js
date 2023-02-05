import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0D19',
        paddingTop: 20
    },
    noteView: {
        flex: 1,
        backgroundColor: '#DDDDE1',
        margin: 10,
        padding: 5,
        borderRadius: 10,
        elevation: 7,
        alignItems: 'center'
    },
    noteTitle: {
        fontSize: 22,
        color: "#0F0D19",
        fontWeight: 'bold'
    },
    noteDescription: {
        fontSize: 18,
        color: "#0F0D19",
        marginTop: 5
    },
    noteDate: {
        fontSize: 14,
        color: '#0F0D19',
        marginTop: 5
    },
    buttonNewTask:{
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: "#28DF99",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonLogout: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 58,
        right: 5,
        justifyContent: "center",
        alignItems:"center"
    },
    iconButtonLogout: {
        color: "#fffff",
        fontSize: 25,
        fontWeight:"bold"
    },
    iconButton:{
        color:"#0F0D19",
        fontSize:23
    },
})

export default styles;