import { Fragment } from "react/jsx-runtime";

export default function Cart({cartItems, setCartItems})
{

    function increase(item){
        if(item.product.stock==item.qty){
            return;
        }
        const updateItems = cartItems.map((i)=>{
            if(i.product._id===item.product._id){
                
                i.qty++;
            }

            return i;
        })

        setCartItems(updateItems)
    }

    function decrease(item){
        if(item.qty>1){
            const updateItems = cartItems.map((i)=>{
                if(i.product._id===item.product._id){
                    i.qty--;
                }
                return i;
            })

            setCartItems(updateItems)
        }
    }

    function removeItem(item){
        const updateItems = cartItems.filter((i)=>{
            if(i.product._id!==item.product._id){
                return true;
            }
        })

        setCartItems(updateItems)
    }

    async function placeOrder(){
        fetch("http://localhost:8000/api/v1/order",{
            method : "POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify(cartItems)
        })
        .then(()=>{
            setCartItems([])
            alert("Order-Successfully")
        })
    }

    return cartItems.length ? <Fragment> <div className="container container-fluid">
                <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>
                
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-8">

                        { cartItems.map((item)=> (

                            <Fragment>

                                <hr />
                                <div className="cart-item" key={item.product._id}>
                                    <div className="row">
                                        <div className="col-4 col-lg-3">
                                            <img src={item.product.images[0].image} alt="Laptop" width="115" />
                                        </div>
        
                                        <div className="col-5 col-lg-3">
                                            <a href="#">{item.product.name}</a>
                                        </div>
        
        
                                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                            <p id="card_item_price">${item.product.price}</p>
                                        </div>
        
                                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                            <div className="stockCounter d-inline">
                                                <span className="btn btn-danger minus" onClick={()=>decrease(item)}>-</span>
                                                <input type="number" className="form-control count d-inline" value={item.qty} readOnly />
        
                                                <span className="btn btn-primary plus" onClick={()=>increase(item)}>+</span>
                                            </div>
                                        </div>
        
                                        <div className="col-4 col-lg-1 mt-4 mt-lg-0" onClick={()=>removeItem(item)}>
                                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger"></i>
                                        </div>
        
                                    </div>
                                </div>
                                <hr />
                            </Fragment>
                        ))
                        }
                    </div>
                    

                    <div className="col-12 col-lg-3 my-4">
                        <div id="order_summary">
                            <h4>Order Summary</h4>
                            <hr />
                            <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((pre, cur)=> (pre + cur.qty),0)}</span></p>
                            <p>Est. total: <span className="order-summary-values">${Number(cartItems.reduce((pre, cur)=> (pre + cur.product.price * cur.qty),0).toFixed(2))}</span></p>

                            <hr />
                            <button id="checkout_btn" className="btn btn-primary btn-block" onClick={placeOrder}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment> : <h1>Your List Is Empty</h1>
}