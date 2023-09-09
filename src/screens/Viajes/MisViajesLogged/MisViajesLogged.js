import React, {useEffect, useState} from 'react';
import { View, ScrollView } from 'react-native';
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import { screen, db } from '../../../utils';
import { styles } from "./MisViajesLogged.styles";
import { ListViajes } from '../../../components/MisViajes';
import { LoadingModal } from "../../../components";
import { SearchBar, ListItem, Avatar, Icon } from '@rneui/base';

export function BuscarViajesLogged() {
  const [viajes, setViajes] = useState(null);
  useEffect(()=>{
    const q = query(
      collection(db, "viajes"),
      orderBy("createdAt", "desc")
      );
    onSnapshot(q, (snapshot) => {
      setViajes(snapshot.docs);
    })
  }, [])
  return (
    <View style={styles.vista}>
      {!viajes ? (
        <LoadingModal show text ="cargando"/>
      ) : (
        <ListViajes viajes={viajes}/>
    )}
    </View>
    
  )
}