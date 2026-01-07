import { Link } from "react-router-dom"

const ProductCard = ({product})=>{
    return(
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img src={product.images[0].image} alt="..." className="card-img-top mx-auto" />
                <div className="card-body d-flex flex-column">
                    <Link to={"/product/"+product._id}>
                        <h5 className="card-title">{product.name}</h5>
                    </Link>
                    <p className="card-text">{product.price}</p>
                    <Link to={"/product/"+product._id} id="view_btn" className="btn btn-block">View-Details</Link>
                </div> 
            </div>
        </div>
    )
}

export default ProductCard;