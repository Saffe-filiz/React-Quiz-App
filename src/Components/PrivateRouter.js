import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function Private ({ children }) {
	const user = useSelector((state) => state.user)
	if(false){
		return <Navigate to="/" replace={true} /> 
	}
	return children
}

export default Private