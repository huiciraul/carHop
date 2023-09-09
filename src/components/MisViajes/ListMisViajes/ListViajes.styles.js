
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  PyU:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  punto: {
    width: 8, // Tamaño de los círculos
    height: 8,
    borderRadius: 4, // Para hacer círculos
    backgroundColor: '#212121', // Color de los círculos
    marginRight: 5, // Espacio a la derecha de los círculos
    marginLeft: 2,
  },
  linea: {
    height: 40, // Alto de la línea igual a la altura de los círculos
    width: 2, // Ancho de la línea
    backgroundColor: '#212121', // Color de la línea
    marginLeft: 5,
    marginTop:-15,
    marginBottom:-15,
    alignItems: 'center',
  },
  vista:{//contenedor principal
    marginTop:1,
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
    backgroundColor: "black",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    marginTop:2,
    marginHorizontal: 10,
    marginLeft:10,
    marginRight:10,
    width: "95%",
    shadowColor: "#212121",
    shadowOpacity: 3,
    shadowRadius: 6,

    
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'center',
    // maxWidth: 190,
    backgroundColor:"black",
  },
  
  input: {
    textAlign:"center",
    flex: 1,
    height: 40,
    lineHeight: 28,
    paddingHorizontal: 10,
    paddingLeft: 2,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
    backgroundColor: '#212121',
    color: 'white',
    // transition: '0.3s ease',
  },

  // Resto de los estilos, como input::placeholder, input:focus, etc.

  icon: {
    position: 'absolute',
    left: 10, // Ajusta la posición según tus necesidades
    color: '#9e9ea7', // Cambia el color del ícono según tus preferencias
    fontSize: 16, // Ajusta el tamaño del ícono según tus preferencias
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
  }
});