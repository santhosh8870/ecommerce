import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_URL+'register', {
            name,
            email,
            password
        })
        .then((response) => {
            console.log('User signed up:', response.data);

            // Save logged-in user
            localStorage.setItem("auth", JSON.stringify(response.data.user));

            navigate('/');
        })
        .catch((error) => {
            console.error('Signup error:', error);
        });


    }

  return (
        <div style={{display: 'flex', justifyContent : "center", marginTop: "50px"}}>
            <div className="form-box">
                <form className="form" onSubmit={handleSubmit}>
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Full Name" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <input 
                            type="email" 
                            className="input" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            className="input" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button>Sign up</button>
                </form>
                <div className="form-section">
                    <p>Have an account? <Link to="/login">Log in</Link> </p>
                </div>
            </div>
        </div>
  );
}


export default Signup;
