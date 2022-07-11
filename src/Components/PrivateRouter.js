import { Navigate } from "react-router-dom";

function Private ({quizIsReady, children }) {
	if(!quizIsReady){
		return <Navigate to="/" replace={true} /> 
	}
	return children 
}

export default Private