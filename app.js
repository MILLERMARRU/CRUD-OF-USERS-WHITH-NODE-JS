const express = require('express');
const app = express();

app.set('view engine', 'ejs');  //motor de pantilla

app.use('/', require('./routes/route')); //ruta

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

/* app.get('/', (req, res) => {
    res.send('Hello miller');
}); */





