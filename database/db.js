const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '123456',
    database: 'node'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to database' + err);
    }
    console.log('Connected to database successfully');
});

module.exports = db;