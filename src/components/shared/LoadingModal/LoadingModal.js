import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Styles } from "./LoadingModal.styles"
import { Overlay, Text } from "@rneui/themed";


export function LoadingModal(props) {
  const {show, text} = props; 
  return (
    <Overlay isVisible={show} overlayStyle={Styles.overlay}>
      {show && (
        <View style={Styles.view}>
          <ActivityIndicator size="large" color="white" />
          {text && <Text style={Styles.text}>{text}</Text>}
        </View>
      )}
    </Overlay>
  );
}

LoadingModal.defaultProps = {
  show: false,
}