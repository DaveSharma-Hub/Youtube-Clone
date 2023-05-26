import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Thumbnails from '../../Components/Thumbnails/Thumbnails';
import './main.scss';
import { useState } from 'react';
import Player from '../../Components/Player/Player';

function Main({collapsed,setCollapsed,clicked,setClicked}){

    return(
        <div className="main">
            <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
            <div className="mainContainer">
                <Sidebar collapsed={collapsed}/>
                <Thumbnails setClicked={setClicked} collapsed={collapsed}/>
                {
                    clicked ?
                    <div className="playerCorner">
                        <Player 
                            className="innerPlayer" 
                            img="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"
                            title="Cool Video in 1 hour fun check it out Now!!!!Link in the description"
                            setClicked={setClicked}
                        />
                    </div>
                    : 
                    null
                }
            </div>
        </div>
    )
};

export default Main;