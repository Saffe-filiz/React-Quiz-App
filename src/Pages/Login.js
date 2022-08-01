import FormInput from '../Components/FormInput.js';
import Check from '../Assets/Icons/Check.svg'
import Group from '../Assets/Images/Group.jpg'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { setUser } from '../Stores/userStore.js';
import { useDispatch } from 'react-redux'
import { singUpWithEmailAndPassword, loginWidthGoogleAccount, loginnWidthFacebookAccount, loginWithEmailAndPassword, currentUser } from '../firebase.js';



function SingUp () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [saveUser, setSaveUser] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		try{
			let {userEmail , userPassword} = JSON.parse(localStorage.getItem("userLoginInfo"));
			setEmail(userEmail);
		    setPassword(userPassword);
		}catch(error){
			console.log(error)
		}
	}, []);

	const takeUserData = async () => {
		let user = await currentUser();
		console.log(user.uid)
        dispatch(setUser(user));
        navigate("/", { replace: true });
	}

    const newUserWithEmailAndPassword = async (e) => {
    	e.preventDefault();
    	try{
    	    const user = await singUpWithEmailAndPassword(email, password);
    	    saveUserToLcalStroage();
    	    takeUserData()
    	}catch(error){
    		console.log(error)
    	}
        setEmail('')
    	setPassword('')
    }

    const login = async () => {
    	try {
    		const user = await loginWithEmailAndPassword(email, password);
    		saveUserToLcalStroage();
    		takeUserData()
        }catch(error) {
        	console.log(error)
        }	
    }

    const signupOrLoginWithSocialMedie = async ( value ) => {
    	try {
    	    value ? await loginWidthGoogleAccount(): await loginnWidthFacebookAccount();
    	    takeUserData()
        }catch(error){
        	console.log(error)
        }
    }

    const saveUserToLcalStroage = () => {
    	if(!saveUser) return;
    	let user = {
    		userEmail: email,
    		userPassword: password,
    	}
    	localStorage.setItem('userLoginInfo', JSON.stringify(user))
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
				    focus={true}
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
			    	    <button onClick={() => login()}>Login</button>
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