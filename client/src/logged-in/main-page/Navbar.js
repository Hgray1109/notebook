import React from "react";
import { Link} from 'react-router-dom'


export default function Navbar({ handleLogout }){


    return(
        <div className="flexbox-container">
            
            <nav className="navbar navbar-default">
                <Link to='/home'><span className="navbar-brand flex">Home</span></Link>
                <Link to='/music-player'><span className="navbar-brand flex" >Music-Player</span></Link>
                <Link to='/videos'><span className='navbar-brand flex' >Videos</span></Link>
                <Link to='/journals'><span className='navbar-brand flex' >Journal</span></Link>
                <Link to='/'><span className='navbar-brand flex' onClick={handleLogout}>Log out</span></Link>
                {/* <Link to= '/auth/spotify/callback'>Spotify button</Link> */}
                
            </nav>
           
        </div>
        
    )
}