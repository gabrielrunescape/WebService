var db_string = 'mongodb://127.0.0.1/api';
var mongoose  = require('mongoose').connect(db_string);

var database  = mongoose.connection;
var Usuario;

database.on('error', console.error.bind(console, 'Erro ao conectar ao banco!'));

database.once('open', function() {
    var userSchema = mongoose.Schema({
        login: String,
        senha: String,
        email: String,
        Data_Criacao: Date
    });

    exports.Usuario = mongoose.model('Usuario', userSchema);
});
