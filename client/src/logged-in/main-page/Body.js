import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom'
import MusicPlayer from "./each-page/MusicPlayer";
import Videos from "./each-page/Videos";
import Journal from "./each-page/Journal"; 
import NotePage from "./each-page/cards-folder/NotePage";
import AddJournalPage from "./each-page/AddJournalPage";

export default function Body({ user }){
    const [journals, setJournals] = useState([])
    const [passvideo, setPassVideo] = useState([])

    useEffect(()=>{
       refreshJournals()
    },[])

    function onJournalCardDelete (journalId) {
        console.log(journalId)
        fetch(`/journals/${journalId}`,{
            method: 'DELETE'
              
        }).then (refreshJournals)
        
    }
    function refreshJournals() {
        fetch("/journals")
        .then(resp => resp.json())
        .then(setJournals)
    }

    

      
    return(
        <div>
            <Routes>
                <Route exact path="/music-player" element={<MusicPlayer/>}/>
                <Route exact path='/videos' element={<Videos/>}/>
                <Route exact path='/journals' element={<Journal onJournalCardDelete={onJournalCardDelete} journals={journals}/>}/>
                <Route exact path="/journals/:id" element={<NotePage journals={journals} noterefresh={refreshJournals}/>}/>
                <Route exact path='/journals/addJournal' element={<AddJournalPage user={user} refresh={refreshJournals}/>}/>
            </Routes>
        </div>
    )
}

