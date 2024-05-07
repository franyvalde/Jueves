import express from 'express'
import controller  from '../controller/products.controller.js'

const router = express.Router()


//Las rutas solo se encargan de la declaración de cada acceso a nuestra APIREST
router.get("/products", controller.getProducts)
router.get("/products/:id", controller.getProductsById)

//Si no existe una importación del módulo no funciona
export default router

//common.js (si usamos require para importar)
//module.exports = router