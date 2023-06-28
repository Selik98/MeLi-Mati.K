// npm install express
const express = require ('express')
const path = require ('path')

const app = express()


app.get('/', (req,res) => {
    console.log ('Hicieron un Request en "/"')
    res.sendFile(path.join(__dirname, './index.html'))
});




app.listen(5000, () => {
    console.log ("Servidor escuchando Puerto 5000")
}) 


app.use(express.static('public'));