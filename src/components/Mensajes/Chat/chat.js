// Chat.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { io } from 'socket.io-client'; // Importa el cliente de Socket.io

const socket = io('http://localhost:3000'); // Conectar al servidor Socket.io

export function Chat({ route }) {
    // const { conversation } = route.params;
    // const [messages, setMessages] = useState([]);
    // const [messageText, setMessageText] = useState('');

    // useEffect(() => {
    //     socket.on('recibirMensaje', (data) => {
    //         setMessages([...messages, data]);
    //     });

    //     return () => {
    //         socket.disconnect();
    //     };
    // }, [messages]);

    // const sendMessage = () => {
    //     if (messageText.trim() !== '') {
    //         socket.emit('enviarMensaje', {
    //             text: messageText,
    //             conversationId: conversation.id, // Enviar el ID de la conversación
    //         });
    //         setMessageText('');
    //     }
    // };

    return (
        // <View>
        //     <Text>Chat con {conversation.driverName}</Text>
        //     <FlatList
        //         data={messages}
        //         keyExtractor={(item) => item.id.toString()}
        //         renderItem={({ item }) => (
        //             <View>
        //                 <Text>{item.text}</Text>
        //             </View>
        //         )}
        //     />
        //     <TextInput
        //         placeholder="Escribe un mensaje"
        //         value={messageText}
        //         onChangeText={(text) => setMessageText(text)}
        //     />
        //     <Button title="Enviar" onPress={sendMessage} />
        // </View>
        <view></view>
    );
}


