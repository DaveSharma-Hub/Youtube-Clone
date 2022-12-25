import { useState } from 'react';
import './card.scss';

function Card({img,title,avatar,views,channel,date,setClicked}){

    const [expandView, setExpandView] = useState(false);

    return(
        <div 
            className="card" 
            onClick={()=>{setClicked(true)}}
        >
            <div className="image">
                <img 
                    src={img}
                />
            </div>
            <div className='info'>
                <div className='title-avatar'>
                    <div className='avatar'>
                        <img
                            src={avatar}
                        />
                    </div>
                    <div className='title'>
                        <p>{title}</p>
                    </div>
                </div>
                <div className='channel'>
                    <div className='left'>

                    </div>
                    <div className='right'>
                        <p>{channel}</p>
                    </div>
                </div>
                <div className='view-date'>
                    <div className='left'>

                    </div>
                    <div className='view'>
                        <p>{views}</p>
                    </div>
                    <div className='date'>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;