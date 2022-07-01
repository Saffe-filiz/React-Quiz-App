import { useState } from 'react'
import { singUp } from '../authentication.js';

function SingUp () {
	const [email, setEmail] = useState()
	const [passworld, setPassworld] = useState()

    const newUser = (e) => {
    	e.preventDefault();
    	singUp(email, passworld);
    }

	return (
		<div>
			<form onSubmit={newUser}>
				<span>
					<label htmlFor="email"></label>
					<input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
				</span>
				<span>
					<label htmlFor="password"></label>
					<input type="password" id="password" value={passworld} onChange={e => setPassworld(e.target.value)}/>
				</span>
			</form>
		</div>
	)
}

export default SingUp