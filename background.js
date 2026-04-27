chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Mensaje recibido , current time es:", message); 
    sendResponse({respuesta: "¡Hola desde background.js!"});
});