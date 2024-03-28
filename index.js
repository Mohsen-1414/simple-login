const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require('./database/model');
const {login, signup} = require('./controllers/controllers');

const app = express();

//converting data to json
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// Using EJS as the viwing engine 
app.set('view engine', 'ejs');
// static folder path
app.use(express.static('public'));



// Routers

app.get('/login', (req,res)=>{
    res.render('login')
});

app.get('/signup', (req,res)=>{
    res.render('signup')
});

// Registeration 
app.post('/signup',signup);


// Login
app.post('/login', login);


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`We are live on port ${port}`);
});


