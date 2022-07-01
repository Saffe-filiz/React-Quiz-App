import { useState } from 'react'
import { singUp } from '../authentication.js';

function SingUp () {
	const [email, setEmail] = useState('')
	const [passworld, setPassworld] = useState('')

    const newUser = (e) => {
    	e.preventDefault();
    	singUp(email, passworld);
    	setEmail('')
    	setPassworld('')
    }

	return (
		<div className="container">
			<div className="inputContainer">
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
					        <input type="password" id="password" value={passworld} onChange={e => setPassworld(e.target.value)}/>
					    </div>
				    </div>
				    <button type="submit">Send</button>
			    </form>
			</div>
		</div>
	)
}

export default SingUp