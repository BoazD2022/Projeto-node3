const express = require('express')

const app = express()


const sequelize = require('./config/db')

const Router = require('./routes')

app.use(express.json())

sequelize.sync().then(() => {
    console.log('banco de dados conectado com sucesso!')
})


app.use('/tasks', Router)



app.listen(8080,()=> console.log('servidor rodando na porta 8080'))