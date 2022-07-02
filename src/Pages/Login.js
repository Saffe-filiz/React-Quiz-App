import { useState } from 'react'
import { Link } from "react-router-dom";
import { singUp, singInWidthGoogle, singInWidthFacebook } from '../authentication.js';
import FormInput from '../Components/FormInput.js';

function SingUp () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

    const newUser = (e) => {
    	e.preventDefault();
    	if(email == '' && password == '') return;
    	singUp(email, password);
    	setEmail('')
    	setPassword('')
    }

    const newUserWithSocialMedia = ( value ) => value ? singInWidthGoogle(): singInWidthFacebook() 

	return (
		<div className="container">
			<div className="inputContainer">
			<header>
				Welcome back!<br/> Please login/Signup to your account.
			</header>
				<form onSubmit={newUser}>
				    <FormInput  title={'Email Address'} type={'email'} value={email} setValue={setEmail}/>
				    <FormInput  title={'Password'} type={'password'} value={password} setValue={setPassword}/>
			        <div className="singInContent">
			    	    <div className="remanberMeContent">
			    	    	<label>Remember Me</label>
			    	    	<input type="checkbox" id="remember" value={rememberMe} onChange={e => setRememberMe(e.target.checked)}/>
			    	    </div>
			    	    <Link className="forgotPassword" to="/forgotpassword">forgot Password?</Link>
			        </div>
			        <div className="loginAndSingUpContent">
			    	    <button>Login</button>
			    	    <button type="submit">Signup</button>
			        </div>
			    </form>
			   <div className="loginWithsocialMedia">
			        <p>Or login with</p>
			        <p onClick={() => newUserWithSocialMedia(false)}>Facebook</p>
			        <p onClick={() => newUserWithSocialMedia(true)}>Google</p>
			   </div> 
			</div>
		</div>
	)
}

export default SingUp