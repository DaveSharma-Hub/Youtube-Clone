import { Container } from '@mui/material';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Controls from './Controls/Controls';

function VideoPlayer({videoSrc}){
    const videoPlayerRef = useRef(null);
    const controlRef = useRef(null);
    let count = 0;

    const [videoState, setVideoState] = useState({
        playing: true,
        muted: false,
        volume: 0.5,
        playbackRate: 1.0,
        played: 0,
        seeking: false,
        buffer: true,
      });
    const { playing, muted, volume, playbackRate, played, seeking, buffer } =
      videoState;
      const currentTime = videoPlayerRef.current
      ? videoPlayerRef.current.getCurrentTime()
      : "00:00";
    const duration = videoPlayerRef.current
      ? videoPlayerRef.current.getDuration()
      : "00:00";
    const formatTime = (time) => {
    //formarting duration of video
    if (isNaN(time)) {
        return "00:00";
    }

    const date = new Date(time * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    if (hours) {
        //if video have hours
        return `${hours}:${minutes.toString().padStart(2, "0")} `;
    } else return `${minutes}:${seconds}`;
    };
  
    const formatCurrentTime = formatTime(currentTime);
    const formatDuration = formatTime(duration);
  
    const playPauseHandler = () => {
      //plays and pause the video (toggling)
      setVideoState({ ...videoState, playing: !videoState.playing });
    };
  
    const rewindHandler = () => {
      //Rewinds the video player reducing 5
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
    };
  
    const handleFastFoward = () => {
      //FastFowards the video player by adding 10
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
    };
  
    //console.log("========", (controlRef.current.style.visibility = "false"));
    const progressHandler = (state) => {
      if (count > 3) {
        console.log("close");
        controlRef.current.style.visibility = "hidden"; // toggling player control container
      } else if (controlRef.current.style.visibility === "visible") {
        count += 1;
      }
  
      if (!seeking) {
        setVideoState({ ...videoState, ...state });
      }
    };
  
    const seekHandler = (e, value) => {
      setVideoState({ ...videoState, played: parseFloat(value / 100) });
      videoPlayerRef.current.seekTo(parseFloat(value / 100));
    };
  
    const seekMouseUpHandler = (e, value) => {
      console.log(value);
  
      setVideoState({ ...videoState, seeking: false });
      videoPlayerRef.current.seekTo(value / 100);
    };
  
    const volumeChangeHandler = (e, value) => {
      const newVolume = parseFloat(value) / 100;
  
      setVideoState({
        ...videoState,
        volume: newVolume,
        muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
      });
    };
  
    const volumeSeekUpHandler = (e, value) => {
      const newVolume = parseFloat(value) / 100;
  
      setVideoState({
        ...videoState,
        volume: newVolume,
        muted: newVolume === 0 ? true : false,
      });
    };
  
    const muteHandler = () => {
      //Mutes the video player
      setVideoState({ ...videoState, muted: !videoState.muted });
    };
  
    const onSeekMouseDownHandler = (e) => {
      setVideoState({ ...videoState, seeking: true });
    };
  
    const mouseMoveHandler = () => {
      controlRef.current.style.visibility = "visible";
      count = 0;
    };
  
    const bufferStartHandler = () => {
      console.log("Bufering.......");
      setVideoState({ ...videoState, buffer: true });
    };
  
    const bufferEndHandler = () => {
      console.log("buffering stoped ,,,,,,play");
      setVideoState({ ...videoState, buffer: false });
    };
    return (
        <Container style={{height:'100%'}} justify="center">

            <ReactPlayer 
                ref={videoPlayerRef}
                className="videoPlayerFrame"
                url={videoSrc}
                width="100%"
                height="100%"
                playing={playing}
                volume={volume}
                muted={muted}
                onProgress={progressHandler}
                onBuffer={bufferStartHandler}
                onBufferEnd={bufferEndHandler}
            />
            {buffer && <p>Loading</p>}

            <Controls
                controlRef={controlRef}
                onPlayPause={playPauseHandler}
                playing={playing}
                onRewind={rewindHandler}
                onForward={handleFastFoward}
                played={played}
                onSeek={seekHandler}
                onSeekMouseUp={seekMouseUpHandler}
                volume={volume}
                onVolumeChangeHandler={volumeChangeHandler}
                onVolumeSeekUp={volumeSeekUpHandler}
                mute={muted}
                onMute={muteHandler}
                playRate={playbackRate}
                duration={formatDuration}
                currentTime={formatCurrentTime}
                onMouseSeekDown={onSeekMouseDownHandler}
            />
        </Container>
    )
}


export default VideoPlayer;