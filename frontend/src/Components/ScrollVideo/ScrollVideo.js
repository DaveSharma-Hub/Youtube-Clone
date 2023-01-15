import React, { useEffect, useRef, useState } from 'react';
import { useIntersection } from '../../functionUtils/VideoObserverUtils/useIntersection';
import './scrollvideo.scss';

function ScrollVideo({title,image,index, videoListPlaying, setVideoListPlaying }){
    const videoRef = useRef();
    // let isVisible = useIntersection(videoRef, '-40px');
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Create an IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            // Check if the video is intersecting with the viewport
            if (entry.isIntersecting) {
              setIsVisible(true);
              determineVideoPlayState(true);
            } else {
              setIsVisible(false);
              determineVideoPlayState(false);
            }
          });
        });
    
        observer.observe(videoRef.current);
        return () => observer.disconnect();
      }, []);

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
    // const checkVisibility = () => {
    //     return useIntersection(videoRef, '-40px');
    // }

    function determineVideoPlayState(visibility){
        if(visibility){
            videoRef.current?.play();
            console.log('Played');
        }
        else{
            console.log('Paused');
            videoRef.current?.pause();
        }
    }

    // useEffect(()=>{
    //     isVisible = checkVisibility();
    //     determineVideoPlayState(isVisible);
    // },[videoListPlaying])
    
    
    
    // determineVideoPlayState(isVisible);
    return(
        <div className='scrollVideo'>
        {
            isVisible 
            ? 
                <video controls width="100%" height="650px" ref={videoRef}>
                    <source src="http://localhost:4000/videos"/>
                </video>
            :
            <video controls width="100%" height="100px" ref={videoRef}>
            </video>
        }
        </div>
    )
}

export default ScrollVideo;