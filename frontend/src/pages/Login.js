import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.post(process.env.BACKEND_URL+"login", {
            email,
            password
        })
        .then((response)=>{
            console.log("User Signed Successfully : ", response.data)

            if(response.data.success){
                localStorage.setItem("auth", JSON.stringify(response.data.user))
                navigate("/")
            }
        })
        .catch((err)=>{
            console.log("There was an error signing up! : ",err)
        })

    }

  return (
    <div style={{display : "flex", justifyContent : "center", marginTop:"50px"}}>
        <div className='form-box'>
            <form className='form' onSubmit={handleSubmit}>
                <span className='title'>Sign in</span>
                <span className='subtitle'>Login account with your email</span>
                <div className='form-container'>
                    <input 
                        type="email"
                        className='input'
                        placeholder='Email'
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        className='input'
                        placeholder='Password'
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button>Login</button>
            </form>
            <div className='form-section'>
                <p>Don't Have an Account? <Link to={"/register"}>Create One</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login