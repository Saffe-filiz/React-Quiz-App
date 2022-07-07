import Time from '../Assets/Icons/Time.svg';
import { ReactComponent as Arrow}  from '../Assets/Icons/Arrow.svg';
import { ReactComponent as Skip} from '../Assets/Icons/Skip.svg';
import { useState, useLayoutEffect, useRef, useEffect} from 'react'

function Control({selectedQuestion, setSelectedQuestion}) {

	const [hiddenButton, setHiddenButton] = useState({
		previousButton: '',
		previousButtonDisabled: false,
		skipButton: '',
		skipButtonDisabled: false,
	});

	  const [timer, setTimer] = useState(0);
    
    useLayoutEffect(() => {
    	if(selectedQuestion >= 5) {
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
    
    
    useEffect(() => {
        let time = setInterval(() => setTimer(timer+1), 1000);
        if(timer < 60) return;
        return ()=> clearInterval(time);
    }, [timer])

	return (
		<div className="controlContent">
			<button 
			    className={'previous button ' + hiddenButton.previousButton} 
			    onClick={() => setSelectedQuestion(selectedQuestion -= 1)} 
			    disabled={hiddenButton.previousButtonDisabled}>
			    <Arrow className="arrowIcon"/>
			    Previous
			</button>
			<span>
			    {timer}
			    <img src={Time} draggable="false"/>
			</span>
			<div>
				<button 
				    className="next button"
				    onClick={() => setSelectedQuestion(selectedQuestion += 1)}>
				    {selectedQuestion == 5 ? 'Finis': 'Next'}
				    {selectedQuestion == 5 ?  null: <Arrow className="arrowIcon"/>}		    
				</button>
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