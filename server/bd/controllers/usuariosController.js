// server/bd/controllers/usuariosController.js
const db = require('../../index');  

// Obtener todos los usuarios
exports.getAllUsuarios = (req, res) => {
    const query = 'SELECT * FROM Usuarios';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error obteniendo los usuarios' });
        } else {
            res.json(results);
        }
    });
};

// Obtener usuario por ID
exports.getUsuarioById = (req, res) => {
    const query = 'SELECT * FROM Usuarios WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error obteniendo el usuario' });
        } else {
            res.json(results[0]);
        }
    });
};

// Crear nuevo usuario
exports.createUsuario = (req, res) => {
    const { nombre, correo_electronico, contrasena, carnet, rol_id } = req.body;
    const query = 'INSERT INTO Usuarios (nombre, correo_electronico, contrasena, carnet, rol_id) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nombre, correo_electronico, contrasena, carnet, rol_id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error creando el usuario' });
        } else {
            res.json({ message: 'Usuario creado con éxito', id: results.insertId });
        }
    });
};

// Actualizar usuario
exports.updateUsuario = (req, res) => {
    const { nombre, correo_electronico, contrasena, carnet, rol_id } = req.body;
    const query = 'UPDATE Usuarios SET nombre = ?, correo_electronico = ?, contrasena = ?, carnet = ?, rol_id = ? WHERE id = ?';
    db.query(query, [nombre, correo_electronico, contrasena, carnet, rol_id, req.params.id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error actualizando el usuario' });
        } else {
            res.json({ message: 'Usuario actualizado con éxito' });
        }
    });
};

// Eliminar usuario
exports.deleteUsuario = (req, res) => {
    const query = 'DELETE FROM Usuarios WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error eliminando el usuario' });
        } else {
            res.json({ message: 'Usuario eliminado con éxito' });
        }
    });
};
