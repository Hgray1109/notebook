import React from 'react'

export default function TrackCard({track}) {
    // const something = track.artists[0].id
    const {id} = track
    // console.log(track.artists[0].id)
   
    
    return (
        <div>
             <iframe src={`https://open.spotify.com/embed/track/${id}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}
