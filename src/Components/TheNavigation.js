import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import Logo from '../Assets/Images/Logo.jpg'

function Navigation () {
	const user = useSelector((state) => state.user)
	return (
		<div className="navigation">
		    <div className="navigationContent">
		    	<div>
		    		<img src={Logo} draggable="false"/>
		    	</div>
		    	<div>
		    		{user ? <Link className="loginButton" to="/login">Login</Link>: <div></div>}
		    	</div>
		    </div>
		</div>
	)
}

export default Navigation