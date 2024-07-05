const express = require('express')
const app = express();

const port = 5000

const path = require('path')
//const router = require('router')
const voltar = require('./return')

const pathBegin = path.join(__dirname,'templates')


app.use(express.static('public'))
app.use('/return', voltar);

app.get("/", (req, res)=>{
    res.sendFile(`${pathBegin}/index.html`)
})


app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})

