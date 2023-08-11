// npm install express
// npm install dotenv
// npm install ejs 

const express = require ('express')
const path = require ('path')
const dotenv = require('dotenv').config();
const app = express()

app.set('view engine', 'ejs');

app.set ('views', [
    path.join(__dirname, './source/views'),
    path.join(__dirname, './source/views/users'),
    path.join(__dirname, './source/views/products')
])




const mainRouter = require('./source/routes/mainRouter');
const userRouter = require('./source/routes/userRouter');
const productRouter = require('./source/routes/productRouter');

app.listen(process.env.PORT, () => {
    console.log ("Servidor escuchando Puerto " + process.env.PORT + " http://localhost:" + process.env.PORT)
}) 


app.use (express.urlencoded ({extended:false}))
app.use (express.json())
app.use ('/', mainRouter)
app.use ('/', userRouter)
app.use ('/', productRouter)

app.use(express.static('public'));