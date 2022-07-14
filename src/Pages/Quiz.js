import Progress from '../Components/TheProgress.js';
import Options from '../Components/TheOptions.js';
import Control from '../Components/TheControl.js';
import Navigation from '../Components/TheNavigation.js';
import ContentBgImage from '../Assets/Icons/ContentBgImage.png'

import { useSelector } from 'react-redux'
import { Prompt } from 'react-router'
import { setQuestions } from '../Stores/quizStore.js';

import { useState } from 'react'


function Quiz() {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
     const { questions } = useSelector((state) => state.questions)

    return (
        <div className="container" style={{backgroundImage: `url(${ContentBgImage})`}}>
            <Navigation/>
            {/*<Progress questLength={5}/>*/}
           {questions.map(({question, suggestions, x}, index ) => (
            <div key={index}>
                <div className="questContent">
                    <h1 >{question}</h1> 
                </div>
                <Options options={suggestions} answers={answers} setAnswers={setAnswers} selectedQuestion={selectedQuestion} />
             </div>   )).slice(selectedQuestion ,selectedQuestion +1)}
            <Control 
                selectedQuestion={selectedQuestion} 
                setSelectedQuestion={setSelectedQuestion}/>
        </div>
    );
};


export default Quiz;
