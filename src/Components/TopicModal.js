import Close from '../Assets/Icons/Close.svg';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setQuestions, quizReady, getTopics, showTopicModal } from '../Stores/quizStore.js';

import { useState, useEffect, useLayoutEffect } from 'react'

let x = [
      {
        question: '666 - 333',
        subject: 'Math',
        suggestions: [
            {suggestion: '223'},
            {suggestion: '333', currect: true},
            {suggestion: '444'},
            {suggestion: '555'},
        ]
    },
     {
        question: '25234 - 2334',
        subject: 'Music',
        suggestions: [
            {suggestion: '22.400'},
            {suggestion: '21.521'},
            {suggestion: '16.362'},
            {suggestion: '22.900', currect: true},
        ]
      },
       {
        question: '5 * 10',
        subject: 'Math',
        suggestions: [
            {suggestion: '50', currect: true},
            {suggestion: '55'},
            {suggestion: '60'},
            {suggestion: '45'},
        ]
      },
         {
        question: 'Japan',
        subject: 'Japan',
        suggestions: [
            {suggestion: '50', currect: true},
            {suggestion: '55'},
            {suggestion: '60'},
            {suggestion: '45'},
        ]
      },
        {
        question: '5 * 10',
        subject: 'Moon',
        suggestions: [
            {suggestion: '50', currect: true},
            {suggestion: '55'},
            {suggestion: '60'},
            {suggestion: '45'},
        ]
      },
    ]

function ChooseTopic ({setShowPopUp}) {

    const navigate = useNavigate();
	const dispatch = useDispatch();
	const  { quizIsReady, quizTopics } = useSelector((state) => state.questions)

	const [selectSubject, setSelectSubject] = useState([])
	const [topics, setTopic] = useState([]);

	useLayoutEffect(() => {
		setSelectSubject(selectSubject.concat(...quizTopics));

		let questions = x.map( item => item.subject);
		questions = [...new Set(questions)]
		setTopic(questions)
	}, []);

	useEffect(() => {
		let isReady = selectSubject.length >= Math.floor(topics.length / 2)
	    dispatch(quizReady(isReady))
	}, [selectSubject]);

    const isExist = value => selectSubject.includes(value);
    const addTopic = value => isExist(value) ? removeTopic(value) : selectTopic(value);
	const selectTopic = value => setSelectSubject(select => [...selectSubject, value]);
	const removeTopic = value => setSelectSubject(selectSubject.filter( topic => topic != value));
    
	const startQuiz = () => {
		filterSubject(x);
		dispatch(showTopicModal(false));
		navigate('/quiz', {replace: true});
	}

	const sendTopics = () => {
		dispatch(showTopicModal(false));
		dispatch(getTopics(selectSubject));
	}

	const filterSubject = (object) => {
		let result = []
		for(let i = 0; i < selectSubject.length; i++){
			let questions = object.filter( (item) => item.subject == selectSubject[i] );
			result.push(questions)
		}
		dispatch(setQuestions(result.flat()));
	};

	return (
		<div className="chooseTopicContent" onClick={() => sendTopics()}>
			<div className="choosingSubject" onClick={(e) => e.stopPropagation()}>
				<img src={Close} onClick={() => sendTopics()}/>
				<header><h1>Choose your favorite topic</h1></header>
				<div className="choosToicSubTitle"><p>{`Select more than ${Math.floor(topics.length / 2)} topics to start quiz`}</p></div>
				<div className="topic">
					<ul>
						{topics.map( (topic, index) => <li className={isExist(topic) ? 'isActive': ''}  onClick={() => addTopic(topic)} key={index}>{topic} {isExist(topic) ? <span><img src={Close}/></span>: null}</li>)}
					</ul>
				</div>
				<button disabled={!quizIsReady} onClick={() => startQuiz()}>Start Quiz</button>
			</div>
		</div>
	)
}

export default ChooseTopic