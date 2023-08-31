import React from "react";
import { View} from "react-native";
import { Input, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeDisplayName.data"
import { getAuth, updateProfile } from "firebase/auth";
import { styles } from './ChangeDisplayName.styles.js';
import  Toast  from "react-native-toast-message";

export function ChangeDisplayName(props) {
  const {onClose, onReload} = props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async(formValue) =>{
     try {
      const{displayName}=formValue;
      const currentUser = getAuth().currentUser
      await updateProfile(currentUser, { displayName });
      onReload();
      onClose();
     } catch (error) {
      Toast.show({
        type:"error",
        position: "bottom",
        text1 : "Error al cambiar el nombre y apellido",
      });
     }    
    },
  });

  return (
    <View style={styles.content}>
      <Input 
        placeholder='Nombre y apellidos' 
        rightIcon={{
          type: "material-community", 
          name:"account-circle-outline", 
          color:"#c2c2c2",
        }}
        onChangeText={(text) => formik.setFieldValue("displayName", text)}
        errorMessage={formik.errors.displayName}
        />
      <Button 
        title="cambiar nombre y apellido" 
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}  
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}