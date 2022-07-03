
import Group from '../Assets/Images/Group.jpg'
import Navigation from '../Components/TheNavigation.js';


function Home () {

	return (
		<div className="container">
		<Navigation/>
		    <div className="loginContainer" style={{backgroundImage: `url(${Group})`}}>
			<div className="homeContent">
			    <header>
				    <h1>Learn <br/>new concepts <br/> for each question</h1>
			    </header>
			</div>
		    </div>
		</div>
	)
}

export default Home