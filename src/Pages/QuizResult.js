import { getQuizResult } from '../firebase.js';
import { useSelector } from 'react-redux';

import { useState, useLayoutEffect, useEffect} from 'react'

function QuizResult () {
	const  { user } = useSelector((state) => state.user);

	useEffect(() => {
		getResult()
		console.log('test')
	},[])

	const getResult =  () => {
		 getQuizResult(user.uid)
	}
	return (
		<div className="container">Test</div>
	);
}

export default QuizResult