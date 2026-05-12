// Inicia un bucle que ejecuta el Callback cada X milisegundos.
// Devuelve un ID único para que no pierdas el rastro del proceso.

let idIteracion = setInterval( () => {
    // Lógica aquí
    const video = document.querySelector('video');
    if (video){
        clearInterval(idIteracion);
        video.addEventListener('pause' ,() =>{
            const paqueteDatos = {
                accion : "pausa",
                exctTime : video.currentTime
            }
            chrome.runtime.sendMessage(paqueteDatos , (response) => {
                console.log("Respuesta background.js: ", response);
            });
            console.log("El video esta pausado en el segundo: ",video.currentTime);
        });
        video.addEventListener('play',() =>{
            console.log("El video no esta pausado");
        })
    }
}, 1000); 

