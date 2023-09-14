import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input, Button, Icon } from '@rneui/base';
import { styles } from './InfoForm.styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 

export function InfoForm(props) {
  const { formik, initialValues } = props;
  const [currentField, setCurrentField] = useState("Origen");

  useEffect(() => {
    if (initialValues) {
      formik.setValues(initialValues);
    }
  }, [initialValues, formik]);

  const goToNextField = () => {
    let nextField = "";
    switch (currentField) {
      case "Origen":
        nextField = "Destino";
        break;
      case "Destino":
        nextField = "Fecha";
        break;
      case "Fecha":
        nextField = "HorarioDeSalida";
        break;
      case "HorarioDeSalida":
        nextField = "Descripcion";
        break;
      case "Descripcion":
        setCurrentField("Origen");
        nextField = "Origen";
        return;
      default:
        nextField = "Origen";
        break;
    }

    setCurrentField(nextField);
  };

  return (
      <ScrollView
        style={ styles.content }
        nestedScrollEnabled={true} // <---- 1.
        keyboardShouldPersistTaps={"handled"}
      >
      {currentField === "Origen" && (
        <View>
          <Text style={styles.text}>A donde viajamos?</Text>
          <GooglePlacesAutocomplete
          placeholder="Origen"
          // styles={{
          //   textInput: styles.input,
          // }}
          // disableScroll={true}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // Establece el valor del campo "Origen" en el formulario
            formik.setFieldValue("Origen", details.formatted_address);
            console.log(details.formatted_address);
          }}
          enablePoweredByContainer={false}
          query={{
            key: "AIzaSyD2UA8B5jBWF3DGa5r1UB60NUQt7YI_Du4",
            language: "en",
            types: "(cities)",
            components: "country:ar",
          }}
        />
       <Button
          title=""
          icon={
           <Icon
            name="arrow-forward"
            type="material"
            color="white"
            size={24} // Tamaño del icono
           />
         }
        containerStyle={styles.nextButtonContainer}
          onPress={goToNextField}
      />
        </View>
      )}
      {currentField === "Destino" && (
        <View>
          <Text style={styles.text}>¿Dónde vas a ir?</Text>
          <GooglePlacesAutocomplete
          placeholder="Destino"
          // styles={{
          //   textInput: styles.input,
          // }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            formik.setFieldValue("Destino", details.formatted_address);
            console.log(details.formatted_address);
          }}
          disableScroll={true}
          query={{
            key: "AIzaSyD2UA8B5jBWF3DGa5r1UB60NUQt7YI_Du4",
            language: "en",
            types: "(cities)",
            components: "country:ar",
          }}
        />
          {/* <Input
            placeholder="Destino"
            onChangeText={(text) => formik.setFieldValue("Destino", text)}
            errorMessage={formik.errors.Destino}
            style={{color:"white"}}
          /> */}
          <Button
            title="Atrás"
            onPress={() => setCurrentField("Origen")}
          />
          <Button
            title="Siguiente"
            onPress={goToNextField}
          />
        </View>
      )}
      {currentField === "Fecha" && (
        <View>
          <Text style={styles.text}>¿Cuándo es tu viaje?</Text>
          <Input
            placeholder="Selecciona una fecha"
            onChangeText={(text) => formik.setFieldValue("Fecha", text)}
            errorMessage={formik.errors.Fecha}
            style={{color:"white"}}
          />
          <Button
            title="Atrás"
            onPress={() => setCurrentField("Destino")}
          />
          <Button
            title="Siguiente"
            onPress={goToNextField}
          />
        </View>
      )}
      {currentField === "HorarioDeSalida" && (
        <View>
          <Text style={styles.text}>¿A qué hora sales?</Text>
          <Input
            placeholder="Selecciona un horario de salida"
            onChangeText={(text) => formik.setFieldValue("HorarioDeSalida", text)}
            errorMessage={formik.errors.Fecha}
            style={{color:"white"}}
          />
          <Button
            title="Atrás"
            onPress={() => setCurrentField("Fecha")}
          />
          <Button
            title="Siguiente"
            onPress={goToNextField}
          />
        </View>
      )}
      {currentField === "Descripcion" && (
        <View>
          <Button
            title="Atrás"
            onPress={() => setCurrentField("HorarioDeSalida")}
          />
          <Text style={styles.text}>¿Algún comentario adicional?</Text>
          <Input
            placeholder="Algo para comentar acerca de su viaje?"
            onChangeText={(text) => formik.setFieldValue("Descripcion", text)}
            multiline={true}
            style={{color:"white"}}
          />

          <Button
        title="Publicar viaje"
        type='clear'
        buttonStyle={styles.publicar}
        color={"black"}
        onPress={() => {
          formik.handleSubmit();
          goToNextField();
        }}
        loading={formik.isSubmitting}
      />
        </View>
      )}
      </ScrollView>
  );  
}
