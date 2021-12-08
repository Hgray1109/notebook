import { useEffect, useState } from "react"
import VideoCard from "./cards-folder/VideoCard"



 export default function Videos({user, videos, handleVideoDelete, fetchVideos}){
  
    const [url, setUrl] = useState([])

    
    useEffect(() => {
        fetchVideos()
    },[])
     console.log(videos) 
  

     function handleVideoPost(e) {
        e.preventDefault()
        fetch("/videos", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({url, user_id:user.id})
        } )
        .then(resp => resp.json())
        .then(data=> {
            console.log(data)
            fetchVideos()
        })
     }

     
     const eachVideo = videos ? videos.map(vid=>(<VideoCard handleVideoDelete={handleVideoDelete} key={vid.id} video = {vid} user={user}/>)) : null

    return (
        <div>
            <form onSubmit={handleVideoPost}>
                <label>Store Your Own Videos</label>
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}></input>
                <button type="submit">Submit Video!</button>
            </form> 

        {videos ? eachVideo : null}
        </div>
    )
}