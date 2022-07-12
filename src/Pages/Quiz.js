import Progress from '../Components/TheProgress.js';
import Options from '../Components/TheOptions.js';
import Control from '../Components/TheControl.js';
import Navigation from '../Components/TheNavigation.js';
import ContentBgImage from '../Assets/Icons/ContentBgImage.png'

import { useSelector } from 'react-redux'
import { Prompt } from 'react-router'

import { useState } from 'react'


function Quiz() {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
     const questions = [
      {
        question: '666 - 333',
        suggestions: [
            {suggestion: '223'},
            {suggestion: '333', currect: true},
            {suggestion: '444'},
            {suggestion: '555'},
        ]
    },
     {
        question: '25234 - 2334',
        suggestions: [
            {suggestion: '22.400'},
            {suggestion: '21.521'},
            {suggestion: '16.362'},
            {suggestion: '22.900', currect: true},
        ]
      },
       {
        question: '5 * 10',
        suggestions: [
            {suggestion: '50', currect: true},
            {suggestion: '55'},
            {suggestion: '60'},
            {suggestion: '45'},
        ]
      }
    ]

    return (
        <div className="container" style={{backgroundImage: `url(${ContentBgImage})`}}>
            <Navigation/>
            {/*<Progress questLength={5}/>*/}
           {questions.map(({question, suggestions, x}, index ) => (
            <div key={index}>
                <div className="questContent">
                    <h1 >{question}</h1> 
                </div>
                <Options options={suggestions} index={index}/>
             </div>   )).slice(selectedQuestion ,selectedQuestion +1)}
            <Control 
                selectedQuestion={selectedQuestion} 
                setSelectedQuestion={setSelectedQuestion}/>
        </div>
    );
};


export default Quiz;
