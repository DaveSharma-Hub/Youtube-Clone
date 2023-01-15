import './header.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {RiAccountCircleLine} from 'react-icons/ri';
import {BsSearch} from 'react-icons/bs';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from 'react';

function Header({collapsed,setCollapsed,color="white"}){
    const [searchParams] = useSearchParams();
    const [searchValue,setSearchValue] = useState(searchParams.get('value'));

    const history = useNavigate();

    const handleSearch = () => {
        history(`/search?value=${searchValue}`);
    }

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
                <form
                    onSubmit={(e)=>{
                        e.preventDefault();
                        handleSearch();
                    }}
                >
                    <input 
                        className={color==="white"? "lightMode" : "darkMode"} 
                        placeholder="Search" 
                        onChange={(e)=>{setSearchValue(e.target.value)}}
                        value={
                           searchValue
                        }
                        required/>
                    <button className={color==="white"? "lightModeButton" : "darkModeButton"} type="submit">
                        <div>
                            <BsSearch size={20} className="headerSearchIcon"/>
                        </div>
                    </button>
                </form>
            </div>
            <div className="signin">
                <button onClick={()=>{
                    history('/accounts/signin')
                }}>
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