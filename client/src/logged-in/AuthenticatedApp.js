import React, {useState, useEffect} from 'react'
import Navbar from './main-page/Navbar'
import Header from './main-page/Header'
import Body from './main-page/Body'
import { useNavigate } from 'react-router-dom'


export default function AuthenticatedApp ({ currentUser, rerender, setRerender, setCurrentUser}){
// these parmas didn't work - rerender setrerender
    // const {id } = currentUser
const navigate = useNavigate();



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
            {/* <iframe src="https://open.spotify.com/embed/track/4VwvwlbNZavsDkRdIKFGBi" width="560" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
            <Body user={currentUser}/>
        </div>
    )
}


// width="300" height="380"