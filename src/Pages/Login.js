import FormInput from '../Components/FormInput.js';
import Check from '../Assets/Icons/Check.svg'
import Group from '../Assets/Images/Group.jpg'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { singUpWithEmailAndPassword, loginWidthGoogleAccount, loginnWidthFacebookAccount, loginWithEmailAndPassword } from '../Authentication.js';

function SingUp () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [saveUser, setSaveUser] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		let userSave = localStorage.getItem("saveUser");
		if(!userSave) return;
		setEmail(localStorage.getItem("email"))
		setPassword(localStorage.getItem("password"))
		//setSaveUser(userSave)
		
	}, []);

    const newUserWithEmailAndPassword = (e) => {
    	e.preventDefault();
    	saveUserToLcalStroage();
    	singUpWithEmailAndPassword(email, password);
    	setEmail('')
    	setPassword('')
    	navigate("/", { replace: true });
    }

    const login = () => {
    	saveUserToLcalStroage()
    	loginWithEmailAndPassword(email, password)
    	navigate("/", { replace: true });
    }

    const saveUserToLcalStroage = () => {
    	if(!saveUser) return;
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)	
        localStorage.setItem('saveUser', saveUser)	
    }

    const signupOrLoginWithSocialMedie = ( value ) => {
    	value ? loginWidthGoogleAccount(): loginnWidthFacebookAccount();
    	navigate("/", { replace: true }); 
    }

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
			    	         className={saveUser ? 'isActive': 'inValid'} 
			    	         style={{backgroundImage: `url(${Check})`}}></span>
			    	    	<label htmlFor="remember">Remember Me</label>
			    	    	<input 
			    	    	type="checkbox" 
			    	    	id="remember" 
			    	    	value={saveUser} 
			    	    	onChange={e => setSaveUser(e.target.checked)}/>
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