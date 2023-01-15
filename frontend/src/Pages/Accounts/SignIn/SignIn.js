import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.scss';

function SignIn(){

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const history = useNavigate();

    const handleSignIn = () => {
        //check login
    }

    return (
        <div className='signinPage'>
            <form className="signInMainCard"
                onSubmit={(e)=>{
                    e.preventDefault();
                    handleSignIn();
                }}
            >
                <div className="signInGoogleIcon">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    />
                    <div className='signInText'>
                        <p>Sign In</p>
                    </div>
                    <div className='signInTextPhrase'>
                        <p>to continue to YouTube</p>
                    </div>    
                </div>
                <div className="signInUserName">
                    <input 
                        placeholder='Username'
                        onChange={(e)=>{setUserName(e.target.value)}} 
                        required
                        type="text"
                    />
                </div>
                <div className="signInPassword">
                    <input 
                        placeholder='Password'
                        onChange={(e)=>{setPassword(e.target.value)}} 
                        required
                        type="password"
                    />
                </div>
                <div className="signInButtons">
                    <button className='createAccountButton' onClick={()=>{history('/accounts/signup')}}>Create Account</button>
                    <button className='signInButton' type="submit">Sign In</button>
                </div>
            </form>
            <div className="navigateToYoutube">
                <button onClick={()=>{history('/')}}>
                    &#8592;&nbsp;&nbsp;Navigate to Youtube
                </button>
            </div>

        </div>
    )
}

export default SignIn;