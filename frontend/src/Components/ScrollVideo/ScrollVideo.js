import React, { useEffect, useRef } from 'react';
import { useIntersection } from '../../functionUtils/VideoObserverUtils/useIntersection';
import './scrollvideo.scss';

function ScrollVideo({title,image,index}){
    const videoRef = useRef();
    const isVisible = useIntersection(videoRef, '-40px');

    // useEffect(()=>{
    //     console.log(isVisible);
    //     if(isVisible){
    //         console.log(`Play ${index}`)
    //         // ref.current.play();
    //     }else{
    //         console.log(`Pause ${index}`)
    //         // ref.current.pause();
    //     }
    // },[])

    if(isVisible){
        videoRef.current?.play();
        console.log('Played');
    }
    else{
        console.log('Paused');
        videoRef.current?.pause();
    }
    return(
        <div className='scrollVideo'>
        {
            isVisible 
            ? 
                <video controls width="100%" height="650px" ref={videoRef}>
                    <source src="http://localhost:4000/videos"/>
                </video>
            :
            <video controls width="100%" height="650px" ref={videoRef}>
            </video>
        }
        </div>
    )
}

export default ScrollVideo;