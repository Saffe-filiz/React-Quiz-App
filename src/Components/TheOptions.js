import { useState } from 'react';

let choice = ['A', 'B,', 'C', 'D', 'E', 'F', 'G', 'H'];

function Options({options, index}) {
	const [answers, setAnswers] = useState([]);

	const selecAnswer = ( value ) => {
		
		setAnswers(pre => [...pre, value]);
		console.log(answers,index )
	}

	return (
		<div className="optionsContent">
			<div className="quizOptions">
				{options.map(({suggestion}, index) => (
					<div className={answers[index] == suggestion ? 'options isActive': 'options'}  key={index} onClick={() => selecAnswer(suggestion)}>
					    <span className="choiceName">{choice[index]}.</span> 
					     <p>{suggestion}</p>
					</div>
					))}
			</div>
		</div>
	)
}

export default Options;