import { Navigate } from "react-router-dom";

function Public ({ user, children }) {
	console.log(!user, 'Public')
	if(user){
		return <Navigate to="/" replace={true} /> 
	}
	return children
}

export default Public