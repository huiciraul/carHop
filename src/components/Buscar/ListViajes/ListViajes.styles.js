
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  OyD:{
    paddingLeft:10,
    
  },
  vista:{//contenedor principal
    paddingTop: 50,
    backgroundColor:"black",
    // marginBottom: 125,
    flex:1,
  
  },
  list:{
    marginTop:5,
  },
  viaje: {
    padding: 1,
    alignItems: "left",
    alignContent: "center",
  },
  avatar:{
    marginRight: 10,
    backgroundColor: "green",
    // width: 100, // Cambia el ancho según tus preferencias
    // height: 100,    
  },
  userContainer:{
    alignItems: "center",
    justifyContent:"left",
    flexDirection:"row",
    paddingVertical: 0,
     
  },
  infoContainer: {
    backgroundColor: "#212121",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    marginTop:2,
    marginHorizontal: 10,
    marginLeft:10,
    marginRight:10,
    width: "95%",
    // shadowColor: "#063970",
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 4,
    
  },
  header:{
    justifyContent:"flex-start",
    flexDirection:"row",
  },
  userText:{
    fontWeight:"bold",
    paddingBottom: 5,
    color: "white",
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
  fechaContainer:{
    justifyContent:"left",
    flexDirection:"row",
    
  },
  Fecha: {
    fontSize: 14,
    color: "white",
    marginBottom: 4,
    fontWeight:"bold",
  },
  Horario: {
    fontSize: 14,
    color: "white",
    marginBottom: 4,
    fontWeight:"bold",
  },
//   seats: {
//     fontSize: 14,
//     color: "#063970",
//     marginBottom: 4,
//   },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#43a047",
  },
});