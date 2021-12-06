import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"



 export default function Videos({currentUser}){
    const [videos, setVideos] = useState([])
    
    
    useEffect(() => {
        fetch("/videos")
        .then(resp => resp.json())
        .then(vids=> setVideos(vids))
    },[])
     console.log(videos)
    return (
        <>
        {videos.map(vid=>(<VideoCard key={vid.id} video = {vid} currentUser={currentUser}/>))}
        </>
    )
}