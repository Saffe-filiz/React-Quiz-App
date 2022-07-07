import Logo from '../Assets/Images/Logo.jpg';
import UserIcon from '../Assets/Icons/UserIcon.svg';
import DropDown from '../Assets/Icons/DropDown.svg';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect} from 'react';
import { userSingOut } from '../Authentication.js';
import { logOut } from '../Stores/userStore.js';

function Navigation () {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const { user } = useSelector((state) => state.user);

	const [userName, setUserName] = useState('');

	useEffect(() => {
		if(!user) return;
		let [ displayName ] = user.email.split('@')
		setUserName(user.displayName || displayName)
	}, [user])

	const userLogOut = () => {
		userSingOut()
		dispatch(logOut(false))
		navigation('/', {replace: true});
	}

	return (
		<div className="navigation">
		    <div className="navigationContent">
		    	<div>
		    		<img src={Logo} draggable="false"/>
		    	</div>
		    	<div>
		    		{!user ? <Link className="loginButton" to="/login">Login</Link>: 
		    		<div className="userDrapDown" onClick={() => userLogOut()}>
		    			<img src={UserIcon}/>
		    			{userName}
		    		    <img src={DropDown}/>
		    		</div>}
		    	</div>
		    </div>
		</div>
	)
}

export default Navigation