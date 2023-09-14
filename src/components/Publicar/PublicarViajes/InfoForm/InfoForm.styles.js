import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content:{
        marginHorizontal: 10,
        marginTop: 50,
        backgroundColor:"black",
    },
    text:{
        color:"white",
        fontSize: 20,
        textAlign:"center",
        fontWeight:"bold",
    },
    button:{
        borderRadius:1,
        backgroundColor:"#212121",

    },
    nextButtonContainer: {
        position: 'absolute',
        bottom: 20, // Ajusta la posición vertical según tus necesidades
        right: 20, // Ajusta la posición horizontal según tus necesidades
        backgroundColor: 'blue', // Color de fondo del botón
        borderRadius: 50, // Hace que el botón sea circular (debe ser la mitad del ancho/alto)
        // width: 50, // Ancho del botón
        // height: 50, // Alto del botón
        justifyContent: 'center',
        alignItems: 'center',
      },

});