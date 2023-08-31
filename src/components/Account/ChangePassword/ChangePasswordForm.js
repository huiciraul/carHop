import React, {useState} from 'react';
import { View  } from 'react-native';
import { styles } from './ChangePassword.styles';
import { Input, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangePassword.data"
import { getAuth, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import  Toast  from "react-native-toast-message";


export function ChangePasswordForm(props) {
    const {onReload, onClose} = props; 
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validationOnChange: false,
        onSubmit: async(formValue) => {
            try {
                const currentUser = getAuth().currentUser;
                const credentials = EmailAuthProvider.credential(
                    currentUser.email, 
                    formValue.password
                );
                
                // Reautenticación
                await reauthenticateWithCredential(currentUser, credentials);
        
                // Cambio de correo electrónico
                await updatePassword(currentUser, formValue.newPassword);
        
                // Actualización exitosa, ahora puedes cerrar o recargar
                onReload();
                onClose();
                
            } catch (error) {
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Error al cambiar la contraseña",
                });
            }
        }
    })
  return (
    <View style={styles.content}>
        <Input
            placeholder='contraseña actual' 
            containerStyle={styles.input}
            secureTextEntry={showPassword ? false : true}
            rightIcon={{
                type: "material-community",
                name: "eye-outline",
                color: "#c2c2c2",
                onPress: () => setShowPassword((prevState)=>!prevState),
            }}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            errorMessage={formik.errors.password}
        />
        <Input
            placeholder='nueva contraseña' 
            containerStyle={styles.input}
            secureTextEntry={showPassword ? false : true}
            rightIcon={{
                type: "material-community",
                name: "eye-outline",
                color: "#c2c2c2",
                onPress: () => setShowPassword((prevState)=>!prevState),
            }}
            onChangeText={(text) => formik.setFieldValue("newPassword", text)}
            errorMessage={formik.errors.newPassword}
        />
        <Input
            placeholder='reingresa la  nueva contraseña' 
            containerStyle={styles.input}
            secureTextEntry={showPassword ? false : true}
            rightIcon={{
                type: "material-community",
                name: "eye-outline",
                color: "#c2c2c2",
                onPress: () => setShowPassword((prevState)=>!prevState),
            }}
            onChangeText={(text) => formik.setFieldValue("confirmedNewPassword", text)}
            errorMessage={formik.errors.confirmedNewPassword}
        />
        <Button
            title='Cambiar contraseña' 
            containerStyle={styles.btnContainer} 
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        />
    </View>
  )
}