import React from "react";
import vid from "../images/videoplayback.mp4";
import apple2 from "../images/apple2.jpg";


const Video = () => {
  const handleVideoClick = () => {
    window.location.href = "https://www.apple.com/in/apple-watch-series-9/";
  };
  return (
    <>
      <div className="video-div">
        <a href="https://www.apple.com/in/apple-watch-series-9/" onClick={handleVideoClick}>
          <video autoPlay loop muted playsInline>
            <source src={vid} type="video/mp4" />
          </video>
        </a>
      </div>
      <div className="overlay-text">
      <div class='vid-text'>
      <img src={apple2} alt="logo2"/>WATCH <br />
      <p className="p0">SERIES 9</p>
      <p className="p2">Double tap. A maginal new way to use Apple Watch.</p>
          </div>
          <div className='vid-links'>
      <a href="https://www.apple.com/in/apple-watch-series-9/" className="vid-btn">Learn more</a>
      <a href="https://www.apple.com/in/shop/buy-watch/apple-watch" className="vid-btn">Buy</a>
    
    </div>
          </div>
    </>
  );
};

export default Video;
