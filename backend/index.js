// backend/index.js
const express = require("express");
const http = require("http").createServer(app); // Crear el servidor HTTP
const io = require("socket.io")(http); // Pasar el servidor HTTP a socket.io
const port = 3000;

io.on("connection", socket => {
    console.log(`User connected`);
    
    // Maneja eventos de chat aquí
    socket.on("enviarMensaje", (data) => {
        // Broadcast del mensaje a todos los clientes conectados
        io.emit("recibirMensaje", data);
    });

    socket.on("disconnect", () => {
        console.log(`User disconnected`);
    });
});

http.listen(port, () => console.log("Server running on port " + port));
