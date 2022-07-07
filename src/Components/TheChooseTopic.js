import Close from '../Assets/Icons/Close.svg';
import { useState } from 'react'

function ChooseTopic ({showPopUp, setShowPopUp}) {
	const [select, setSelect] = useState([])
	const topics = ['TagBadge','TagBadge','TagBadge','TagBadge','TagBadge','TagBadge','TagBadge','TagBadge','TagBadge','TagBadge'];

    const isExist = value => select.includes(value);
    const addTopic = value => isExist(value) ? removeTopic(value) : selectTopic(value)
	const selectTopic = value => setSelect(select => [...select, value]);
	const removeTopic = value => setSelect(select.filter( topic => topic != value));

    const closeModal = () => {
    	 setShowPopUp(false)
    }

	return (
		<div className="chooseTopicContent" onClick={() => setShowPopUp(false)}>
			<div className="choosingSubject" onClick={(e) => e.stopPropagation()}>
				<img src={Close} onClick={() => setShowPopUp(false)}/>
				<header><h1>Choose your favorite topic</h1></header>
				<div className="choosToicSubTitle"><p>Select more than 5 topics to start quiz</p></div>
				<div className="topic">
					<ul>
						{topics.map( (topic, index) => <li className={isExist(index) ? 'isActive': ''}  onClick={() => addTopic(index)} key={index}>{topic} {isExist(index) ? <span><img src={Close}/></span>: null}</li>)}
					</ul>
				</div>
				<button>Start Quiz</button>
			</div>
		</div>
	)
}

export default ChooseTopic