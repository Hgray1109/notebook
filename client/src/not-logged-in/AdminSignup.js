import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

export default function AdminSignup({ setCurrentUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [card_number, setCardNumber] = useState('')
    const [card_expiration, setExpiration] = useState('')
    const [card_name, setCardName] = useState('')
    // const [admin, setAdmin] = useState(false)
    const [toggleForm, setToggleForm] = useState(false)


    const navigate = useNavigate();

    const handleToggle = () => {
        setToggleForm(!toggleForm)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, email, card_number, card_expiration, card_name, admin:true})
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
                <h1>Premium Notebook</h1>
            </div>
            <div className='login-form-container'>
                <h1 className='login-h1'>Signup</h1>
                <form className='login-form' onSubmit={handleSubmit}>
                    <span>Username: </span>
                    <input placeholder='Username..' value={username} name="username" required onChange={(e) => setUsername(e.target.value)} />
                    <span>Password: </span>
                    <input type="password" placeholder='Password..' value={password} name="password" required onChange={(e) => setPassword(e.target.value)} />
                    <span>Email: </span>
                    <input type="text" placeholder='Email..' value={email} name="email" required onChange={(e) => setEmail(e.target.value)} />
                    <p> Please Enter your credit card information</p>
                    <button onClick={handleToggle}> MONEY </button> 
                    {toggleForm ? ( <div> <span>Card Number: </span>
                    <input palceholder ='Card Number..' value = {card_number} name="card_number" required onChange={(e) => setCardNumber(e.target.value)} />
                    <span>Card Expiration: </span>
                    <input palceholder ='Card Expiration..' value = {card_expiration} name="card_expiration" required onChange={(e) => setExpiration(e.target.value)} />
                    <span>Card Name: </span>
                    <input palceholder ='Card Name..' value = {card_name} name="card_name" required onChange={(e) => setCardName(e.target.value)} /> 
                    <button type='submit'>Sign Up!</button> </div>) : null}
                </form>
                <p>If you have an account Click <Link to='/' style={{ textDecoration: 'none' }}><span>here</span></Link> to login.</p>
               
            </div>
        </div>
    )
}