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
				Welcome  back!<br/> Please login/Signup to your account.
			</header>
				<form onSubmit={newUser}>
				    <div className="inputContent">
				        <span></span>
					    <div className="inputBox">
					    	<label htmlFor="email">Email Address</label>
					        <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
					    </div>
				    </div>
				    <br/>
				    <div className="inputContent">
				        <span></span>
					    <div className="inputBox">
					   	    <label htmlFor="password">Password</label>
					        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
					    </div>
				    </div>
				    <button type="submit">Send</button>
			    </form>
			    <div className="singInContent">
			    	<div className="remanberMeContent">Remember Me</div>
			    	<Link className="forgotPassword" to="/forgotpassword">forgot Password?</Link>
			    </div>
			    <div className="loginAndSingUpContent">
			    	<button>Login</button>
			    	<button>Signup</button>
			    </div>
			</div>
		</div>
	)
}

export default SingUp