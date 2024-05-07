import model from '../models/products.model.js'
//Los servicios NO manejan el REQ y el RES, y NO manejan la lógica del negocio
//Es solo un pasamanos
//NO maneja datos directamente de la base de datos

const getProducts = () => {
    const products = model.getProducts()
    return products
}

const getProductsById = (id) => {
    const productsById = model.getProductsById(id)
    return productsById
}

export default {
    getProducts,
    getProductsById
}