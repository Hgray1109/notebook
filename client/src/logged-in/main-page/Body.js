import React from "react";
import { Routes, Route, Navigate} from 'react-router-dom'
import FavoriteAlbum from './each-page/FavoriteAlbum'
import FavoriteSongs from "./each-page/FavoriteSongs";
import Videos from "./each-page/Videos";
import Journal from "./each-page/Journal"

export default function Body(){


    return(
        <div>
            <Routes>
                <Route exact path="/favorite-album" element={<FavoriteAlbum/>}/>
                <Route exact path="/favorite-songs" element={<FavoriteSongs/>}/>
                <Route exact path='/videos' element={<Videos/>}/>
                <Route exact path='/journal' element={<Journal/>}/>
            </Routes>
        </div>
    )
}

// <Routes>
//                 <Route exact path="/" element={<Login setCurrentUser={setCurrentUser}/>}/>
//                 <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser} />}/>
//                 <Route exact path="/adminSignup" element={<AdminSignup setCurrentUser={setCurrentUser} />}/>
//                 <Route exact path="/" element={<Navigate to = "/" />}/>
                
//             </Routes>