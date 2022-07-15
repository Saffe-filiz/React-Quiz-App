import Group from '../Assets/Images/Group.jpg'
import Navigation from '../Components/TheNavigation.js';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { showTopicModal, setQuestions, quizReady, setQuestTopic } from '../Stores/quizStore.js';

import { useEffect } from 'react'

function Home () {
	const navigation = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.user);
	const { questions } = useSelector((state) => state.questions);

    useEffect(() => {
    	dispatch(setQuestions([]));
    	dispatch(quizReady(false));
    	dispatch(setQuestTopic([]));
    }, [])

	const startSalving = () => !user ? navigation('/login', {replace: false}): dispatch(showTopicModal(true));

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