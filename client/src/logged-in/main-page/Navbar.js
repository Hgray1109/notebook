import React from "react";
import { Link} from 'react-router-dom'


export default function Navbar({ handleLogout }){


    return(
        <div className='navbar'>
            <h1>this is the Navbar</h1> 
            <nav>
                <Link to='/favorite-album'><span className='menu-item' >Favorite Album</span></Link>
                <Link to='/favorite-songs'><span className='menu-item' >Favorite Song!</span></Link>
                <Link to='/videos'><span className='menu-item' >Videos</span></Link>
                <Link to='/journal'><span className='menu-item' >Journal</span></Link>
                <Link to='/'><span className='menu-item' onClick={handleLogout}>Log out</span></Link>
            </nav>
        </div>
    )
}