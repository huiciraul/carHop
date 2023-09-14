import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { InfoForm } from '../../../components/Publicar/PublicarViajes/InfoForm';
import { Button } from '@rneui/base';
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../utils";
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './PublicarLogged.data';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import { styles } from './PublicarLogged.styles'; // Asegúrate de importar los estilos
import { v4 as uuid } from 'uuid';
import { Dimensions } from 'react-native';
import { screen } from '../../../utils';

export function PublicarForm() {
  const [loading, setLoading] = useState(false);
  // const [loadingText, setLoadingText] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const { photoURL, displayName, email } = getAuth().currentUser;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const formik = useFormik({
    initialValues: initialValues(),//viene directo del .data
    validationSchema: validationSchema(),//lo mismo
    validateOnChange: false,// se usa para que no este validando en cada cambio de estado del input
    onSubmit: async (formValue) => {//esta funcion recibe la informacion del handlesubmit al precionar el boton publicar
      try {
        setLoading(true); // Activar indicador de carga
        const newData = formValue;
        newData.Usuario = displayName;
        newData.email = email;
        newData.photoURL = photoURL;
        if (route.params?.id) {
          newData.id = route.params.id;
          newData.updatedAt = new Date();
          const myDb = doc(db, "viajes", newData.id);
          await setDoc(myDb, newData);
          navigation.goBack();
        } else {
          newData.id = newData.id || uuid();//se le da un id al viaje
          newData.createdAt = newData.createdAt || new Date();//se le da una fecha al viaje
          const myDb = doc(db, "viajes", newData.id);//se le da una ubicacion dentro de firestore
          await setDoc(myDb, newData);//se guarda el documento
          navigation.navigate(screen.Viajes.tab,{screen: screen.Viajes.Viajes});
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Desactivar indicador de carga después de enviar
      }
    },
  });

  useEffect(() => {
    if (route.params?.id) {
      const obtenerViaje = async () => {
        const viajeDoc = await getDoc(doc(db, "viajes", route.params.id));
        if (viajeDoc.exists()) {
          const viajeExistente = viajeDoc.data();
          formik.setValues(viajeExistente);
        }
      };
      obtenerViaje();
    }
  }, [route.params?.id]);

  return (
    <View style={{
      // width:windowHeight,
      // height:windowHeight,
      flex:1,
      backgroundColor:"black",
    }}>
      <InfoForm formik={formik} />
      {/* <Button
        title="Publicar viaje"
        type='clear'
        buttonStyle={styles.publicar}
        color={"black"}
        onPress={formik.handleSubmit}
        loading={loading} // Usar el estado 'loading' para el indicador de carga
      /> */}
    </View>
  );
}