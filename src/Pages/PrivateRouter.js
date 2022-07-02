import { Navigate } from "react-router-dom";

function Private ({ children }) {
	if(true){
		return <Navigate to="/" replace={true} />
	}
	return children
}

export default Private