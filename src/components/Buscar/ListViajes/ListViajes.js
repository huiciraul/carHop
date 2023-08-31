import React, {useState, useEffect} from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import {SearchBar ,Text, Avatar, Icon, ListItem } from "@rneui/base";
import { styles } from './ListViajes.styles';
import { useNavigation } from '@react-navigation/native';
import {screen} from "../../../utils/screenName";
import { LoadingModal } from "../../shared/LoadingModal/Index";
import { collection, query, startAt, endAt, limit, orderBy, getDocs} from "firebase/firestore";
import {db} from "../../../utils";
import {size} from "lodash";


export function ListViajes(props) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);


  const { viajes } = props;
  const navigation = useNavigation();

useEffect(() => {
  (async () => {
    const q = query(
      collection(db, "viajes"),
      orderBy("Destino"),
      startAt(searchText),
      endAt(`${searchText}\uf8ff`),
      limit(20)
    )
    const querySnapshot = await getDocs(q)
    setSearchResults(querySnapshot.docs)
  }) ();

}, [searchText]);



  const goToViaje = (viaje) => {
    navigation.navigate(screen.buscarviajes.viaje, {id: viaje.id});//no necesaitamos usar tab ni especificar stack ya que estamos en el mismo stack de screens
  }
  return (
    <View style={styles.vista}>



      <View>
      <SearchBar
        placeholder='Busca tu destino'
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        />
        {!searchResults && <LoadingModal show text="Buscando destino..." />}
      </View>


      
      <FlatList
        style={styles.list} 
        data={searchText? searchResults : viajes}
        renderItem={(doc) => {
          const viaje = doc.item.data();
          return (
            <TouchableOpacity onPress={()=>goToViaje(viaje)}> 
          <View style={styles.infoContainer}>                        
            <View style={styles.viaje}>
              <View style={styles.header}>
                <View>
                    <View style={styles.fechaContainer}>
                      {/* <Icon type="material-community"name="calendar-month" color="white"/> */}
                      <Text style={styles.Fecha}>{viaje.Fecha}</Text>
                    </View>
                    <View style={styles.fechaContainer}>
                    {/* <Icon type="material-community"name="clock-outline" color="white"/> */}
                      <Text style={styles.Horario}>{viaje.HorarioDeSalida}</Text>
                    </View>
                </View>
                <View style={styles.OyD}> 
                    <Text style={styles.Origen}>{viaje.Origen}</Text>
                    <Text style={styles.Destino}>|</Text>
                    {/* <Text style={styles.Destino}>|</Text> */}
                    <Text style={styles.Destino}>{viaje.Destino}</Text>
               </View>
              </View>
                {/* <Text style={styles.Descripcion}>Notas de viaje: {viaje.Descripcion}</Text> */}
               </View>   
            <View style={styles.userContainer} >
            <Avatar
                size={"medium"}
                rounded
                source={{ uri : viaje.photoURL}}
                containerStyle={styles.avatar}
              />              
            <Text style={styles.userText}>{viaje.Usuario}</Text>
            </View>              
             </View>
            </TouchableOpacity>            
          )
        }}
      />
    </View>
  );
}