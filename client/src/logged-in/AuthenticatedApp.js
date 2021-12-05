import React, {useState, useEffect} from 'react'
import Navbar from './main-page/Navbar'
import Header from './main-page/Header'
import Body from './main-page/Body'
import { useNavigate } from 'react-router-dom'


export default function AuthenticatedApp ({ currentUser, rerender, setRerender, setCurrentUser}){
// const {id } = currentUser
const navigate = useNavigate();

useEffect(() => {
    console.log('hey')
},[rerender])


function handleLogout(){
    fetch(`/logout`,{
        method: 'DELETE',
        credentials: 'include'
    })
    .then(()=>{

        navigate('/')
        setCurrentUser(null)
        setRerender(!rerender)
    })
    
}


    return(
        <div className='home-page'>
            <Header/>
            <Navbar handleLogout={handleLogout}/>
            <Body user={currentUser}/>
        </div>
    )
}