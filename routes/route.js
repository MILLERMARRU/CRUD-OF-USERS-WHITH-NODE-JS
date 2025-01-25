const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/hello', (req, res) => {
    res.send('hello word');
});

//RUTA PARA OBTENER REGISTROS
router.get('/', (req, res) => {
    
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log('Error fetching users' + err);
            return res.status(500).send('Error al obtener usuarios');
        }
            res.render('index', {res: result});
    }); 

});

//RUTA PARA CREAR REGISTRO
router.get('/create', (req, res) => {
    res.render('create');
});

const crud = require('../controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

//RUTA PARA EDITAR REGISTRO
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.log('Error fetching user' + err);
            return res.status(500).send('Error al obtener usuario');
        }
        res.render('edit', {res: result[0]});
    });

});

//RUTA PARA ELIMINAR REGISTRO
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.log('Error deleting user' + err);
            return res.status(500).send('Error al eliminar usuario');
        }
        res.redirect('/');
    });
});

module.exports = router;