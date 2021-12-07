import React from "react";
import { Link} from 'react-router-dom'


export default function Navbar({ handleLogout }){


    return(
        <div className='navbar'>
            <h1>this is the Navbar</h1> 
            <nav>
                <Link to='/music-player'><span className='menu-item' >Music-Player</span></Link>
                <Link to='/videos'><span className='menu-item' >Videos</span></Link>
                <Link to='/journals'><span className='menu-item' >Journal</span></Link>
                <Link to='/'><span className='menu-item' onClick={handleLogout}>Log out</span></Link>
                {/* <Link to= '/auth/spotify/callback'>Spotify button</Link> */}

            </nav>
        </div>
    )
}