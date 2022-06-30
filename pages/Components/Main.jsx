import React, { useState } from 'react';

const Main = ({mutedVideo}) => {
  // const [mutedVideo, setMutedVideo] = useState(true);
  
  // const handleClick = () => {
  //   setMutedVideo(current => !current);
  // }
  return (
    <>
      
      {/* <button
        onClick={handleClick}
        className={mutedVideo ? 'active' : ''}
      >
        Mute
      </button> */}
  
      <video autoPlay muted={mutedVideo} loop width={'100%'} height={'100%'}>
        <source src="./mainVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Main;
