const productModel = require('../models/productModels');
const multer = require ('multer')
const upload = multer({ dest: 'img/products' });

const controller = {
    getList: (req, res) => {
        const products = productModel.findAll();

        res.render('detail', { products }); // Es un atajo, hacerlo así es lo mismo que poner {products: products}
    },
    crear: (req, res) => {
        const products = productModel.findAll();

        res.render('create');
    },
    
    createProduct: (req, res) => {

        console.log(req.file)
        
        let descuento = Math.floor(Math.random() * 11);

        descuento = descuento*5

        const newProduct = {
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            disscount: descuento,
            img: req.file.filename
        }
        
        

        const createdProduct = productModel.createProduct(newProduct);

        res.redirect('/' + createdProduct.id + '/detail');
    },

    getDetail: (req, res) => {
        const productId = req.params.id;

        const product = productModel.findById(productId);

        console.log(product)

        if (product === undefined) return res.redirect('/')

        res.render('detail', { product});
    },
    products: (req, res) => {
        const products = productModel.findAll();

        res.render('products', { products }); // Es un atajo, hacerlo así es lo mismo que poner {products: products}
    }
}

module.exports = controller;