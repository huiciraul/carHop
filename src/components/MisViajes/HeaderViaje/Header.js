
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Avatar, Button } from '@rneui/base';
import { styles } from './Header.styles';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, deleteDoc } from "firebase/firestore"; // Importa los módulos de Firestore
import { screen } from '../../../utils';

export function Header(props) {
  const { viaje } = props;
  const navigation = useNavigation();

  const editarViaje = () => {
    navigation.navigate(screen.publicar.tab, {
      screen: screen.publicar.publicar,
      params: { viaje, isEditing: true },
    });
  };
  
  const solicitarViaje = () => {
    console.log("Solicitando viaje");
  };

  const eliminarViaje = async () => {
    try {
      const db = getFirestore();
      const viajeRef = doc(db, "viajes", viaje.id); // Reemplaza "nombre_de_tu_coleccion" con el nombre de tu colección en Firestore
      await deleteDoc(viajeRef);
      navigation.goBack();
      // El viaje ha sido eliminado con éxito
    } catch (error) {
      console.error("Error al eliminar el viaje:", error);
    }
  };

  const { displayName, email } = getAuth().currentUser;
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
    {esCreador && (
        <Button
          title="Eliminar viaje"
          buttonStyle={styles.btnStyles}
          titleStyle={styles.btnText}
          onPress={eliminarViaje}
        />
      )}      
    </ScrollView>
  )
}