import Time from '../Assets/Icons/Time.svg';
import { ReactComponent as Arrow}  from '../Assets/Icons/Arrow.svg';
import { ReactComponent as Skip} from '../Assets/Icons/Skip.svg';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { takeResponseTime } from '../Stores/quizStore.js';
import { setQuizResult } from '../firebase.js';

import { useState, useLayoutEffect, useEffect} from 'react'

function Control({selectedQuestion, setSelectedQuestion}) {

	const navigation = useNavigate();
	const dispatch = useDispatch();

	const  { questions, userAnswers } = useSelector((state) => state.questions)
	const  { user } = useSelector((state) => state.user)

	const [hiddenButton, setHiddenButton] = useState({
		previousButton: '',
		previousButtonDisabled: false,
		skipButton: '',
		skipButtonDisabled: false,
	});

    useLayoutEffect(() => {
    	if(selectedQuestion >= questions.length -1) {
    		setHiddenButton({
    			...hiddenButton,
    			skipButton: 'hiddenContent',
    			skipButtonDisabled: true})
    	}else if(selectedQuestion == 0){
    		setHiddenButton({
    			...hiddenButton,
    			previousButton: 'hiddenContent',
    			previousButtonDisabled: true})
    	}else {
    		setHiddenButton({
    			...hiddenButton,
		        previousButton: '',
		        previousButtonDisabled: false,
		        skipButton: '',
		        skipButtonDisabled: false,
	        });
    	}
    }, [selectedQuestion]);
    

    const [quizTime, setQuizTime] = useState(0);

    useEffect(() => {
        let time = setInterval(() => setQuizTime(preTime => preTime + 1), 1000);
        return () => clearInterval(time);
    }, [quizTime]);

    const endTheQuiz = () => {
    	let result = {
    		questions,
    		userAnswers,
    		uID: user.uid,
    		timePerQuestion: allQuestionTime,
    	}
    	setQuizResult(result);
    	navigation('/result', {replace: true});
    }


    const [questionTime, setQuestionTime] = useState(0);
    const [allQuestionTime, setAllQuestionsTime] = useState([]);

    useEffect(() => {
        let time = setInterval(() => setQuestionTime(preTime => preTime + 1), 1000);
        return () => clearInterval(time);
    }, [selectedQuestion]);


    const takeTime = () => {
    	let arr = {...allQuestionTime} ;
    	arr[selectedQuestion] >= 0 ? arr[selectedQuestion] += questionTime: arr[selectedQuestion] = questionTime  
    	setAllQuestionsTime(arr)
    	console.log(allQuestionTime)
    	setQuestionTime(0)
    }

    const nextQuestion = () => {
    	takeTime();
    	setSelectedQuestion(selectedQuestion += 1);
    }

    const prevQuestion = () =>  {
    	takeTime();
    	setSelectedQuestion(selectedQuestion -= 1);
    }

	return (
		<div className="controlContent">
			<button 
			    className={'previous button ' + hiddenButton.previousButton} 
			    onClick={() => prevQuestion()} 
			    disabled={hiddenButton.previousButtonDisabled}>
			    <Arrow className="arrowIcon"/>
			    Previous
			</button>
			<span className="quizTimer" style={{backgroundImage: `url(${Time})`}} draggable="false">
			    {quizTime}
			</span>
			<div>
			    {selectedQuestion == questions.length -1 ? 
			        <button 
				        className="next button"
				        onClick={() => endTheQuiz()}>Finis	    
				    </button>:
				    <button 
				        className="next button"
				        onClick={() => nextQuestion()}>Next
				        {selectedQuestion == 5 ?  null: <Arrow className="arrowIcon"/>}		    
				    </button>}
				   <button className={'skip button ' + hiddenButton.skipButton} 
				    onClick={() => nextQuestion()} 
				    disabled={hiddenButton.skipButtonDisabled}>
				    Skip
				    <Skip/>
				</button>
			</div>
		</div>
	)
}

export default Control