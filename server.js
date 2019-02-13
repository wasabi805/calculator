require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/calculator_jQuery.html'));
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('views'));
    res.sendFile(path.join(__dirname + '/views/calculator_jQuery.html'));
}

const port = process.env.PORT|| 5000;
app.listen(port, ()=>{
    console.log( `Server running on port ${port}` );
});
