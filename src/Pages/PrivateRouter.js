import { Navigate } from "react-router-dom";

function Private ({ children }) {
	if(false){
		return <Navigate to="/" replace={true} />
	}
	return children
}

export default Private