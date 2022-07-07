import Close from '../Assets/Icons/Close.svg';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

function ChooseTopic ({setShowPopUp, setQuizTopics}) {
	const [select, setSelect] = useState([])
	const topics = ['Music','Movie','Japan','Moon','Space','JavaScript','Front-End','Vue js','Tailwind','Human'];

    const isExist = value => select.includes(value);
    const addTopic = value => isExist(value) ? removeTopic(value) : selectTopic(value)
	const selectTopic = value => setSelect(select => [...select, value]);
	const removeTopic = value => setSelect(select.filter( topic => topic != value));
    let navigate = useNavigate();
    
	const startQuiz = () => {
		setQuizTopics(select);
		setShowPopUp(false);
		navigate('/quiz', {replace: true});
	}
	return (
		<div className="chooseTopicContent" onClick={() => setShowPopUp(false)}>
			<div className="choosingSubject" onClick={(e) => e.stopPropagation()}>
				<img src={Close} onClick={() => setShowPopUp(false)}/>
				<header><h1>Choose your favorite topic</h1></header>
				<div className="choosToicSubTitle"><p>Select more than 5 topics to start quiz</p></div>
				<div className="topic">
					<ul>
						{topics.map( (topic, index) => <li className={isExist(topic) ? 'isActive': ''}  onClick={() => addTopic(topic)} key={index}>{topic} {isExist(topic) ? <span><img src={Close}/></span>: null}</li>)}
					</ul>
				</div>
				<button disabled={!select} onClick={() => startQuiz()}>Start Quiz</button>
			</div>
		</div>
	)
}

export default ChooseTopic