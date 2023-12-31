import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, Image } from "@rneui/themed";
import { styles } from './UserGuestScreen.styles';
import { LoginScreen } from '../LoginScreen/LoginScreen';
import { useNavigation } from '@react-navigation/native';
import { screen } from "../../../utils"
export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.tab, {screen: screen.account.login})
  };
  
  return (
   <ScrollView centerContent={true} style={styles.Content}>
    <Image source={require("../../../../assets/img/autoUser.png")}
     style={styles.Image} 
    />
    <Text style={styles.title}>Consultar tu perfil de CarHop</Text>
    <Text style={styles.description}>
      ¿Queres comenzar a viajar de la mejor manera, conociendo personas o con amigos?
      Encontra el viaje que necesites, envia paquetes, conta tus experiencias y comenza 
      a viajar con el menor costo posible.
    </Text>
    <Button title="Iniciar sesion" onPress={goToLogin} buttonStyle={styles.btnStyles}></Button>
    
      
   </ScrollView>
  );
}