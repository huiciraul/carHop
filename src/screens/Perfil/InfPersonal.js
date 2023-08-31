import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from "@rneui/base";
import { screen } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../components"
import {InfoUser, AccountOptions} from "../../components/Account"
import { styles } from "./UserLoggedScreen/UserLoggedScreen.styles";

export function InfPersonal() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);
  const navigation = useNavigation();

  const onReload = () => setReload((prevState) => !prevState);

  const loGout = async () => {
    const auth = getAuth();
    await signOut (auth);
    navigation.navigate(screen.account.account);
  }

  return (
    <ScrollView style={styles.content}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText}/>
      <AccountOptions onReload={onReload}/>
      <Button 
        title="Cerrar sesion" 
        buttonStyle={styles.btnStyles} 
        titleStyle={styles.btnText}
        onPress={loGout}
        type='clear'
        >         
      </Button>
      <LoadingModal show={loading} text={loadingText}/> 
    </ScrollView>
  )
}