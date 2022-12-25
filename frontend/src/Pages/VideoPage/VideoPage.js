import Header from '../../Components/Header/Header';
import './videopage.scss';
import {BiLike,BiDislike} from 'react-icons/bi';
import {RiShareForwardLine} from 'react-icons/ri';
import video from './video.mp4';
import { useSearchParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import {GiPauseButton} from 'react-icons/gi';
import {FaPlay} from 'react-icons/fa';

function VideoPage({
    img,
    // video,
    title,
    channel,
    avatar,
    likes,
    dislikes,
    subscriber,
    views,
    date,
    description,
    comments,
    suggestion,
    collapsed,
    setCollapsed
    }){
    const [searchParams, setSearchParams] = useSearchParams();
    const time = searchParams.get("time")
    const videoRef = useRef();
    const [paused, setPaused] = useState(false);
    const [storeCurrentTime, setStoreCurrentTime] = useState(time);

    const setCurrentTime = () => {

        if(videoRef.current?.currentTime){
            videoRef.current.currentTime = parseInt(time);
            setPaused(videoRef.current.paused);
            console.log('TEST');
        }
    }

    return(
        <div className="videoPage">
            <Header collapsed={collapsed} setCollapsed={setCollapsed} color="black"/>
            <div className='videoContainer'>
                <div className='videoContainerVideo'>
                {/* <source src={video} type="video/mp4"/> */}
                <video width="90%" height="609vh" controls autoPlay={true} ref={videoRef} onPlay={()=>{setCurrentTime()}}>
                    <source src={video} type="video/mp4" />
                </video>
                <div className='bottomVideoPlayerBar'>
                    {
                        paused ?
                        <button onClick={()=>{
                            setPaused(!paused)
                            videoRef.current.play()
                            videoRef.current.currentTime=storeCurrentTime;
                            }}>
                            <FaPlay size={30}/>
                        </button>
                        :
                        <button onClick={()=>{
                            setPaused(!paused)
                            videoRef.current.pause()
                            setStoreCurrentTime(videoRef.current.currentTime);
                            }}>
                            <GiPauseButton size={30}/>
                        </button>
                    }

                </div>
                {console.log(videoRef)}
                {/* <img
                    src={img}
                /> */}
                </div>
                <div className="belowVideoPage">
                    <div className='leftVideo'>
                        <div className='videoTitle'>
                            {title}
                        </div>
                        <div className='videoMisc'>
                            <div className='videoAvatar'>
                                <img src={avatar} />
                            </div>
                            <div className='channel-subcount'>
                                <div className='channelName'>
                                    {channel}
                                </div>
                                <div className='subcount'>
                                    {subscriber}
                                </div>
                            </div>
                            <div className='subscribeButton'>
                                <button>
                                    Subscribe
                                </button>
                            </div>
                            <div className='filler'>

                            </div>
                            <div className='miscVideo'>
                                <div className='like-dislike'>
                                        <button className='like'>
                                            <BiLike size={20}/>
                                        </button>
                                        <button className='dislike'>
                                            <BiDislike size={20}/>
                                        </button>
                                </div>
                                <div className='filler'>

                                </div>
                                <div className='share'>
                                    <button className='shareButton'>
                                        <RiShareForwardLine size={20} className="btn"/>
                                        <div>
                                            Share
                                        </div>
                                    </button>
                                </div>
                                <div className='save'>

                                </div>
                                <div className='more'>

                                </div>
                            </div>
                        </div>
                        <div className='videoDescription'>

                        </div>
                    </div>
                    <div className='rightVideo'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPage;