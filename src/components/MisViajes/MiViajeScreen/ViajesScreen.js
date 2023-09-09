import React,{useState}from 'react';
import { View} from 'react-native';
import { styles } from './ViajesScreen.styles';
import { doc, onSnapshot, collection, query, where, orderBy } from "firebase/firestore";
import { db } from '../../../utils';
import { useEffect } from 'react';
import { Loading } from '../../shared/Loading/Loading';
import { Header } from "../HeaderViaje";  


export function ViajesScreen(props) {
  const { route } = props;
  const [viaje, setViaje]= useState(null);

  useEffect(() => {
    setViaje(null);
    onSnapshot(doc(db, "viajes", route.params.id), 
      (doc) =>{
         setViaje(doc.data());
        }
    );
 }, [route.params.id]);
  if(!viaje) return <Loading show text='Cargando viaje'/>;
  return (
    <View style={styles.content}>
      <Header viaje={viaje}/>
    </View>
  )
}