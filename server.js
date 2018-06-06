// Configurer le serveur
let express = require('express');
let port = 8080;
let app = express();

// Ecouter le serveur sur le port 8080
app.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );