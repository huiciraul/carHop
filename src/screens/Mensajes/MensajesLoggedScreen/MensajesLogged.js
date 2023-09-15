import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button } from '@rneui/base';
import { db } from "../../../utils";
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import { styles } from './MensajesLogged.styles'; // Asegúrate de importar los estilos
import { v4 as uuid } from 'uuid';
import { screen } from '../../../utils';
import { listChat } from '../../../components/Mensajes';

export function MensajesLogged() {
  return (
    <View style={styles.container}>
      {/* <listChat/>*/}
      <Text>Hola</Text>
    </View>
  );
}