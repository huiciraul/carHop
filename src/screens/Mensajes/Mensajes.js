import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Mensajes.styles';

export function Mensajes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tus Mensajes</Text>

    </View>
  )
}