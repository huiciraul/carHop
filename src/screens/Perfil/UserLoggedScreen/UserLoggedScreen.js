import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from "@rneui/base";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../../components"
import { InfoUser } from "../../../components/Account/InfoUser"
import { styles } from "./UserLoggedScreen.styles";
export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const loGout = async () => {
    const auth = getAuth();
    await signOut (auth);
  }
  //const { navigation } = props;
  const navigation = useNavigation();
  const goingToInfPersonal = () => {
      navigation.navigate(screen.account.InfPersonal); //si quiero navegar entre pantallas del mismo stack
      //navigation.navigate(screen.Viajes.tab, {screen: screen.Viajes.Viajes});//para navegar entre screens de distintos stacks
    };
  return (
    <ScrollView style={styles.content}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText}/>
      <Button 
        title="Cerrar sesion" 
        buttonStyle={styles.btnStyles} 
        titleStyle={styles.btnText}
        onPress={loGout}
        type='clear'
        >         
      </Button>
      <LoadingModal show={loading} text={loadingText}/> 
      <Button title="Modificar informacion personal" type='clear' buttonStyle={styles.btnStyles} titleStyle={styles.btnText} onPress={goingToInfPersonal}></Button>
    </ScrollView>
  )
}