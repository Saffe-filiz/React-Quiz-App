import Navigation from '../Components/TheNavigation.js';

import { getQuizResult } from '../firebase.js';
import { useSelector } from 'react-redux';

import { useState, useEffect} from 'react'

function QuizResult ({ userID }) {
	const  { quizResults } = useSelector((state) => state.questions);

	useEffect(() => {
		getResult()
	},[])

	const getResult = async () => {
		await getQuizResult(userID)
	}
	return (
		<div className="container">
		<Navigation/>
		    <div className="quizResult">
			    {Object.keys(quizResults).map( (item, index) => (
				    <div className="resultCart" key={index}>{quizResults[item].uID}</div>
			    ))}
		    </div>
		</div>
	);
}

export default QuizResult