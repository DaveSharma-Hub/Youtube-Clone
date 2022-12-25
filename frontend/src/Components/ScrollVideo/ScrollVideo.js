import React from 'react';
import './scrollvideo.scss';

function ScrollVideo({title,image,video}){
    return(
        <div className='scrollVideo'>
            <img
                src={image}
            />
        </div>
    )
}

export default ScrollVideo;