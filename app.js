// npm install express
// npm install dotenv
const express = require ('express')
const path = require ('path')
const dotenv = require('dotenv').config();


const app = express()


app.get('/', (req,res) => {
    console.log ('Hicieron un Request en "/"')
    res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/login', (req,res) => {
    console.log ('Hicieron un Request en "/login"')
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.get('/register', (req,res) => {
    console.log ('Hicieron un Request en "/register"')
    res.sendFile(path.join(__dirname, './views/register.html'))
});



app.listen(process.env.PORT, () => {
    console.log ("Servidor escuchando Puerto" + process.env.PORT + "http://localhost:5000")
}) 


app.use(express.static('public'));