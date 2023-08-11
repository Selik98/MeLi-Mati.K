const productModel = require('../models/productModels');


const controller = {
    home: ('/', (req, res) => {
    console.log('Accedieron al Index')
    const productos = productModel.findAll()
    const ofertas = productos.sort((a, b) => b.disscount - a.disscount).slice(0, 4);    
    let destacados = [] 

    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * productos.length);
        const randomElement = productos.splice(randomIndex, 1)[0];
        destacados.push(randomElement);
      }
    
    
    res.render('index' , {destacados,ofertas,productos})
    })
}

module.exports = controller;