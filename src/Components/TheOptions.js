let choice = ['A', 'B,', 'C', 'D', 'F', 'G']

function Options({options}) {
	return (
		<div className="optionsContent">
			<div className="quizOptions">
				{options.map(({suggestion}, index) => <div className="options" key={index}><span className="choiceName">{choice[index]}.</span> <p>{suggestion}</p></div>)}
			</div>
		</div>
	)
}

export default Options;