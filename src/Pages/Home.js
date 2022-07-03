import Group from '../Assets/Images/Group.jpg'
import Navigation from '../Components/TheNavigation.js';
import { Link } from "react-router-dom";


function Home () {

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
				<div className="startQuiz">
					<Link  to="/quiz">Start Salving</Link>
				</div>
			</div>
		    </div>
		</div>
	)
}

export default Home