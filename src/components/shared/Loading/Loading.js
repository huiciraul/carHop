import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text } from '@rneui/base';
import { styles } from './Loading.styles';

export function Loading(props) {
    const {show, text} = props;
    if (!show) return null
    return (
    <View style={styles.content}>
        <ActivityIndicator size='large' color="#063970" />
        {text && <Text>{text}</Text>}
    </View>
  );
}