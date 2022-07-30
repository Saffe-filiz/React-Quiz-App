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
			{Object.keys(quizResults).map( (item, index) => (
				<span key={index}>{quizResults[item].uID}</span>
			))}
		</div>
	);
}

export default QuizResult