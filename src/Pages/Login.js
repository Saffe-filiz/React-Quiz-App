import { useState } from 'react'
import { Link } from "react-router-dom";
import { singUp } from '../authentication.js';

function SingUp () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

    const newUser = (e) => {
    	e.preventDefault();
    	if(email == '' && password == '') return;
    	singUp(email, password);
    	setEmail('')
    	setPassword('')
    }

	return (
		<div className="container">
			<div className="inputContainer">
			<header>
				Welcome back!<br/> Please login/Signup to your account.
			</header>
				<form onSubmit={newUser}>
				<label htmlFor="email">
				    <div className="inputContent">
				        <span></span>
					    <div className="inputBox">
					    	<label>Email Address</label>
					        <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
					    </div>
				    </div>
				</label>
				    <br/>
				<label htmlFor="password">    
				    <div className="inputContent">
				        <span></span>
					    <div className="inputBox">
					   	    <label>Password</label>
					        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
					    </div>
				    </div>
				</label>    
			        <div className="singInContent">
			    	    <div className="remanberMeContent">Remember Me</div>
			    	    <Link className="forgotPassword" to="/forgotpassword">forgot Password?</Link>
			        </div>
			        <div className="loginAndSingUpContent">
			    	    <button>Login</button>
			    	    <button type="submit">Signup</button>
			        </div>
			    </form>
			   <div className="loginWithsocialMedia">
			        <p>Or login with</p>
			        <p>Facebook</p>
			        <p>Google</p>
			   </div> 
			</div>
		</div>
	)
}

export default SingUp