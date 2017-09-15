import React from 'react'

const VideoDetail = (props) => {
  const video = props.video;

  //Check for NULL attributes
  if(!video){
    return <div>Loading Spinner!!!</div>;
  }
  const idVideo = video.id.videoId;
  const url = 'https://www.youtube.com/embed/' + idVideo;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsice-item" src={url}>
        </iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
