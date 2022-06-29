
function Progress ({questLength}) {
	return (
		<div className="progressContent">
		    <ul>
		    	{Array.from({length: questLength}, (_, index) => <li key={index}><span><p>{index +1}</p></span></li>)}
		    </ul>
	    </div>
	);
}

export default Progress;