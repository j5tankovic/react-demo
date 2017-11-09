const http = require('http');
const express = require('express');
const cors = require('cors')
const port = 8080;

const characters = [
    {
        name: 'Jon',
        surname: 'Snow',
        house: 'Stark',
    },
    {
        name: 'Daenerys',
        surname: 'Targaryen',
        house: 'Targaryen',
    }
]

const app = express();
app.use(cors());
app.get('/characters', (req, res) => {
    res.json(characters);
});

app.listen(port, function(){
    console.log(`App is listening on ${port}`);
});


