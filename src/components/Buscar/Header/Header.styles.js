import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
      paddingTop: 35,

        // padding:10,
        backgroundColor:"#212121",
    },
    header:{
      justifyContent:"flex-start",
      flexDirection:"row",
      backgroundColor:"black",
    },
    import:{
      marginTop:10,
      marginBottom:10,
      backgroundColor:"black",
      padding:15,
    },
    importText:{
      color: "grey",
      fontSize:15,
      fontWeight:"bold",
    },
    FechaView:{
      padding:10,
      paddingLeft:20,
      backgroundColor:"black",
      paddingBottom:50,
    },
    Fecha: {
      fontSize: 30,
      fontWeight:"bold",
      color: "white",
      marginBottom: 4,
    },
    Origen: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      color: "white",
    },
    Destino: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      color: "white",
    },
    userContainer:{
      backgroundColor:"black",
      alignItems: "center",
      justifyContent:"left",
      flexDirection:"row",
      padding:20,
       
    },
     infoContainer: {
       backgroundColor: "#212121",
       padding: 16,
       borderRadius: 8,
       marginBottom: 10,
       marginTop:10,
       marginHorizontal: 10,
       marginLeft:5,
       marginRight:5,
       width: "95%",
       shadowColor: "#063970",
       shadowOpacity: 1,
       shadowRadius: 3,
       elevation: 4,
      color:"white",
     },
     userText:{
      fontWeight:"bold",
      paddingBottom: 5,
      color: "white",
    },
      avatar:{
        marginRight: 10,
        backgroundColor: "green",
        // width: 100, // Cambia el ancho según tus preferencias
        // height: 100,    
      },
      Horario: {
        fontSize: 14,
        color: "white",
        marginBottom: 4,
        fontWeight:"bold",
      },
      btnStyles:{

        marginTop:1,
        paddingVertical: 20,
        backgroundColor:"#063970"
    },
    btnText:{
        color: "white",
    },
    OyD:{
      paddingLeft:10,
      
    },
    notas:{
      marginTop:10,
      marginBottom:10,
      backgroundColor:"black",
      padding:15,
    },
    notasText:{
      color: "grey",
      fontSize:15,
      fontWeight:"bold",
    },

});