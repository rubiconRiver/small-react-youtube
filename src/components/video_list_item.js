import React from "react";

//instead of (props), const video = props.video, this line will do the same
const VideoListItem = ({ video }) => {
  console.log(video.snippet);
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;
  console.log("[imageUrl]: " + imageUrl);
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          {videoTitle}
          <div className="media-heading" />
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
