chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Mensaje recibido en background.js:", message); 
    sendResponse({respuesta: "¡Hola desde background.js!"});
});