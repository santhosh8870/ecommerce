const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const app = express()
dotenv.config({path : path.join(__dirname,"config", "config.env")})
const orders = require("./routes/order")
const products = require("./routes/product")
const users = require("./routes/user")
const cors = require("cors")
const connectDatabase = require("./config/connectDatabase")
connectDatabase()
app.use(express.json())
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://finall-project-3.onrender.com"
  ],
  credentials: true
}));
app.use("/api/v1",orders)
app.use("/api/v1",products)
app.use("/api/v1",users)
app.use("/",(req, res)=>{
   res.send("<h1>Welcome to E-Commerce API</h1>")
})
app.listen(process.env.PORT, ()=>{
   console.log(`Server Is Ready At ${process.env.PORT} in ${process.env.NODE_ENV}`) 
})