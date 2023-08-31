import React from 'react';
import { ScrollView, View } from 'react-native';
import { Input } from '@rneui/base';
import { styles } from './InfoForm.styles';

export function InfoForm(props) {
  const { formik } = props;
  return (
    <View style={styles.content}>
    <Input 
      placeholder='Origen del viaje' 
      onChangeText={(text) => formik.setFieldValue("Origen", text)} 
      errorMessage={formik.errors.Origen}
    /> 
    <Input 
      placeholder='Destino del viaje'
      onChangeText={(text) => formik.setFieldValue("Destino", text)}
      errorMessage={formik.errors.Destino}
    /> 
    <Input placeholder="Selecciona una fecha"      
      onChangeText={(text) => formik.setFieldValue("Fecha", text)}
      errorMessage={formik.errors.Fecha}
    /> 
    <Input placeholder="Selecciona un horario de salida"      
     onChangeText={(text) => formik.setFieldValue("HorarioDeSalida", text)}
     errorMessage={formik.errors.Fecha}
    />
    <Input placeholder="Algo para comentar acerca de su viaje?"      
      onChangeText={(text) => formik.setFieldValue("Descripcion", text)}
      multiline={true}
    />      
    </View>
  );
}