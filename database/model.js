const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb+srv://Admin:keepItSafe@mydatabase.cicdogw.mongodb.net/try');

// checking the connection 


// try {
//     connect.then(()=>{
//         console.log('Database is connected ')
//     })
// } catch (error) {
//     console.log('Database is not connected ');
//     throw error;
// };

connect.then(()=>{
    console.log('Database has been connected');
})
    .catch(()=>{
        console.log('Database is not connected ');
    });

// creating schema 
const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

// creating a model
const collection = new mongoose.model('userses', LoginSchema);

module.exports = collection;