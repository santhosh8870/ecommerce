import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Home(){

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(process.env.BACKEND_URL+"products").then((res)=> res.json()).then((res)=> setProducts(res["products"]))
    },[])

    return(
        <>
          <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
            <div className="row">

                {
                    products.map((product)=> <ProductCard product={product} key={product._id}/>)
                }
                
            </div>
          </section>
        </>
    )
}

export default Home