const express = require('express');
const routes = require('./routes/route');
const app = express();

app.use(express.urlencoded({extended: false})); //middleware
app.use(express.json()); //middleware

app.set('view engine', 'ejs');  //motor de pantilla
app.use('/', routes); //ruta



app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});




/* app.get('/', (req, res) => {
    res.send('Hello miller');
}); */





