import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Rating, Avatar, Icon, Button } from '@rneui/base';
import { styles } from './Header.styles';
import { useNavigation } from '@react-navigation/native'; // Importa el hook useNavigation
import { getAuth } from "firebase/auth"; // Importa el módulo getAuth para obtener información del usuario
import {screen} from "../../../utils/screenName";
export function Header(props) {
  const { viaje } = props;
  const navigation = useNavigation(); // Inicializa el hook useNavigation

  const editarViaje = () => {
    navigation.navigate({
      name: screen.publicar.publicar,
      params: {
        // viajeId: 123, // Un número que identifica el viaje que se va a editar
        // modoEdicion: true, // Un indicador para decir que estamos en modo de edición
      },
    });
  }
 const solicitarViaje = () =>{console.log("Solicitando viaje")}
  // Obtiene la información del usuario actual
  const { displayName, email } = getAuth().currentUser;

  // Verifica si el usuario actual es el creador del viaje
  const esCreador = viaje.Usuario === displayName && viaje.email === email;


    return (
    <ScrollView style={styles.content}>

        <View style={styles.FechaView}>
          <Text style={styles.Fecha}>{viaje.Fecha}</Text>
        </View>
        <View style={styles.header}>
        <View style={styles.fechaContainer}>
          <Text style={styles.Horario}>{viaje.HorarioDeSalida}</Text>
        </View>
        <View style={styles.OyD}> 
                    <Text style={styles.Destino}>{viaje.Destino}</Text>
                    <Text style={styles.Destino}>|</Text>
                    <Text style={styles.Destino}>|</Text>
                    <Text style={styles.Origen}>{viaje.Origen}</Text>
               </View>
        </View>
        <View style={styles.import}>
          <Text style={styles.importText}>IMPORTE DEL VIAJE</Text>
        </View>
    <View >                           
      <View style={styles.userContainer} >
      <Avatar
          size={"large"}
          rounded
          source={{ uri : viaje.photoURL}}
          containerStyle={styles.avatar}
        />              
    <Text style={styles.Fecha}>{viaje.Usuario}</Text>
    </View>
    <View style={styles.notas}>
          <Text style={styles.notasText}>Notas de viaje: {viaje.Descripcion}</Text>
     </View>              
    </View>
    <Button title="Solicitar viaje"  buttonStyle={styles.btnStyles} titleStyle={styles.btnText} onPress={solicitarViaje}></Button>
    {esCreador && (
        <Button
          title="Editar viaje"
          buttonStyle={styles.btnStyles}
          titleStyle={styles.btnText}
          onPress={editarViaje}
        />
      )}
    </ScrollView>
  )
}