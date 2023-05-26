import './sidebar.scss';
import {AiFillHome,AiOutlineBulb} from 'react-icons/ai';
import {GiUnderwearShorts,GiHanger} from 'react-icons/gi';
import {MdOutlineSubscriptions,MdOutlineVideoLibrary} from 'react-icons/md';
import {GrHistory} from 'react-icons/gr';
import {RiAccountCircleLine} from 'react-icons/ri';
import {HiFire} from 'react-icons/hi';
import {MdMusicNote,MdOutlineLocalMovies} from 'react-icons/md';
import {FiRadio} from 'react-icons/fi';
import {SiYoutubegaming} from 'react-icons/si';
import {BsNewspaper} from 'react-icons/bs';
import {SlTrophy} from 'react-icons/sl';
import CollapsedSidebar from './CollapsedSidebar';
import { useNavigate } from 'react-router-dom';

function Sidebar({collapsed}){
    const history = useNavigate();
    return(
        <div class={collapsed ? "collapsed" : "sidebar"}>
        {
          collapsed ?
            <div>
                <CollapsedSidebar />
            </div>
            :
           <ul className="firstItems">
                <li className="item" onClick={()=>{history('/')}}>
                    <div className="icon">
                        <AiFillHome />
                    </div>
                    <div className="text">
                        Home
                    </div>
                </li>
                <li className="item" onClick={()=>{history('/shorts')}}>
                    <div className="icon">
                        <GiUnderwearShorts />
                    </div>
                    <div className="text">
                        Shorts
                    </div>
                </li>
                <li className="item">
                    <div className="icon">
                        <MdOutlineSubscriptions />
                    </div>
                    <div className="text">
                        Subscriptions
                    </div>
                </li>
            <hr />
                 <li className="item">
                    <div className="icon">
                        <MdOutlineVideoLibrary />
                    </div>
                    <div className="text">
                        Library
                    </div>
                </li>
                 <li className="item">
                    <div className="icon">
                        <GrHistory />
                    </div>
                    <div className="text">
                        History
                    </div>
                </li>
                <hr />
                 <li>
                    <div className="text">
                        Sign in to like videos, comment, and subscribe.
                    </div>
                    <div className="signin">
                        <button>
                            <div className="icon">
                                <RiAccountCircleLine size={25} className="ri-account-cirlce" />
                            </div>
                            <div className="text">
                                <p>Sign in</p>
                            </div>
                        </button>
                    </div>
                </li>
            <hr />
            <div className="exploreText">
                Explore
            </div>
            <li className="item">
                    <div className="icon">
                        <HiFire />
                    </div>
                    <div className="text">
                        Trending
                    </div>
            </li>
            <li className="item">
                    <div className="icon">
                        <MdMusicNote />
                    </div>
                    <div className="text">
                        Music
                    </div>
            </li>
            <li className="item">
                    <div className="icon">
                        <MdOutlineLocalMovies />
                    </div>
                    <div className="text">
                        Movies & Shows
                    </div>
            </li>
            <li className="item">
                    <div className="icon">
                        <FiRadio />
                    </div>
                    <div className="text">
                        Live
                    </div>
            </li>
            <li className="item">
                    <div className="icon">
                        <SiYoutubegaming />
                    </div>
                    <div className="text">
                        Gaming
                    </div>
            </li>
            <li className="item">
                    <div className="icon">
                        <BsNewspaper />
                    </div>
                    <div className="text">
                        News
                    </div>
            </li>
            <li className="item">
                    <div className="icon">
                        <SlTrophy />
                    </div>
                    <div className="text">
                        Sports
                    </div>
            </li>
            <li className="item">
                    <div className="icon">
                        <AiOutlineBulb />
                    </div>
                    <div className="text">
                        Learning
                    </div>
            </li>
            <li className="item">
                    <div className="icon">
                        <GiHanger />
                    </div>
                    <div className="text">
                        Fashion & Beauty
                    </div>
            </li>
           </ul>
        }
        </div>
    )
}

export default Sidebar;