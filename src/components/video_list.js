import React from 'react';
import VideoListItem from './video_list_item';

//In a class based component we reference
//props using this.props rather than just props
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group" >
      {videoItems}
    </ul>
  );
};

export default VideoList;
