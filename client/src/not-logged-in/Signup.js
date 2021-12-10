import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

export default function Signup({ setCurrentUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, email })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        setCurrentUser(user)
                        navigate("/home")
                    })
                } else {
                    res.json().then(errors => {
                        console.error(errors)
                    })
                }
            })
    }



    return (
        <div className='login-page'>
            <div className='login-info'>
                <h1 style={{ textDecoration: 'underline', color: "blue"}}>Welcome to Infinite Ink </h1>
            </div>
            <div className='login-form-container'>
                <h3 className='login-h1'>Sign up for your free account today</h3>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className = "login">
                    <span>Username: </span>
                    <input placeholder='Username...' value={username} name="username" required onChange={(e) => setUsername(e.target.value)} />
                    <span>Password: </span>
                    <input type="password" placeholder='Password...' value={password} name="password" required onChange={(e) => setPassword(e.target.value)} />
                    <span>Email: </span>
                    <input type="text" placeholder='Email...' value={email} name="email" required onChange={(e) => setEmail(e.target.value)} />
                    <button style={{ backgroundColor: "blue", color: "black"}}type='submit'>Sign Up!</button>
                    </div>
                </form>
                <div className= "info">
                <p >If you have an account Click <Link to='/' style={{ textDecoration: 'underline', color: "blue"}}><span>here</span></Link> to login.</p>
                <p> For a Premium Account Click <Link to='/adminSignup' style={{ textDecoration: 'underline', color: "blue"}}><span>here</span></Link> </p>
                </div>
            </div>
        </div>
    )
}