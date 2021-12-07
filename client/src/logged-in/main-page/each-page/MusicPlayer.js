import React, {useState} from "react";
import TrackCard from "./cards-folder/TrackCard"


export default function MusicPlayer(){
        const [artist, setArtist] = useState([])
        const [tracks, setTracks] = useState([])

    function fetchArtistData(e){
        e.preventDefault()
        fetch(`/search/${artist}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setTracks(data)
            setArtist("")        
        })
    }

    const eachTrack = tracks ? tracks.map(track => (
        <TrackCard
        key ={track.id}
        track = {track}
        />
    )) : null
    
    return(
        <div>
            <form onSubmit={fetchArtistData}>
                <label>search for the Artist</label>
                <input type='text' value={artist} onChange={(e) => setArtist(e.target.value)}></input>
                <button type='submit'> submit!</button>
            </form> 
            {eachTrack}
        </div>
    )
}