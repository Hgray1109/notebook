import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setCurrentUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/login', {
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
                <h1>Welcome to Notebook</h1>
            </div>
            <div className='login-form-container'>
                <h1 className='login-h1'>Login</h1>
                <form className='login-form' onSubmit={handleSubmit}>
                    <span>Username: </span>
                    <input placeholder='Username..' value={username} name="username" required onChange={(e) => setUsername(e.target.value)} />
                    <span>Password: </span>
                    <input type="password" placeholder='Password..' value={password} name="password" required onChange={(e) => setPassword(e.target.value)} />
                    <span>Email: </span>
                    <input type="text" placeholder='Email..' value={email} name="email" required onChange={(e) => setEmail(e.target.value)} />
                    <button type='submit'>Log in</button>
                </form>
                <p>Don't have an account? Click <Link to='/signup' style={{ textDecoration: 'none' }}><span>here</span></Link> to sign up.</p>
            </div>
        </div>
    )
}