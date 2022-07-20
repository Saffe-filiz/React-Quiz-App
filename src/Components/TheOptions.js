import { useSelector, useDispatch } from 'react-redux'
import { setAnswers, setScore, takeQuizScore } from '../Stores/quizStore.js';

import { useState, useEffect } from 'react';

let choice = ['A', 'B,', 'C', 'D', 'E', 'F', 'G', 'H'];

function Options({options, selectedQuestion}) {
	const { userAnswers, quizScore } = useSelector((state) => state.questions)
	const dispatch = useDispatch();

	const [answer, setAnswer] = useState('');
	const [selected, setSelected] = useState();

	useEffect(() => setAnswer(userAnswers[selectedQuestion]), [])

	const selecAnswer = ( value, isTrue, index ) => {
		if(index == selected) return;
		setAnswer(value)
		setSelected(index)
		dispatch(setAnswers({
			answer: value,
			index: selectedQuestion,
		}));
		dispatch(setScore({
			score: isTrue,
			index: selectedQuestion,
		}))
		dispatch(takeQuizScore());
	}

	return (
		<div className="optionsContent">
			<div className="quizOptions">
				{options.map(({suggestion, currect}, index) => (
					<div className={answer == suggestion ? 'options isActive': 'options'}  key={index} onClick={() => selecAnswer(suggestion, currect, index)}>
					    <span className="choiceName">{choice[index]}.</span> 
					     <p>{suggestion}</p>
					</div>
					))}
			</div>
		</div>
	)
}

export default Options;