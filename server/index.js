// server/index.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');  // Importar el módulo cors

// Importar rutas
const usuariosRoutes = require('./bd/routes/usuarios');
const eventosRoutes = require('./bd/routes/eventos');
const rolesRoutes = require('./bd/routes/roles');
const ticketsRoutes = require('./bd/routes/tickets');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Permitir solicitudes desde otros dominios
app.use(express.json()); // Para procesar datos JSON en las solicitudes

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Random619@#',
  database: 'sistema_eventos02',
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.log('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Usar las rutas importadas para manejar los CRUDs
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/tickets', ticketsRoutes);

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
