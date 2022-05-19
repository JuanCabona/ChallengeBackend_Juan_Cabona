const express = require ('express')
const router = express.Router()

const controller = require('../controllers/apiController')

router.get('/', controller.home);
router.post('/cargarPelicula', controller.cargarPelicula);

module.exports = router