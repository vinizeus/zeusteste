const express = require('express');
const app = express();
const banco = require('./src/data/banco.json')
const PORT  = process.env.PORT || 8877;
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);


app.get('/banco', (req, res,) => 
    res.json (banco[random(0, banco.length)])
);

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT, () => {
console.log('O servidor está funcionando na porta' + PORT)
});