// 1. Importamos la librería local de Socket.io al Service Worker
importScripts('socket.io.min.js');

// 2. Establecemos la conexión directa con el servidor Node.js
const socket = io('http://localhost:3000' ,{
    transports: ['websocket'] // Forzamos el protocolo websocket , en vez de transformarlo de http a websocket
});

// 3. Verificamos internamente si la conexión fue un éxito
socket.on('connect', () => {
    console.log('Túnel WebSocket abierto con éxito. ID:', socket.id);
});

//Imprime msg si es que la conexion se desconecta
socket.on('disconnect', () => {
    console.log('Se perdió la conexión con el servidor.');
});

//Imprime error si es que hubo error de conexion
socket.on('connect_error', (error) => {
    console.error('Socket.io falló al conectar:', error.message);
});