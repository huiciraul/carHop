import React from 'react';
import { View } from 'react-native';
import {styles} from "./RegisterScreenStyles";
import {Image} from "@rneui/themed";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RegisterForm } from '../../../components/Auth';

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView enableOnAndroid={true} extraHeight={75} extraScrollHeight={50}>
      <Image 
       source={require("../../../../assets/img/autoLogin-removebg-preview.png")} 
       style={styles.Image}
       />
      <View style={styles.content}>
      <RegisterForm/>
      </View>
    </KeyboardAwareScrollView>
  );
}