import React, {useEffect, useState} from "react";
import { Routes, Route } from 'react-router-dom'
import MusicPlayer from "./each-page/MusicPlayer";
import Videos from "./each-page/Videos";
import Journal from "./each-page/Journal"; 
import NotePage from "./each-page/cards-folder/NotePage";
import AddJournalPage from "./each-page/AddJournalPage";
import HomePage from "./each-page/HomePage";

export default function Body({ user }){
    const [journals, setJournals] = useState([])
    const [passvideo, setPassVideo] = useState([])
    const [videos, setVideos] = useState([])

    useEffect(()=>{
       refreshJournals()
       fetchVideos()
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

    function handleVideoDelete (id) {
        fetch(`/videos/${id}`, {
            method: 'DELETE'

        }).then (fetchVideos)

    }
       
    function fetchVideos () {
        fetch("/videos")
        .then(resp => resp.json())
        .then(vids=> setVideos(vids))
    }
    
    

      
    return(
        <div>
            <Routes>
                <Route exact path="/music-player" element={<MusicPlayer/>}/>
                <Route exact path='/videos' element={<Videos user={user} videos={videos} handleVideoDelete={handleVideoDelete} fetchVideos={fetchVideos} />}/>
                <Route exact path='/journals' element={<Journal onJournalCardDelete={onJournalCardDelete} journals={journals}/>}/>
                <Route exact path="/journals/:id" element={<NotePage journals={journals} noterefresh={refreshJournals}/>}/>
                <Route exact path='/journals/addJournal' element={<AddJournalPage user={user} refresh={refreshJournals}/>}/>
                <Route exact path='/home' element={<HomePage/>}/>
            </Routes>
        </div>
    )
}

