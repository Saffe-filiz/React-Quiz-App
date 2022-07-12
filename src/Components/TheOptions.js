import { useState, useEffect } from 'react';

let choice = ['A', 'B,', 'C', 'D', 'E', 'F', 'G', 'H'];

function Options({options, answers, setAnswers, selectedQuestion}) {
	const [answer, setAnswer] = useState('');

	useEffect(() => {
		setAnswer(answers[selectedQuestion])
	}, [answers])

	const selecAnswer = ( value ) => {
		console.log(answers)
		setAnswer(answers[selectedQuestion] = value);
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