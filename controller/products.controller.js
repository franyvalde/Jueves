
import services from "../services/products.services.js"

const getProducts = (req, res) =>{
    const products = services.getProducts()
    //solo enviamos el "res" (respuesta) desde el controlador, el resto de las capas desconoce el res
    res.send(products);
}

const getProductsById = (req, res) =>{
    const {id} = req.params //necesitamos el id para filtrar productos que viaja en el objeto de requerimiento(REQ)
    const productById = services.getProductsById(id)
    res.send(productById);
}

export default {
    getProducts,
    getProductsById
}