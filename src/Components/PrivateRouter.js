import { Navigate } from "react-router-dom";

function Private ({ user, children }) {
	console.log(!user, 'Private')
	if(!user){
		return <Navigate to="/" replace={true} /> 
	}
	return children 
}

export default Private