import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/collegevideo.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const ClosePlayer = (e)=> {
        if(e.target === player.current){
          setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState ?'': 'hide'}`} ref={player} onClick={ClosePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
//npm run build (command for production)
//coupon code on hostinger  "GREATSTACK"
//3hrs and above on how to host on hostinger
