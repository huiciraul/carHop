import React, {useState} from 'react';
import { View } from 'react-native';
import { styles } from "./ChangeEmailForm.styles";
import { Input, Button } from '@rneui/base';
import { useFormik } from "formik";
import { getAuth, updateEmail, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { initialValues, validationSchema } from './ChangeEmailForm.data';
import  Toast  from "react-native-toast-message";

export function ChangeEmailForm(props) {
   const {onClose, onReload} = props;
   const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
        try {
            const currentUser = getAuth().currentUser;
            const credentials = EmailAuthProvider.credential(
                currentUser.email, 
                formValue.password
            );
            
            // Reautenticación
            await reauthenticateWithCredential(currentUser, credentials);
    
            // Cambio de correo electrónico
            await updateEmail(currentUser, formValue.email);
    
            // Actualización exitosa, ahora puedes cerrar o recargar
            onReload();
            onClose();
        } catch (error) {
            //console.error("Error:", error);
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Error al cambiar el email",
            });
        }
    },
    
   });
    return (
    <View style={styles.content}>
        <Input placeholder="nuevo email" 
               containerStyle={styles.input} 
               onChangeText={(text) => formik.setFieldValue("email", text)}
               errorMessage={formik.errors.email}
               />
        <Input 
            placeholder='Contraseña' 
            containerStyle={styles.input} 
            secureTextEntry={showPassword ? false : true}
            rightIcon={{
                type:"material-community",
                name: "lock-outline",
                color: "#c2c2c2",
                onPress: () => setShowPassword((prevState) => !prevState),
            }}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            errorMessage={formik.errors.password}
        />
        <Button 
            title="cambiar email" 
            containerStyle={styles.btnContainer} 
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
        />
    </View>
  )
}