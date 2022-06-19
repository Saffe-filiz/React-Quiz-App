let choice = ['A', 'B,', 'C', 'D', 'F', 'G']

function Options({options}) {
	return (
		<div className="optionsContent">
			<div className="quizOptions">
				{options.map( (str, index) => <div className="options" key={index}><span>{choice[index]}.</span></div>)}
			</div>
		</div>
	)
}

export default Options;