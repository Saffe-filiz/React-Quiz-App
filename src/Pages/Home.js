import Group from '../Assets/Images/Group.jpg'
import Navigation from '../Components/TheNavigation.js';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

function Home ({setShowPopUp}) {
	const { user } = useSelector((state) => state.user);
	const navigation = useNavigate();

	const startSalving = () => {
		if(!user) {
			navigation('/login', {replace: false});
		}else {
			setShowPopUp(true)
		}
		
	}

	return (
		<div className="container">
		<Navigation/>
		    <div className="loginContainer" style={{backgroundImage: `url(${Group})`}}>
			<div className="homeContent">
			    <header>
				    <h1>Learn <br/>new concepts <br/> for each question</h1>
			    </header>
			    <div className="subHeader">
			    	<p>We help you prepare for exams and quizes </p>
			    </div>
				<div className="startQuiz" onClick={() => startSalving()}>
					<span>Start Salving</span>
				</div>
			</div>
		    </div>
		</div>
	)
}

export default Home