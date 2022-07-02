import { useState } from 'react'
import { Link } from "react-router-dom";
import { singUpWithEmailAndPassword, loginWidthGoogleAccount, loginnWidthFacebookAccount, loginWithEmailAndPassword } from '../Authentication.js';
import FormInput from '../Components/FormInput.js';
import Check from '../Assets/Icons/Check.svg'
import Group from '../Assets/Images/Group.jpg'

function SingUp () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(true);

    const newUserWithEmailAndPassword = (e) => {
    	e.preventDefault();
    	singUpWithEmailAndPassword(email, password);
    	setEmail('')
    	setPassword('')
    }

    const login = () => {

    	loginWithEmailAndPassword(email, password)
    }

    const signupOrLoginWithSocialMedie = ( value ) => value ? loginWidthGoogleAccount(): loginnWidthFacebookAccount() 

	return (
		<div className="container">
		<div className="loginContainer" style={{backgroundImage: `url(${Group})`}}>
			<div className="inputContainer">
			<header>
				Welcome back!<br/> Please login/Signup to your account.
			</header>
				<form onSubmit={newUserWithEmailAndPassword}>
				    <FormInput 
				    title={'Email Address'} 
				    type={'email'} value={email} 
				    setValue={setEmail} 
				    placeholder={'sample@mail.com'}/>
				    <FormInput 
				    title={'Password'} 
				    type={'password'} 
				    value={password} 
				    setValue={setPassword} 
				    placeholder={'********'}/>
			        <div className="singInContent">
			    	    <div className="remanberMeContent">
			    	         <span 
			    	         className={rememberMe ? 'isActive': 'inValid'} 
			    	         style={{backgroundImage: `url(${Check})`}}></span>
			    	    	<label htmlFor="remember">Remember Me</label>
			    	    	<input 
			    	    	type="checkbox" 
			    	    	id="remember" 
			    	    	value={rememberMe} 
			    	    	onChange={e => setRememberMe(e.target.checked)}/>
			    	    </div>
			    	    <Link className="forgotPassword" to="/forgotpassword">Forgot Password?</Link>
			        </div>
			        <div className="loginAndSingUpContent">
			    	    <button>Login</button>
			    	    <button type="submit" disabled={!email || !password}>Signup</button>
			        </div>
			    </form>
			   <div className="loginWithsocialMedia">
			        <p>Or login with</p>
			        <p onClick={() => signupOrLoginWithSocialMedie(false)}>Facebook</p>
			        <p onClick={() => signupOrLoginWithSocialMedie(true)}>Google</p>
			   </div> 
			</div>
		</div>
		</div>
	)
}

export default SingUp