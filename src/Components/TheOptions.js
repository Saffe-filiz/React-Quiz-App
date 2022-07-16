import { useSelector, useDispatch } from 'react-redux'
import { setAnswers } from '../Stores/quizStore.js';

import { useState, useEffect } from 'react';

let choice = ['A', 'B,', 'C', 'D', 'E', 'F', 'G', 'H'];

function Options({options, selectedQuestion}) {
	const [answer, setAnswer] = useState('');

	const { userAnswers } = useSelector((state) => state.questions)

	const dispatch = useDispatch();

	useEffect(() => {
		let value = userAnswers;
		console.log(value)
		//setAnswer(userAnswers[selectedQuestion])
	}, [answer])

	const selecAnswer = ( value ) => {
		dispatch(setAnswers({
			answer: value,
			index: selectedQuestion
		}))
	}

	return (
		<div className="optionsContent">
			<div className="quizOptions">
				{options.map(({suggestion}, index) => (
					<div className={answer == suggestion ? 'options isActive': 'options'}  key={index} onClick={() => selecAnswer(suggestion)}>
					    <span className="choiceName">{choice[index]}.</span> 
					     <p>{suggestion}</p>
					</div>
					))}
			</div>
		</div>
	)
}

export default Options;