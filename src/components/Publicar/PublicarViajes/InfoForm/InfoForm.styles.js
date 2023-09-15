import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 50,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    borderRadius: 1,
    backgroundColor: "#212121",
  },
  input: {
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 0,
    backgroundColor: "#ffff",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    marginHorizontal: 15,
    width: "24%",
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  icon: {
    color: "#800080",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 15,
  },
  textPicker: {
    backgroundColor: "white",
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 30,
    width: "%85",
  },
  modalView: {
    margin: 20,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "%90",
    shadowColor: "purple",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  nextButtonContainer: {
    position: "absolute",
    bottom: 20, // Ajusta la posición vertical según tus necesidades
    right: 20, // Ajusta la posición horizontal según tus necesidades
    backgroundColor: "blue", // Color de fondo del botón
    borderRadius: 50, // Hace que el botón sea circular (debe ser la mitad del ancho/alto)
    // width: 50, // Ancho del botón
    // height: 50, // Alto del botón
    justifyContent: "center",
    alignItems: "center",
  },
});
