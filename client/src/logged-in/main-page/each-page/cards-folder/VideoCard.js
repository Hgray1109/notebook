import React from "react";
import PropTypes from "prop-types";



export default function VideoCard ({video, user, handleVideoDelete}) {
    console.log(video)
    const embed = video.url

    return(

  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embed}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    ></iframe>
    <button onClick={() => handleVideoDelete(video.id)}>Delete</button>
    </div>

);
    }

VideoCard.propTypes = {
  embedId: PropTypes.string.isRequired
};




// * <iframe width="853" height="480" src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */