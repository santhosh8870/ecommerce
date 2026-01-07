import Search from "./Search"
import { Link } from 'react-router-dom'


const Header = ({cartItems})=>{

    const loggedIn = localStorage.getItem("auth")

    const handleLogout = ()=>{
        localStorage.removeItem("auth")
        window.location.href = "/login"
    }

    return(
        <nav className="navbar-container">
            <div className="nav-left">
                <img width={"70px"} src="/images/logo.png" alt="logo" />
            </div>
            <div className="nav-center">
                <Search/>
            </div>
            <div className="nav-right">
                <Link to={"/cart"}>
                    <span id="cart">Cart</span>
                    <span id="cart_count">{cartItems.length}</span>
                </Link>
                {
                    loggedIn && (
                        <Link to={'/profile'}>
                            <button className="login-btn">Profile</button>
                        </Link>
                    )
                }
                {
                    loggedIn ? (
                        <button onClick={handleLogout} className="logout-btn">logout</button>
                    ) : (
                        <Link to={'/login'}>
                            <button className="login-btn">Login</button>
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}

export default Header