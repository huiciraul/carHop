import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { InfoForm } from '../../../components/Publicar/PublicarViajes/InfoForm';
import { Button } from '@rneui/base';
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../utils";
import { useFormik } from 'formik';
import { LoadingModal } from '../../../components';
import { initialValues, validationSchema } from './PublicarLogged.data';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import { styles } from './PublicarLogged.styles'; // Asegúrate de importar los estilos

export function PublicarForm() {
  const [Loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const { photoURL, displayName, email } = getAuth().currentUser;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.Usuario = displayName;
        newData.email = email;
        newData.photoURL = photoURL;
        if (route.params?.id) {
          newData.id = route.params.id; // Mantén el mismo ID al editar
          newData.updatedAt = new Date(); // Agrega marca de tiempo de actualización
          const myDb = doc(db, "viajes", newData.id);
          await setDoc(myDb, newData, { merge: true }); // Usa merge: true para actualizar solo los campos modificados
        } else {
          newData.id = newData.id || uuid(); // Usa el ID existente o crea uno nuevo
          newData.createdAt = newData.createdAt || new Date();
          const myDb = doc(db, "viajes", newData.id);
          await setDoc(myDb, newData);
        }
        navigation.goBack();
      } catch (error) {
        // Manejo de errores
      }
    },
  });

  useEffect(() => {
    if (route.params?.id) {
      const obtenerViaje = async () => {
        const viajeDoc = await getDoc(doc(db, "viajes", route.params.id));
        if (viajeDoc.exists()) {
          const viajeExistente = viajeDoc.data();
          formik.setValues(viajeExistente); // Carga los valores actuales del viaje en el formulario
        }
      };
      obtenerViaje();
    }
  }, [route.params?.id]); // Agrega [route.params?.id] como dependencia

  return (
    <ScrollView style={styles.container}>
      <InfoForm formik={formik} setLoading={setLoading} setLoadingText={setLoadingText} />
      <Button
        title="Publicar viaje"
        type='clear'
        buttonStyle={styles.publicar}
        color={"black"}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
