import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.scss';

function SignUp(){

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordTwice, setPasswordTwice] = useState(null);
    const history = useNavigate();

    const handleSignIn = () => {
        //check login
    }

    return (
        <div className='signupPage'>
            <form className="signUpMainCard"
                onSubmit={(e)=>{
                    e.preventDefault();
                    handleSignIn();
                }}
            >
                <div className="signUpGoogleIcon">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    />
                    <div className='signUpText'>
                        <p>Sign Up</p>
                    </div>
                    <div className='signUpTextPhrase'>
                        <p>to continue to YouTube</p>
                    </div>    
                </div>
                <div className="signUpUserName">
                    <input 
                        placeholder='Username'
                        onChange={(e)=>{setUserName(e.target.value)}} 
                        required
                        type="text"
                    />
                </div>
                <div className="signUpPassword">
                    <input 
                        placeholder='Password'
                        onChange={(e)=>{setPassword(e.target.value)}} 
                        required
                        type="password"
                    />
                </div>
                <div className="signUpPassword">
                    <input 
                        placeholder='Retype Password'
                        onChange={(e)=>{setPasswordTwice(e.target.value)}} 
                        required
                        type="password"
                    />
                </div>
                <div className="signUpButtons">
                    <button className='signInButtonLink' onClick={()=>{history('/accounts/signin')}}>Already Have an account?</button>
                    <button className='signUpButton' type="submit">Create Account</button>
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

export default SignUp;