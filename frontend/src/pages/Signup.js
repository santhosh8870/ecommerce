import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [username, setuserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.post(process.env.BACKEND_URL+"register", {
            username,
            email,
            password
        })
        .then((response)=>{
            console.log("User Signed Up : ", response.data)
            localStorage.setItem("auth", JSON.stringify(response.data.user))
            navigate("/")
        })
        .catch((err)=>{
            console.log("Signup Error : ",err)
        })

    }

  return (
    <div style={{display : "flex", justifyContent : "center", marginTop:"50px"}}>
        <div className='form-box'>
            <form className='form' onSubmit={handleSubmit}>
                <span className='title'>Sign up</span>
                <span className='subtitle'>Create a Free account with your email</span>
                <div className='form-container'>
                    <input 
                        type="text"
                        className='input'
                        placeholder='Full Name'
                        value={username} 
                        onChange={(e)=> setuserName(e.target.value)}
                    />
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
                <p>Have an Account? <Link to={"/login"}>Log in</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup