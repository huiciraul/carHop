import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from "../../../utils"; // Importa Firebase aquí

export function listChat() {
    // const navigation = useNavigation();
    // const [conversations, setConversations] = useState([]);

    // useEffect(() => {
    //     // Aquí cargas las conversaciones desde Firebase y las estableces en el estado
    //     // db.collection('conversations').onSnapshot((snapshot) => {
    //     //     const conversationsData = snapshot.docs.map((doc) => doc.data());
    //     //     setConversations(conversationsData);
    //     // });
    // }, []);

    // const handleChatPress = (conversation) => {
    //     // Navegar a la pantalla de chat y pasar información sobre la conversación
    //     navigation.navigate('Chat', { conversation });
    // };

    return (
        // <View>
        //     <Text>Lista de Conversaciones</Text>
        //     <FlatList
        //         data={conversations}
        //         keyExtractor={(item) => item.id.toString()}
        //         renderItem={({ item }) => (
        //             <TouchableOpacity
        //                 onPress={() => handleChatPress(item)}
        //             >
        //                 <Text>{item.driverName}</Text>
        //                 {/* Mostrar otros detalles de la conversación */}
        //             </TouchableOpacity>
        //         )}
        //     />
        // </View>
        <View></View>
    );
}