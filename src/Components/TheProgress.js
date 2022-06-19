
function Progress ({selectedQuestion, setSelectedQuestion, questLength}) {
	return (
		<div className="progressContent">
		    <ul>
		    	{Array.from({length: questLength}, (_, index) => <li key={index}><span>{index +1}</span></li>)}
		    </ul>
	    </div>
	);
}

export default Progress;