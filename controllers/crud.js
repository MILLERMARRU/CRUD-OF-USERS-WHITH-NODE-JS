const db = require('../database/db');
exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    //console.log(user, rol);

    db.query('INSERT INTO users SET ?', {nombre: user, rol: rol}, (err, result) => {
        if (err) {
            console.log('Error saving user' + err);
            return res.status(500).send('Error al guardar usuario');
        }
        console.log('User saved');
        res.redirect('/');
    });

};

exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;

    db.query('UPDATE users SET ? WHERE id = ?', [{nombre: user, rol: rol}, id], (err, result) => {
        if (err) {
            console.log('Error updating user' + err);
            return res.status(500).send('Error al actualizar usuario');
        }
        console.log('User updated');
        res.redirect('/');
    });
};