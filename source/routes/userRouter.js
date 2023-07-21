const express = require ('express')
const router = express.Router()
const usercontroller = require ('../controllers/userController')

router.get('/login' , usercontroller.login);
router.get('/register' , usercontroller.register);

module.exports = router;

