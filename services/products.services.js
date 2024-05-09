import model from '../models/products.model.js'
//Los servicios NO manejan el REQ y el RES, y NO manejan la lógica del negocio
//Es solo un pasamanos
//NO maneja datos directamente de la base de datos

const getProducts = () => {
    const character = model.getCharacter()
    return character
}

const getProductsById = (id) => {
    const characterById = model.getCharacterById(id)
    return characterById
}

export default {
    getProducts,
    getProductsById
}