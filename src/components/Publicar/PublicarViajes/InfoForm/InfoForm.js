import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Input, Button, Icon } from "@rneui/base";
import { styles } from "./InfoForm.styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { date } from "yup";

export function InfoForm(props) {
  const { formik } = props;
  const [currentField, setCurrentField] = useState("Origen");
  const fechaHoy = new Date();

  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [selectedTime, setSelectedTime] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" : ""}${day}/${
      month < 10 ? "0" : ""
    }${month}/${year}`;
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;
  };

  const showDateSelector = () => {
    setShowDatePicker(true);
    setShowTimePicker(false);
  };

  const showTimeSelector = (date) => {
    setShowDatePicker(false);
    setShowTimePicker(true);
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
      formik.setFieldValue("Fecha", formatDate(selectedDate));
      //ErrorMessage={formik.errors.Fecha};
    }
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setSelectedTime(selectedTime);
      formik.setFieldValue("HorarioDeSalida", formatTime(selectedTime));
    }
  };
  //Para el Picker
  const [passengerCount, setPassengerCount] = useState(1);
  // useEffect(() => {
  //   if (initialValues) {
  //     formik.setValues(initialValues);
  //   }
  // }, [initialValues, formik]);

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
        nextField = "Lugares";
        break;
      case "Lugares":
        nextField = "Precio";
        break;
      case "Precio":
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
      style={styles.content}
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
          <Button title="Atrás" onPress={() => setCurrentField("Origen")} />
          <Button title="Siguiente" onPress={goToNextField} />
        </View>
      )}
      {currentField === "Fecha" && (
        <View>
          <Text style={styles.text}>¿Cuándo vas a viajar?</Text>
          <TouchableOpacity onPress={showDateSelector}>
            <Text style={styles.textPicker}>
              {selectedDate ? formatDate(selectedDate) : "Selecciona una fecha"}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate || fechaHoy}
              mode="date"
              display="default"
              minimumDate={fechaHoy}
              onChange={onChangeDate}
            />
          )}

          {/* <Input
            placeholder="Selecciona una fecha"
            
            onChangeText={(text) => formik.setFieldValue("Fecha", text)}
            errorMessage={formik.errors.Fecha}
            style={{ color: "white" }}
          /> */}
          <Button title="Atrás" onPress={() => setCurrentField("Destino")} />
          <Button title="Siguiente" onPress={goToNextField} />
        </View>
      )}
      {currentField === "HorarioDeSalida" && (
        <View>
          <Text style={styles.text}>¿A qué hora sales?</Text>

          <TouchableOpacity onPress={showTimeSelector} style={styles.text}>
            <Text style={styles.textPicker}>
              {selectedTime
                ? formatTime(selectedTime)
                : "Selecciona una hora de salida"}
            </Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={selectedTime || new Date()}
              mode={Platform.OS === "ios" ? "date" : "calendar"} // Modo diferente para iOS y Android
              display={Platform.OS === "ios" ? "spinner" : "default"} // Configuración de visualización diferente
              onChange={onChangeTime}
            />
          )}
          {/* <Input
            placeholder="Selecciona un horario de salida"
            onChangeText={(text) =>
              formik.setFieldValue("HorarioDeSalida", text)
            }
            errorMessage={formik.errors.Fecha}
            style={{ color: "white" }}
          /> */}
          <Button title="Atrás" onPress={() => setCurrentField("Fecha")} />
          <Button title="Siguiente" onPress={goToNextField} />
        </View>
      )}
      {currentField === "Lugares" && (
        <View>
          <Text style={styles.text}>
            ¿Cuántos pasajeros van a acompañarte en este viaje?
          </Text>
          <Picker
            style={styles.picker}
            //selectedValue={passengerCount}
            selectedValue={formik.values.Lugares}
            onValueChange={(itemValue) =>
              formik.setFieldValue("Lugares", itemValue)
            }
            //errorMessage={formik.errors.lugares}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
          </Picker>

          <Button
            title="Atrás"
            onPress={() => setCurrentField("HorarioDeSalida")}
          />
          <Button title="Siguiente" onPress={goToNextField} />
        </View>
      )}

      {currentField === "Precio" && (
        <View>
          <Text style={styles.text}>Define el precio para cada viajero</Text>

          <Input
            placeholder="Precio por persona"
            inputContainerStyle={styles.input}
            keyboardType="numeric" // Teclado numérico
            onChangeText={(numeric) => formik.setFieldValue("Precio", numeric)}
            //errorMessage={formik.errors.Precio}
            leftIcon={{
              type: "material-community",
              name: "currency-usd",
            }}
          />
          <Button title="Atrás" onPress={() => setCurrentField("Lugares")} />
          <Button title="Siguiente" onPress={goToNextField} />
        </View>
      )}
      {currentField === "Descripcion" && (
        <View>
          <Text style={styles.text}>¿Algún comentario adicional?</Text>
          <Input
            placeholder="¿Algo para comentar acerca de tu viaje?"
            onChangeText={(text) => formik.setFieldValue("Descripcion", text)}
            multiline={true}
            style={{ color: "white" }}
          />
          <Button
            title="Atrás"
            onPress={() => setCurrentField("HorarioDeSalida")}
          />
          <Button
            title="Publicar viaje"
            type="clear"
            buttonStyle={styles.button}
            color={"black"}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
          />
        </View>
      )}
    </ScrollView>
  );
}
