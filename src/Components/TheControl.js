import Time from '../Assets/Icons/Time.svg';
import { ReactComponent as Arrow}  from '../Assets/Icons/Arrow.svg';
import { ReactComponent as Skip} from '../Assets/Icons/Skip.svg';
import { useState, useLayoutEffect } from 'react'

function Control({selectedQuestion, setSelectedQuestion}) {

	const [hiddenButton, setHiddenButton] = useState({
		previousButton: '',
		previousButtonDisabled: false,
		skipButton: '',
		skipButtonDisabled: false,
	});
    
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
    }, [selectedQuestion])


	return (
		<div className="controlContent">
			<button className={'previous button ' + hiddenButton.previousButton} onClick={() => setSelectedQuestion(selectedQuestion -= 1)} disabled={hiddenButton.previousButtonDisabled}>
			    <Arrow className="arrowIcon"/>
			    Previous
			</button>
			<span>
			    <img src={Time} draggable="false"/>
			</span>
			<div>
				<button className="next button" onClick={() => setSelectedQuestion(selectedQuestion += 1)}>
				    Next
				    <Arrow className="arrowIcon"/>				    
				</button>
				<button className={'skip button ' + hiddenButton.skipButton} onClick={() => setSelectedQuestion(selectedQuestion += 1)} disabled={hiddenButton.skipButtonDisabled}>
				    Skip
				    <Skip/>
				</button>
			</div>
		</div>
	)
}

export default Control