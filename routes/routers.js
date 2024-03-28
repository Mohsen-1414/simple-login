const express = require('express');
const Controllers = require('../controllers/controllers');
const router = require('express').Router();
const urlencodedParser = express.urlencoded({extended: false});


router.get('/login', (req,res)=>{
    res.render('login')})
router.get('/signup', (req,res)=>{
        res.render('login')})

router.post('/login', Controllers.login);
router.post('/signup', Controllers.signup);


module.exports = router;


