const collection = require('../database/model');
const bcrypt = require('bcrypt');
const express = require('express');





exports.login = async (req,res)=>{
    try {
        const user = await collection.findOne({name: req.body.username });
        if(!user){
            res.send("message: User doesn't exist");
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordCorrect){
            res.render('home');
        }
        else{
            res.send('wrong password');
        }
    } catch (error) {
        throw error;
    }
};


exports.signup = async (req,res) => {
    const data ={
        name: req.body.username,
        password: req.body.password
    };

    const existingUser = await collection.findOne({name: data.name});
    if(existingUser){
        res.send('Username already exists, choose another one!');
    }else{
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;

        const userdata = await collection.insertMany(data)
        console.log(userdata);
    }
}


//module.exports = {login , signup};

