import FormInput from '../Components/FormInput.js';
import Group from '../Assets/Images/Group.jpg'
import { useState } from 'react';
import { sendPasswordResetMail } from '../Authentication.js';

function ForgotPassword () {
	const [email, setEmail] = useState('');

	const sendResetPsswordEmail = (e) => {
		e.preventDefault()
		try{
			sendPasswordResetMail(email)
		}catch(error){
			console.log(error)
		}
	};

	return (
		<div className="container">
		    <div className="loginContainer" style={{backgroundImage: `url(${Group})`}}>
			<div className="inputContainer">
			    <header>
				   Please enter your email address.
			    </header>
				<form onSubmit={sendResetPsswordEmail}>
				    <FormInput 
				    focus={true}
				    title={'Email Address'} 
				    type={'email'} value={email} 
				    setValue={setEmail} 
				    placeholder={'sample@mail.com'}/>
			        <div className="loginAndSingUpContent">
			    	    <button  type="submit">Send</button>
			        </div>
			    </form>
			</div>
		    </div>
		</div>
	)
}

export default ForgotPassword