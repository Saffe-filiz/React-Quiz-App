import Time from '../Assets/Icons/Time.svg';
import { ReactComponent as Arrow}  from '../Assets/Icons/Arrow.svg';
import Skip from '../Assets/Icons/Skip.svg';

function Control() {
	return (
		<div className="controlContent">
			<span className="previous button">
			    <Arrow className="mext-previous"/>
			    Previous
			</span>
			<span><img src={Time}/></span>
			<div>
				<span className="next button">
				    Next
				    <Arrow className="mext-arrow"/>				    
				</span>
				<span className="skip button">
				    Skip
				    <img src={Skip}/>
				</span>
			</div>
		</div>
	)
}

export default Control