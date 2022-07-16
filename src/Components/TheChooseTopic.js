import Close from '../Assets/Icons/Close.svg';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setQuestions, quizReady, setQuestTopic, showTopicModal } from '../Stores/quizStore.js';

import { useState, useEffect } from 'react'

let x = [
      {
        question: '666 - 333',
        topic: 'Math',
        suggestions: [
            {suggestion: '223'},
            {suggestion: '333', currect: true},
            {suggestion: '444'},
            {suggestion: '555'},
        ]
    },
     {
        question: '25234 - 2334',
        topic: 'Math',
        suggestions: [
            {suggestion: '22.400'},
            {suggestion: '21.521'},
            {suggestion: '16.362'},
            {suggestion: '22.900', currect: true},
        ]
      },
       {
        question: '5 * 10',
        topic: 'Math',
        suggestions: [
            {suggestion: '50', currect: true},
            {suggestion: '55'},
            {suggestion: '60'},
            {suggestion: '45'},
        ]
      },
         {
        question: '5 * 10',
        topic: 'Math',
        suggestions: [
            {suggestion: '50', currect: true},
            {suggestion: '55'},
            {suggestion: '60'},
            {suggestion: '45'},
        ]
      },
        {
        question: '5 * 10',
        topic: 'Moon',
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

	const [select, setSelect] = useState([])
	const topics = ['Music','Movie','Japan','Moon','Space','JavaScript','Front-End','Vue js','Tailwind','Human'];

	useEffect(() => {
		setSelect(select.concat(...quizTopics))
	}, []);

	useEffect(() => {
		let isReady = select.length >= 5 
	    dispatch(quizReady(isReady))
	}, [select])

    const isExist = value => select.includes(value);
    const addTopic = value => isExist(value) ? removeTopic(value) : selectTopic(value)
	const selectTopic = value => setSelect(select => [...select, value]);
	const removeTopic = value => setSelect(select.filter( topic => topic != value));

    
	const startQuiz = () => {
		dispatch(setQuestions(x))
		dispatch(showTopicModal(false));
		navigate('/quiz', {replace: true});
	}

	const setTopic = () => {
		dispatch(showTopicModal(false));
		dispatch(setQuestTopic(select));
	}

	return (
		<div className="chooseTopicContent" onClick={() => setTopic()}>
			<div className="choosingSubject" onClick={(e) => e.stopPropagation()}>
				<img src={Close} onClick={() => setTopic()}/>
				<header><h1>Choose your favorite topic</h1></header>
				<div className="choosToicSubTitle"><p>Select more than 5 topics to start quiz</p></div>
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