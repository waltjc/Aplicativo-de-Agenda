import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9E9F2',
        paddingTop: 20
    },
    noteView: {
        flex: 1,
        backgroundColor: '#636AF2',
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
        color: "white",
        fontWeight: 'bold'
    },
    noteDescription: {
        fontSize: 16,
        color: "white",
        marginTop: 5
    },
    noteDate: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 5
    },
    buttonNewTask:{
        width:60,
        height:60,
        position:"absolute",
        bottom: 30,
        left:20,
        backgroundColor:"#636AF2",
        borderRadius:50,
        justifyContent:"center",
        alignItems: "center"
    },
    buttonLogout: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 30,
        right: 20,
        justifyContent: "center",
        alignItems:"center"
    },
    iconButtonLogout: {
        color: "#fffff",
        fontSize: 25,
        fontWeight:"bold"
    },
    iconButton:{
        color:"#fff",
        fontSize:23
    },
})

export default styles;