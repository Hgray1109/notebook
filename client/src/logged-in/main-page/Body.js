import React, {useEffect, useState} from "react";
import { Routes, Route, Navigate} from 'react-router-dom'
import FavoriteAlbum from './each-page/FavoriteAlbum'
import FavoriteSongs from "./each-page/FavoriteSongs";
import Videos from "./each-page/Videos";
import Journal from "./each-page/Journal";
import JournalCard from "./each-page/cards-folder/JournalCard";
import NotePage from "./each-page/cards-folder/NotePage";
import AddJournalPage from "./each-page/AddJournalPage"

export default function Body({ user }){
    const [journals, setJournals] = useState([])

    useEffect(()=>{
        fetch("/journals")
        .then(resp => resp.json())
        .then(setJournals)
    },[])


    return(
        <div>
            <Routes>
                <Route exact path="/favorite-album" element={<FavoriteAlbum/>}/>
                <Route exact path="/favorite-songs" element={<FavoriteSongs/>}/>
                <Route exact path='/videos' element={<Videos/>}/>
                <Route exact path='/journals' element={<Journal journals={journals}/>}/>
                <Route exact path="/journals/:id" element={<NotePage journals={journals}/>}/>
                <Route exact path='/journals/addJournal' element={<AddJournalPage user={user}/>}/>
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