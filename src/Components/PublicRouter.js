import { Navigate } from "react-router-dom";

function Public ({ user, children }) {
	if(user){
		return <Navigate to="/" replace={true} /> 
	}
	return children
}

export default Public