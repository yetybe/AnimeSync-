const express = require('express');
const http = require('http'); // 1. Módulo nativo para crear servidores base
const { Server } = require('socket.io'); // 2. Importamos la clase Server de socket.io

const app = express();

// 3. Envolvemos la app de Express en un servidor HTTP puro
const server = http.createServer(app); 

// 4. Montamos Socket.io sobre el servidor
const io = new Server(server, {
    cors: {
        origin: "*" // Permite que extensiones de Chrome y otras webs se conecten sin ser bloqueadas
    }
});

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('¡El servidor de AnimeSync está recibiendo conexiones!');
});

// 5. El núcleo de WebSockets: Escuchar nuevas conexiones
io.on('connection', (socket) => {
    // Este bloque se ejecuta cada vez que un navegador abre el túnel
    console.log('Un nuevo usuario se ha conectado. ID:', socket.id);

    // Evento automático cuando el usuario cierra la pestaña
    socket.on('disconnect', () => {
        console.log('El usuario se ha desconectado. ID:', socket.id);
    });
});

// 6. ATENCIÓN: Ahora usamos server.listen en lugar de app.listen
server.listen(PORT, () => {
    console.log(`Servidor inicializado y escuchando en http://localhost:${PORT}`);
});