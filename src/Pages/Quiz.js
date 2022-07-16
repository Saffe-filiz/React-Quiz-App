import Progress from '../Components/TheProgress.js';
import Options from '../Components/TheOptions.js';
import Control from '../Components/TheControl.js';
import Navigation from '../Components/TheNavigation.js';
import ContentBgImage from '../Assets/Icons/ContentBgImage.png'

import { useSelector, useDispatch } from 'react-redux'
import { setQuestions, quizReady, setQuestTopic } from '../Stores/quizStore.js';
import { Navigate } from "react-router-dom";

import { useState, useEffect } from 'react'

function Quiz() {
    const dispatch = useDispatch();
    const { questions, quizIsReady } = useSelector((state) => state.questions)

  //  window.onbeforeunload = () =>  "You are leaving the page";

    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    
   /* if(!quizIsReady){
        return <Navigate to="/" replace={true} /> 
    }*/
    return (
        <div className="container" style={{backgroundImage: `url(${ContentBgImage})`}}>
            <Navigation/>
            {/*<Progress questLength={5}/>*/}
           {questions.map(({question, suggestions, x}, index ) => (
            <div key={index}>
                <div className="questContent">
                    <h1 >{question}</h1> 
                </div>
                <Options options={suggestions} selectedQuestion={selectedQuestion} />
            </div>  )).slice(selectedQuestion, selectedQuestion +1)}
            <Control 
                selectedQuestion={selectedQuestion} 
                setSelectedQuestion={setSelectedQuestion}/>
        </div>
    );
};


export default Quiz;
