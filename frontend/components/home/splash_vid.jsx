import React from 'react';

const SplashVid = () => (
  <div className="bg-video">
    <video
      autoPlay="autoplay"
      loop="loop"
      poster="https://d1235ca2z646oc.cloudfront.net/thumbnails/255/MadeInLadakh-HD_3.mp4-poster.png"
    >
      <source
        className="webm"
        type="video/webm"
        src="https://d1235ca2z646oc.cloudfront.net/videos/processed/255/MadeInLadakh-HD_3.mp4.webm"
      />
      <source
        className="mp4"
        type="video/mp4"
        src="https://d1235ca2z646oc.cloudfront.net/videos/processed/255/MadeInLadakh-HD_3.mp4.mp4"
      />
    </video>
  </div>
);

export default SplashVid;
