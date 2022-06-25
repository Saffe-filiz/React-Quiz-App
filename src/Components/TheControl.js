import Time from '../Assets/Icons/Time.svg';
import Arrow from '../Assets/Icons/Arrow.svg';

function Control() {
	return (
		<div className="controlContent">
			<span className="previous button">Previous</span>
			<span><img src={Time}/></span>
			<span>
				<span className="next button">Next</span>
				<span className="skip-button">Skip</span>
			</span>
		</div>
	)
}

export default Control