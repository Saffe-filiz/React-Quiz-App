import FormInput from '../Components/FormInput.js';
import Group from '../Assets/Images/Group.jpg'
import { useState } from 'react';

function ForgotPassword () {
	const [email, setEmail] = useState('');

	const sendPasswordEmail = () => {
		console.log('test')
	};

	return (
		<div className="container">
		    <div className="loginContainer" style={{backgroundImage: `url(${Group})`}}>
			<div className="inputContainer">
			    <header>
				    Welcome back!<br/> Please login/Signup to your account.
			    </header>
				<form onSubmit={sendPasswordEmail}>
				    <FormInput 
				    title={'Email Address'} 
				    type={'email'} value={email} 
				    setValue={setEmail} 
				    placeholder={'sample@mail.com'}/>
			        <div className="loginAndSingUpContent">
			    	    <button type="submit">Send Mail</button>
			        </div>
			    </form>
			</div>
		    </div>
		</div>
	)
}

export default ForgotPassword