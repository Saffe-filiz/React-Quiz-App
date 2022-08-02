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

	const  { questions, userAnswers, quizScore } = useSelector((state) => state.questions)
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


    const [questionTime, setQuestionTime] = useState(0);
    const [timePerQuestion, setTimePerQuestion] = useState([]);

    useEffect(() => {
        let time = setInterval(() => setQuestionTime(preTime => preTime + 1), 1000);
        return () => clearInterval(time);
    }, [selectedQuestion]);

    useEffect(() => {
    	let arr = {...timePerQuestion} ;
    	arr[selectedQuestion] ? arr[selectedQuestion] += questionTime: arr[selectedQuestion] = questionTime  
    	setTimePerQuestion(arr)
    	setQuestionTime(0)
    }, [selectedQuestion])

    const endTheQuiz = () => {
    	setQuizResult({
    		questions,
    		userAnswers,
    		timePerQuestion,
    		quizTime,
    		quizScore,
    		uID: user.uid,
    		totalNumberOfQuestions: questions.length,
    	});
    	navigation('/result', {replace: true});
    }

	return (
		<div className="controlContent">
			<button 
			    className={'previous button ' + hiddenButton.previousButton} 
			    onClick={() => setSelectedQuestion(selectedQuestion += 1)} 
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
				        onClick={() => setSelectedQuestion(selectedQuestion += 1)}>Next
				        {selectedQuestion == questions.length -1 ?  null: <Arrow className="arrowIcon"/>}		    
				    </button>}
				   <button className={'skip button ' + hiddenButton.skipButton} 
				    onClick={() => setSelectedQuestion(selectedQuestion += 1)} 
				    disabled={hiddenButton.skipButtonDisabled}>
				    Skip
				    <Skip/>
				</button>
			</div>
		</div>
	)
}

export default Control