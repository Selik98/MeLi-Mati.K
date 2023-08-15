const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/img/products"))
    },
    filename: (req, file, cb) => {
        console.log(file)
        const newfilename = Date.now() + '-' + file.originalname
        console.log(newfilename)
        cb(null, newfilename)
    }
})

const upload = multer({ storage });


router.get('/products', productController.products);
router.get('/:id/detail', productController.getDetail);
router.get('/create', productController.crear);
router.post('/crearProducto', upload.single('img'), productController.createProduct);


module.exports = router;
