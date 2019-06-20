const express = require('express')
const app = express()

const handlebars = require('express-handlebars')
app.use(express.static('static')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

// Configurando o HandleBars e definindo o arquivo-base
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Conexão com o Banco de Dados MySQL
const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'walieully', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
    }
})

sequelize.authenticate().then(function () {
    console.log('Conectado com sucesso.')
}).catch(function (erro) {
    console.log('Falha ao se conectar: ' + erro)
})

app.get('/', function (req, res) {
    res.render('index')
})

app.listen(3000, function () {
    console.log('Servidor rodando...')
})