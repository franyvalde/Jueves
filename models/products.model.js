const products = [
    { id: 1, type: "mouse", description: "Logitech X987" },
    { id: 2, type: "mouse", description: "Logitech X012" },
    { id: 3, type: "mouse", description: "Logitech X8888" },
    { id: 4, type: "hub", description: "Anker con USB" },
    { id: 5, type: "hub", description: "Sin puerto USB" },
  ];

const getProducts = () => {
    if(products.length < 0){
        return 'No hay productos en la lista. '
    } else {
        return products
    }
}

const getProductsById = (id) => {
    const product = products.find((element) => element.id == id);
    return product || "Producto inexistente."
}

export default {
    getProducts,
    getProductsById
}