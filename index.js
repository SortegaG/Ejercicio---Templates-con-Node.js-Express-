const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3000; // Puerto a usar por el servidor

app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static('public')); // Middleware para servir archivos estáticos de front. CSS,JS,Assets

// Configuración de vistas PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views','./views');

// Rutas
const webRoutes = require("./routes/webroutes.routes")



// GET http://localhost:3000/about


// GET http://localhost:3000/location
// GET http://localhost:3000/mission
// GET http://localhost:3000/contact

// Habilitar rutas
app.use('/', webRoutes);

// Para ruta no existente
//app.use("*", manage404);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
