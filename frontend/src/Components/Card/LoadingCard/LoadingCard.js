import { useState } from 'react';
import './loadingcard.scss';
import { Skeleton } from '@mui/material';

function LoadingCard(){
    return(
        <div 
            className="loadingCard" 
        >
            <div className="image">
                <Skeleton variant="rounded" width={210} height={60} />
            </div>
            <div className='info'>
                <div className='title-avatar'>
                    <div className='avatar'>
                        <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <div className='title'>
                        <Skeleton variant="rounded" width={210} height={60} />
                    </div>
                </div>
                <div className='channel'>
                    <div className='left'>

                    </div>
                    <div className='right'>
                         <Skeleton variant="rounded" width={210} height={60} />
                    </div>
                </div>
                <div className='view-date'>
                    <div className='left'>

                    </div>
                    <div className='view'>
                        <Skeleton variant="rounded" width={210} height={60} />
                    </div>
                    <div className='date'>
                        <Skeleton variant="rounded" width={210} height={60} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingCard;