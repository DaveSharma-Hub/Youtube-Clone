import './header.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {RiAccountCircleLine} from 'react-icons/ri';
import {BsSearch} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

function Header({collapsed,setCollapsed,color="white"}){

    const history = useNavigate();
    return(
        <div className="header" style={{backgroundColor:color}}>
            <div className='hamburger' onClick={()=>{setCollapsed(!collapsed)}}>
                <GiHamburgerMenu size={25} className='hamburger-gi'/>
            </div>
            <div className="logo"
                onClick={()=>{history('/')}}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    alt=""
                />
            </div>
            <div className="search">
                <form>
                    <input className={color==="white"? "lightMode" : "darkMode"} placeholder="Search"/>
                    <button className={color==="white"? "lightModeButton" : "darkModeButton"}>
                        <div>
                            <BsSearch size={20}/>
                        </div>
                    </button>
                </form>
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
        </div>
    )
}

export default Header;