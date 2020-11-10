var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/projeto2-bloomberg');
mongoose.connect(process.env.mongo_connection)

var userSchema = new mongoose.Schema({
    nome: String,
    senha: String,  
    acoes:[{ticker: String,preco: Number,qtd: Number}]
}, {collection: 'usercollection'}
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema}