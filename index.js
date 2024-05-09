import express from 'express'
import productsRoutes from './routes/products.routes.js'

const puerto = 8100
const app = express()
app.use(express.json)
app.use(express.urlencoded({extended:true}))



app.use("/api", (productsRoutes))

app.listen(puerto, ()=> console.log('Server listening on ' + puerto))
app.on("Error", (error)=> console.log("Server error "+error))




