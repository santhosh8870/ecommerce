import { Navigate } from 'react-router-dom'

function ProductedRoute({children}){
    const auth = localStorage.getItem("auth")

    if(!auth){
        return <Navigate to={"/login"} replace />
    }

    return children
}

export default ProductedRoute