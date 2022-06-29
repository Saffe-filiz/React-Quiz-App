import Time from '../Assets/Icons/Time.svg';
import { ReactComponent as Arrow}  from '../Assets/Icons/Arrow.svg';
import { ReactComponent as Skip} from '../Assets/Icons/Skip.svg';
import { useState, useEffect } from 'react'

function Control({selectedQuestion, setSelectedQuestion}) {

	const [hiddenSkipButton, setSkipButton] = useState('');
	const [hiddenPreviousButton, setPreviousButton] = useState('')
    
    useEffect(() => {
    	if(selectedQuestion >= 5) {
    		setSkipButton('hiddenContent')
    	}else if(selectedQuestion == 0){
    		setPreviousButton('hiddenContent')
    	}else {
    		setPreviousButton('');
    		setSkipButton('');
    	}
    }, [selectedQuestion])


	return (
		<div className="controlContent">
			<span className={'previous button ' + hiddenPreviousButton} onClick={() => setSelectedQuestion(selectedQuestion -= 1)}>
			    <Arrow className="arrowIcon"/>
			    Previous
			</span>
			<span><img src={Time}/></span>
			<div>
				<span className="next button" onClick={() => setSelectedQuestion(selectedQuestion += 1)}>
				    Next
				    <Arrow className="arrowIcon"/>				    
				</span>
				<span className={'skip button ' + hiddenSkipButton} onClick={() => setSelectedQuestion(selectedQuestion += 1)}>
				    Skip
				    <Skip/>
				</span>
			</div>
		</div>
	)
}

export default Control