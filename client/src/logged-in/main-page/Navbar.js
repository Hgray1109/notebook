import React from "react";
import { Link} from 'react-router-dom'


export default function Navbar({ handleLogout }){


    return(
        <div className="navbar-header">
            
            <nav className="navbar navbar-default">
                <Link to='/home'><span className="navbar-brand">Home</span></Link>
                <Link to='/music-player'><span className="navbar-brand" >Music-Player</span></Link>
                <Link to='/videos'><span className='navbar-brand' >Videos</span></Link>
                <Link to='/journals'><span className='navbar-brand' >Journal</span></Link>
                <Link to='/'><span className='navbar-brand' onClick={handleLogout}>Log out</span></Link>
                {/* <Link to= '/auth/spotify/callback'>Spotify button</Link> */}

            </nav>
        </div>
    )
}