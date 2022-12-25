import './player.scss';
import {FaExpandArrowsAlt,FaPlay} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {AiOutlineCloseCircle,AiOutlineClose,AiOutlineExpand} from 'react-icons/ai';
import {GiPauseButton} from 'react-icons/gi';
import { useRef, useState } from 'react';
import video from './video.mp4';

function Player({img,title,setClicked}){
    const history = useNavigate();
    const [hovered,setHovered] = useState(false);
    const videoRef = useRef();
    const [paused ,setPaused] = useState(false);
    return(
        <div 
            className='player' 
            onMouseEnter={()=>{
                setHovered(true)
            }}
            onMouseLeave={()=>{
                setHovered(false)
            }}
        >
            <div className="closePlayer">
                {
                    hovered ? 
                    <button onClick={()=>{setClicked(false)}}>
                        {/* <AiOutlineCloseCircle size={30} /> */}
                        <AiOutlineClose size={25}/>
                    </button>
                    : null
                }
            </div>
            <div className="expandPlayer">
                {
                    hovered ? 
                    <button onClick={()=>{history(`/watch?time=${Math.trunc(videoRef?.current?.currentTime)}`)}}>
                        {/* <FaExpandArrowsAlt size={24}/> */}
                        <AiOutlineExpand size={24}/>
                    </button>
                    : null
                }
            </div>
            {/* <img 
                src={img}
                width="100%"
                height="fit-content"
            /> */}
            <video width="100%" height="" autoplay="true" ref={videoRef}>
                    <source src={video} type="video/mp4" />
            </video>
            {console.log(videoRef)}
            <div className='playerPlayButton'>
                {
                    hovered ? 
                        paused ?
                        <button onClick={()=>{
                            setPaused(!paused);
                            videoRef.current.play()
                        }}>
                            <FaPlay size={30}/>
                        </button>
                        :
                        <button
                        onClick={()=>{
                            setPaused(!paused);
                            videoRef.current.pause()
                        }}
                        >
                            <GiPauseButton size={30}/>
                        </button>
                    :null
                } 
            </div>
            <hr />
            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Player;