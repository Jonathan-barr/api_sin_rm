const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
//middlewares
app.use(express.json()); // convierte un archivo json a js
app.use(express.urlencoded({ extended: false })); // parseo desde formularios

// rutas
app.use(require('./routes/index'));


// CORS
app.use(cors());
// PUERTO
app.listen(PORT, msg => console.log('Servidor API-REST corriendo en el puerto 3000'));