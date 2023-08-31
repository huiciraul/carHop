import React, {useState} from 'react';
import { View } from 'react-native';
import { Input, Icon, Button} from "@rneui/themed";
import { useFormik } from "formik";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { styles } from "./RegisterForm.styles";
import { screen } from "../../../utils";
import  Toast  from 'react-native-toast-message';
import { initialValues, validationSchema } from "./registerForm.data";
import { useNavigation } from '@react-navigation/native';

export function RegisterForm() {

  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth, 
          values.email,
          values.password
        );
        navigation.navigate(screen.account.account);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al registrarse, intentelo mas tarde",
        });
      }
    },

  });

  const showHidenPassword = () => setShowPassword ((prevState) => !prevState);
  return (
    <View style={styles.content}>
      <Input 
        placeholder="correo Electronico"
        containerStyle={styles.Input} 
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon}/> 
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
     <Input 
       placeholder="contraseña"
       containerStyle={styles.Input} 
       secureTextEntry={showPassword ? false : true}
       rightIcon={
         <Icon 
          type="material-community" 
          name= {showPassword ? "eye-off-outline" : "eye-outline"} 
          iconStyle={styles.icon}
          onPress={showHidenPassword}
         /> 
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}  
     />
      <Input 
       placeholder="contraseña"
       containerStyle={styles.Input} 
       secureTextEntry={showPassword ? false : true}
       rightIcon={
         <Icon 
          type="material-community" 
          name= {showPassword ? "eye-off-outline" : "eye-outline"} 
          iconStyle={styles.icon}
          onPress={showHidenPassword}
         />  
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)} 
        errorMessage={formik.errors.repeatPassword}      
      />
      <Button 
        title='Registrar' 
        containerStyle={styles.btnContainer} 
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
      </View>
  )
}