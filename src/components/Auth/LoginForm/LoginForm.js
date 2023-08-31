import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from "./LoginForm.styles";
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from 'formik';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import  Toast  from 'react-native-toast-message';
import {useNavigation} from "@react-navigation/native";
import {screen} from "../../../utils";
import { initialValues, validationSchema } from './LoginForm.data';

export function LoginForm() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);//aca seteamos el estado

  const showHidenPassword = () => setShowPassword((prevState) => !prevState);//esta funcion cambia el estado dando el contrario al anterior

  const formik = useFormik({
    initialValues: initialValues(), 
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue) => {
      console.log(formValue);
      try {
        const  auth = getAuth();
        await signInWithEmailAndPassword(auth, formValue.email, formValue.password);
        navigation.navigate(screen.account.account);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Usuario o contraseña incorrectos",
        })
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input 
        placeholder="Correo electronico"
        containerStyle={styles.input} 
        rightIcon={<Icon type="material-community" name="at" iconStyle={styles.icon}/>}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input 
        placeholder='Contraseña'
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}//esto se fija en si
        rightIcon={
          <Icon 
          type="material-community" 
          name={showPassword ? "eye-outline" : "eye-off-outline"} 
          iconStyle={styles.icon}
          onPress={showHidenPassword}
          />}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
       />
      <Button  
        title='Iniciar sesion' 
        containerStyle={styles.btnContainer} 
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
        />
        
    </View>
  );
}