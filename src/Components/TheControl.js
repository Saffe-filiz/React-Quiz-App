import Time from '../Assets/Icons/Time.svg';
import { ReactComponent as Arrow}  from '../Assets/Icons/Arrow.svg';
import { ReactComponent as Skip} from '../Assets/Icons/Skip.svg';

function Control({selectedQuestion, setSelectedQuestion}) {

	return (
		<div className="controlContent">
			<span className="previous button" onClick={() => setSelectedQuestion(selectedQuestion -= 1)}>
			    <Arrow className="arrowIcon"/>
			    Previous
			</span>
			<span><img src={Time}/></span>
			<div>
				<span className="next button" onClick={() => setSelectedQuestion(selectedQuestion += 1)}>
				    Next
				    <Arrow className="arrowIcon"/>				    
				</span>
				<span className="skip button" onClick={() => setSelectedQuestion(selectedQuestion += 1)}>
				    Skip
				    <Skip/>
				</span>
			</div>
		</div>
	)
}

export default Control