import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { InfoForm } from '../../../components/Publicar/PublicarViajes/InfoForm';
import { Button, Image } from '@rneui/base';
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../utils";
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './PublicarLogged.data';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import { styles } from './PublicarLogged.styles';
import { v4 as uuid } from 'uuid';

export function PublicarForm() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const { photoURL, displayName, email } = getAuth().currentUser;

  // Obtén los valores iniciales del formulario
  const initialValuesWithPlaceholders = initialValues();

  // Cuando estés en modo de edición, establece los valores iniciales del formulario
  if (route.params?.isEditing) {
    const viajeActual = route.params.viaje;
    for (const key in viajeActual) {
      if (initialValuesWithPlaceholders.hasOwnProperty(key)) {
        initialValuesWithPlaceholders[key] = viajeActual[key];
      }
    }
  }

  const formik = useFormik({
    initialValues: initialValuesWithPlaceholders,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.Usuario = displayName;
        newData.email = email;
        newData.photoURL = photoURL;
        if (route.params?.isEditing) {
          newData.id = route.params.viaje.id;
          newData.updatedAt = new Date();
          const myDb = doc(db, "viajes", newData.id);
          await setDoc(myDb, newData, { merge: true });
        } else {
          newData.id = newData.id || uuid();
          newData.createdAt = newData.createdAt || new Date();
          const myDb = doc(db, "viajes", newData.id);
          await setDoc(myDb, newData);
        }
        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require("../../../../assets/img/autoLogin-removebg-preview.png")} 
        style={styles.image} 
      />
      <InfoForm formik={formik} />
    </ScrollView>
  );
}
