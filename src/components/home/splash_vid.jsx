import React from 'react'

const SplashVid = () => (
  <div className="bg-video">
    <video
      loop="loop"
      autoPlay="autoplay"
      poster="https://s3-us-west-1.amazonaws.com/whenevernote/splash-still.jpg"
    >
      <source
        className="webm"
        type="video/webm"
        src="https://s3-us-west-1.amazonaws.com/whenevernote/splash.webm"
      />
      <source
        className="mp4"
        type="video/mp4"
        src="https://s3-us-west-1.amazonaws.com/whenevernote/splash.mp4"
      />
    </video>
  </div>
)

export default SplashVid
