import './collapsedsidebar.scss';
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
import { useNavigate } from 'react-router-dom';

function CollapsedSidebar(){
    const history = useNavigate();
    return(
        <ul className="firstItemsC">
                <li className="itemC">
                    <div className="iconC">
                        <AiFillHome />
                    </div>
                    <div className="textC">
                        Home
                    </div>
                </li>
                <li className="itemC">
                    <div className="iconC">
                        <GiUnderwearShorts />
                    </div>
                    <div className="textC" onClick={()=>{history('/shorts')}}>
                        Shorts
                    </div>
                </li>
                <li className="itemC">
                    <div className="iconC">
                        <MdOutlineSubscriptions />
                    </div>
                    <div className="textC">
                        Subscriptions
                    </div>
                </li>
                 <li className="itemC">
                    <div className="iconC">
                        <MdOutlineVideoLibrary />
                    </div>
                    <div className="textC">
                        Library
                    </div>
                </li>
                 <li className="itemC">
                    <div className="iconC">
                        <GrHistory />
                    </div>
                    <div className="textC">
                        History
                    </div>
                </li>
           </ul>
    )
}

export default CollapsedSidebar;