import Group from '../Assets/Images/Group.jpg'
import Navigation from '../Components/TheNavigation.js';

function Home ({setShowPopUp}) {

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
					<span onClick={() => setShowPopUp(true)}>Start Salving</span>
				</div>
			</div>
		    </div>
		</div>
	)
}

export default Home