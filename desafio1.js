class ProductManager {
    constructor () {
        this.products = []
    }
    addProduct = (newProduct) => {
        const productsDb = this.products.find(product => product.code === newProduct.code)
        if (productsDb) {
            return `Ya se encuentra el producto que intenta agregar`
        }
        if (newProduct.title === "") {
            return "Falta el title"
        }
        if (newProduct.description === "") {
            return "Falta la description"
        }
        if (newProduct.price === 0) {
            return "Falta el price"
        }
        if (newProduct.thumbnail === "") {
            return "Falta el thumbnail"
        }
        if (newProduct.code === 0) {
            return "Falta el code"
        }
        if (newProduct.stock === 0) {
            return "Falta el stock"
        }
        if (this.products.length === 0) {
            newProduct.id = 1 
            this.products.push(newProduct) 
        } else {
            newProduct.id = this.products[this.products.length - 1].id + 1
            this.products = [... this.products, {... newProduct, id: this.products[this.products.length -1].id +1}]
        }
    }
    
    
    getProducts () {
        return this.products
    }
    getProductsById = (id) => {
        const productsDb = this.products.find(product => product.id === id)
        if (!productsDb) {
            return "Producto no existe"
        }
        return productsDb
    }
}
const productos = new ProductManager()

productos.addProduct(
    {
        title: "producto 1",
        description: "aldkno",
        price: 11,
        thumbnail: "./bla",
        code: 1,
        stock: 10
    }
)
productos.addProduct(
    {
        title: "producto 2",
        description: "aldkno",
        price: 11,
        thumbnail: "./bla",
        code: 2,
        stock: 10
    }
)
productos.addProduct(
    {
        title: "producto 3",
        description: "aldkno",
        price: 11,
        thumbnail: "./bla",
        code: 3,
        stock: 10
    }
)
productos.addProduct(
    {
        title: "producto 1 replica",
        description: "aldkno",
        price: 11,
        thumbnail: "./bla",
        code: 1,
        stock: 10
    }
)

console.log(productos.getProductsById(1))
console.log(productos.getProducts())



